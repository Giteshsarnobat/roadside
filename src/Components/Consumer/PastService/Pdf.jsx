import { PDFDocument, StandardFonts } from 'pdf-lib';

const generatePDF = async (item) => {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();

  // Add a new page to the document
  const page = pdfDoc.addPage();

  // Set the font and font size
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  page.setFont(font);
  page.setFontSize(12);

  // Add text to the page
  page.drawText(`Service Number: ${item.servicenumber}`, {
    x: 50,
    y: page.getHeight() - 50,
  });

  page.drawText(`Vehicle Number: ${item.vehicle.vehNumber}`, {
    x: 50,
    y: page.getHeight() - 70,
  });

  page.drawText(`Location: ${item.location}`, {
    x: 50,
    y: page.getHeight() - 90,
  });

  page.drawText(`Date: ${item.date}`, {
    x: 50,
    y: page.getHeight() - 110,
  });

  // Serialize the PDF document to a Uint8Array
  const pdfBytes = await pdfDoc.save();

  return pdfBytes;
};



