import jsPDF from 'jspdf';
import { ResumeData, Translations } from '../types';

const A4_WIDTH = 210;
const A4_HEIGHT = 297;
const MARGIN = 20;
const CONTENT_WIDTH = A4_WIDTH - (MARGIN * 2);

// Colors matching the website theme
const COLORS = {
  primary: '#10B981',
  secondary: '#1B365D',
  text: '#374151',
  lightText: '#6B7280',
  background: '#F9FAFB'
};

export const generatePDF = async (data: ResumeData, translations: Translations, filename: string): Promise<void> => {
  try {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    let yPosition = MARGIN;
    const lineHeight = 6;
    const sectionSpacing = 12;

    // Helper functions
    const addText = (text: string, x: number, y: number, options: any = {}) => {
      const { fontSize = 10, fontStyle = 'normal', color = COLORS.text, maxWidth = CONTENT_WIDTH } = options;
      
      pdf.setFontSize(fontSize);
      pdf.setFont('helvetica', fontStyle);
      
      // Convert hex color to RGB
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      pdf.setTextColor(r, g, b);
      
      if (maxWidth) {
        const lines = pdf.splitTextToSize(text, maxWidth);
        pdf.text(lines, x, y);
        return lines.length * lineHeight;
      } else {
        pdf.text(text, x, y);
        return lineHeight;
      }
    };

    const addSection = (title: string) => {
      yPosition += sectionSpacing;
      if (yPosition > A4_HEIGHT - 40) {
        pdf.addPage();
        yPosition = MARGIN;
      }
      
      // Section title with underline
      addText(title, MARGIN, yPosition, { 
        fontSize: 14, 
        fontStyle: 'bold', 
        color: COLORS.primary 
      });
      
      // Add underline
      pdf.setDrawColor(16, 185, 129); // primary color
      pdf.setLineWidth(0.5);
      pdf.line(MARGIN, yPosition + 2, MARGIN + 60, yPosition + 2);
      
      yPosition += lineHeight + 4;
    };

    const checkPageBreak = (requiredSpace: number = 30) => {
      if (yPosition + requiredSpace > A4_HEIGHT - MARGIN) {
        pdf.addPage();
        yPosition = MARGIN;
      }
    };

    // Load and add profile picture
    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    };

    // Header with name, title, and profile picture
    pdf.setFillColor(27, 54, 93); // secondary color
    pdf.rect(0, 0, A4_WIDTH, 50, 'F');
    
    try {
      // Try to load and add the profile picture
      const profileImg = await loadImage('/jorrit-harmanny.jpg');
      
      // Create canvas to get image data
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const imgSize = 35; // 35mm diameter
      
      canvas.width = imgSize * 3; // Higher resolution for better quality
      canvas.height = imgSize * 3;
      
      if (ctx) {
        // Draw circular clipped image
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, 2 * Math.PI);
        ctx.clip();
        
        // Draw the image to fill the circle
        ctx.drawImage(profileImg, 0, 0, canvas.width, canvas.height);
        
        // Convert to data URL and add to PDF
        const imgData = canvas.toDataURL('image/jpeg', 0.8);
        pdf.addImage(imgData, 'JPEG', A4_WIDTH - MARGIN - imgSize, 7.5, imgSize, imgSize);
      }
    } catch (error) {
      console.warn('Could not load profile picture:', error);
      // Continue without the image
    }
    
    // Adjust text positioning to accommodate the image
    const textMaxWidth = CONTENT_WIDTH - 45; // Leave space for the image
    
    addText(data.name, MARGIN, 25, { 
      fontSize: 24, 
      fontStyle: 'bold', 
      color: '#FFFFFF',
      maxWidth: textMaxWidth
    });
    
    addText(data.title, MARGIN, 35, { 
      fontSize: 16, 
      color: '#FFFFFF',
      maxWidth: textMaxWidth
    });

    yPosition = 60;

    // Contact Information
    const contactInfo = [
      `${translations.labels.email}: ${data.contact.email}`,
      `${translations.labels.phone}: ${data.contact.phone}`,
      `${translations.labels.location}: ${data.contact.location}`
    ];

    if (data.contact.website) {
      contactInfo.push(`${translations.labels.website}: ${data.contact.website.replace(/^https?:\/\//, '')}`);
    }

    contactInfo.forEach((info, index) => {
      const x = MARGIN + (index % 2) * (CONTENT_WIDTH / 2);
      const y = yPosition + Math.floor(index / 2) * lineHeight;
      addText(info, x, y, { fontSize: 9, color: COLORS.lightText });
    });

    yPosition += Math.ceil(contactInfo.length / 2) * lineHeight + sectionSpacing;

    // Professional Summary
    addSection(translations.sections.professionalSummary);
    const summaryHeight = addText(data.summary, MARGIN, yPosition, { 
      fontSize: 10, 
      maxWidth: CONTENT_WIDTH 
    });
    yPosition += summaryHeight;

    // Professional Experience
    addSection(translations.sections.professionalExperience);
    
    data.experience.forEach((exp, index) => {
      checkPageBreak(40);
      
      // Company and position
      addText(exp.position, MARGIN, yPosition, { 
        fontSize: 12, 
        fontStyle: 'bold' 
      });
      
      addText(`${exp.startDate} - ${exp.endDate}`, MARGIN + 120, yPosition, { 
        fontSize: 10, 
        color: COLORS.primary 
      });
      
      yPosition += lineHeight;
      
      addText(exp.company, MARGIN, yPosition, { 
        fontSize: 11, 
        fontStyle: 'bold', 
        color: COLORS.primary 
      });
      
      yPosition += lineHeight + 2;
      
      // Description
      const descHeight = addText(exp.description, MARGIN, yPosition, { 
        fontSize: 10, 
        maxWidth: CONTENT_WIDTH 
      });
      yPosition += descHeight + 2;
      
      // Achievements
      if (exp.achievements.length > 0) {
        addText(`${translations.sections.keyAchievements}`, MARGIN, yPosition, { 
          fontSize: 10, 
          fontStyle: 'bold' 
        });
        yPosition += lineHeight;
        
        exp.achievements.forEach(achievement => {
          checkPageBreak(15);
          addText('•', MARGIN + 5, yPosition, { fontSize: 10 });
          const achHeight = addText(achievement, MARGIN + 10, yPosition, { 
            fontSize: 10, 
            maxWidth: CONTENT_WIDTH - 10 
          });
          yPosition += achHeight;
        });
      }
      
      yPosition += sectionSpacing / 2;
    });

    // Skills & Expertise
    addSection(translations.sections.skillsExpertise);
    
    data.skillCategories.forEach((category, index) => {
      checkPageBreak(25);
      
      addText(category.category, MARGIN, yPosition, { 
        fontSize: 11, 
        fontStyle: 'bold', 
        color: COLORS.primary 
      });
      yPosition += lineHeight + 2;
      
      // Skills in two columns
      category.skills.forEach((skill, skillIndex) => {
        const x = MARGIN + (skillIndex % 2) * (CONTENT_WIDTH / 2);
        const y = yPosition + Math.floor(skillIndex / 2) * lineHeight;
        
        if (y > A4_HEIGHT - 30) {
          pdf.addPage();
          yPosition = MARGIN;
          return;
        }
        
        addText(`${skill.name} (${skill.level}/5)`, x, y, { fontSize: 9 });
      });
      
      yPosition += Math.ceil(category.skills.length / 2) * lineHeight + 8;
    });

    // Languages
    checkPageBreak(20);
    addText(translations.sections.languages, MARGIN, yPosition, { 
      fontSize: 11, 
      fontStyle: 'bold', 
      color: COLORS.primary 
    });
    yPosition += lineHeight + 2;
    
    data.languages.forEach(lang => {
      addText(`${lang.language}: ${lang.proficiency}`, MARGIN, yPosition, { fontSize: 10 });
      yPosition += lineHeight;
    });

    // Education
    addSection(translations.sections.education);
    
    data.education.forEach(edu => {
      checkPageBreak(25);
      
      addText(edu.institution, MARGIN, yPosition, { 
        fontSize: 11, 
        fontStyle: 'bold' 
      });
      
      addText(`${edu.startDate} - ${edu.endDate}`, MARGIN + 120, yPosition, { 
        fontSize: 10, 
        color: COLORS.primary 
      });
      
      yPosition += lineHeight;
      
      addText(`${edu.degree} in ${edu.field}`, MARGIN, yPosition, { 
        fontSize: 10, 
        fontStyle: 'italic' 
      });
      
      yPosition += lineHeight + 2;
      
      const descHeight = addText(edu.description, MARGIN, yPosition, { 
        fontSize: 10, 
        maxWidth: CONTENT_WIDTH 
      });
      yPosition += descHeight + 8;
    });

    // Projects
    addSection(translations.sections.projects);
    
    data.projects.forEach(project => {
      checkPageBreak(40);
      
      addText(project.name, MARGIN, yPosition, { 
        fontSize: 11, 
        fontStyle: 'bold' 
      });
      yPosition += lineHeight + 2;
      
      const descHeight = addText(project.description, MARGIN, yPosition, { 
        fontSize: 10, 
        maxWidth: CONTENT_WIDTH 
      });
      yPosition += descHeight + 2;
      
      // Project highlights
      if (project.highlights && project.highlights.length > 0) {
        addText(`${translations.sections.keyAchievements}`, MARGIN, yPosition, { 
          fontSize: 10, 
          fontStyle: 'bold' 
        });
        yPosition += lineHeight;
        
        project.highlights.forEach(highlight => {
          checkPageBreak(15);
          addText('•', MARGIN + 5, yPosition, { fontSize: 10 });
          const highlightHeight = addText(highlight, MARGIN + 10, yPosition, { 
            fontSize: 9, 
            maxWidth: CONTENT_WIDTH - 10 
          });
          yPosition += highlightHeight;
        });
        
        yPosition += 4;
      }
      
      // Technologies
      const techText = `Technologies: ${project.technologies.join(', ')}`;
      const techHeight = addText(techText, MARGIN, yPosition, { 
        fontSize: 9, 
        fontStyle: 'italic', 
        color: COLORS.lightText, 
        maxWidth: CONTENT_WIDTH 
      });
      yPosition += techHeight + 8;
    });

    // Save the PDF
    pdf.save(`${filename}.pdf`);

  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};