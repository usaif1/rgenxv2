/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

//----------ALI--------------------
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Patient } from "../types/patientTypes";
// import Vlogo from "@/assets/Vgenomics_logo.png";

type GenerateReportPDFArgs = {
  selectedRows: Set<any>;
  table: any;
  patientDetails: Patient;
};
const drawBullets = (
  doc: any,
  bullets: string[],
  startY: number,
  margin: number,
  maxWidth: number
): number => {
  const bullet = "• ";
  const bulletWidth = doc.getTextWidth(bullet);
  let y = startY;

  bullets.forEach((text) => {
    const lines = doc.splitTextToSize(text, maxWidth - bulletWidth);

    // Draw first line with bullet
    doc.text(bullet + lines[0], margin, y);

    // Draw wrapped lines aligned under the first word (not bullet)
    for (let i = 1; i < lines.length; i++) {
      y += 6;
      doc.text(lines[i], margin + bulletWidth, y);
    }

    y += 6; // spacing between bullet points
  });

  return y;
};

export const generateReportPDF = ({
  selectedRows,
  table,
  patientDetails,
}: GenerateReportPDFArgs) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const usableWidth = pageWidth - 2 * margin;
  const spacing = 6;
  const BLUE = [17, 63, 146]; // #000080
  const ORANGE = [255, 165, 0];

  const checkPageBreak = (currentY: number, buffer = 30) => {
    if (currentY + buffer > pageHeight - 20) {
      doc.addPage();
      return 20;
    }
    return currentY;
  };

  // Add logo in the top-right corner
  const logo = "@/assets/Vgenomics_logo.png";
  const logoWidth = 50;
  const logoHeight = 20;
  const logoX = pageWidth - logoWidth - margin;
  const logoY = 10;

  doc.addImage(logo, "JPEG", logoX, logoY, logoWidth, logoHeight);

  // Add blue background for title (limited to margins)
  doc.setFillColor(...BLUE);
  doc.rect(margin, 40, usableWidth, 10, "F");
  doc.setFontSize(16);
  doc.setTextColor(255, 255, 255);
  doc.text("Whole Exome Sequencing Report", pageWidth / 2, 46, {
    align: "center",
  });

  doc.setTextColor(0, 0, 0);

  // Patient Information
  doc.setFontSize(12);
  doc.setTextColor(...ORANGE);
  doc.text("Patient Information", margin, 60);
  doc.setTextColor(0, 0, 0);

  autoTable(doc, {
    startY: 65,
    body: [
      [
        "UID :",
        patientDetails.vguid,
        // "Ref Dr. :", "XXXX"
      ],
      [
        "Patient Name :",
        `${patientDetails.firstname} ${patientDetails.lastname}`,
        // "Ref. Hospital :",
        // "XXXX",
      ],
      // ["Name :", "XXXX", "Sample Collection Date :"],
      [
        "Age/DOB :",
        patientDetails?.age || 0,

        // "Sample Receive Date :", "XXXX"
      ],
      ["Gender :", patientDetails?.gender || "Male"],
      // ["Report Released :", "XXXX"],
    ],
    theme: "plain",
    styles: { fontStyle: "normal", fontSize: 9 },
    alternateRowStyles: { fillColor: [173, 216, 230] },
    columnStyles: {
      0: { fontStyle: "bold" },
      2: { fontStyle: "bold" },
    },
    tableLineColor: [255, 255, 255],
    tableLineWidth: 0,
    margin: { left: margin, right: margin },
  });

  let y = doc.lastAutoTable.finalY + spacing;
  const tableBottomY = doc.lastAutoTable.finalY;
  doc.setDrawColor(0, 0, 0); // Black
  doc.setLineWidth(0.5);
  doc.line(margin, tableBottomY, pageWidth - margin, tableBottomY);

  const lineSpacing = 10; // Adjust as needed
  // let y = tableBottomY + lineSpacing;

  // CASE HISTORY
  doc.setFontSize(12);
  doc.setTextColor(...ORANGE);
  doc.text("Clinical Phenotype: (CASE HISTORY)", margin, y);
  y += 6;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  const casePoints = [
    "Patient presented with waddling gait.",
    "Walking on the toes.",
    "Large calf muscles.",
    "Learning disabilities.",
    "Evaluated for genes related to phenotype.",
  ];
  casePoints.forEach((point) => {
    y = checkPageBreak(y);
    doc.text("• " + point, margin, y);
    y += 6;
  });

  // FAMILY HISTORY
  y += 4;
  doc.setFontSize(12);
  doc.setTextColor(...ORANGE);
  doc.text("Clinical Phenotype: (FAMILY HISTORY)", margin, y);
  y += 6;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  const famPoints = [
    "Family history includes similar symptoms in siblings.",
    "Symptoms observed in at least one parent.",
    "Genetic counseling recommended.",
  ];
  famPoints.forEach((point) => {
    y = checkPageBreak(y);
    doc.text("• " + point, margin, y);
    y += 6;
  });

  // RESULTS
  y += 4;
  doc.setFontSize(12);
  doc.setTextColor(...ORANGE);
  doc.text("Results", margin, y);
  y += 8;

  // Variant Details Row - try rendering as a table row
  autoTable(doc, {
    startY: y,
    body: [["Variant Details"]],
    styles: {
      halign: "center",
      fontStyle: "bold",
      fillColor: BLUE,
      textColor: 255,
      fontSize: 10,
    },
    margin: { left: margin, right: margin },
    theme: "plain",
  });

  y = doc.lastAutoTable.finalY;

  // Results Table with top and bottom border
  autoTable(doc, {
    startY: y,
    head: [
      [
        "Gene",
        "Genomic Position",
        "cDNA/Protein Change",
        "Zygosity/Inheritance",
        "Allele Coverage",
        "Variant Consequence",
        "Associated Disorder",
        "ACMG/AMP Classification",
      ],
    ],
    body: Array.from(selectedRows).map((rowId) => {
      const row = table.getRowModel().rows.find((r) => r.id === rowId);
      return row
        ? row.getVisibleCells().map((cell: any) => cell.getValue())
        : [];
    }),
    theme: "grid",
    styles: { fontSize: 8 },
    headStyles: {
      fillColor: [255, 255, 255], // ✅ White background = no color
      textColor: [0, 0, 0], // Black text

      halign: "center",
      valign: "middle",

      //   lineColor: [0, 0, 0],       // Optional: black border lines
    },
    bodyStyles: {
      fontSize: 8,
    },
    tableLineWidth: 0.2,
    tableLineColor: [0, 0, 0],
    didDrawPage: (data) => (y = data.cursor.y + spacing),
  });
  doc.addPage(); // ⬅️ Forces new page
  y = 20;
  // Recommendations
  doc.setFontSize(12);
  doc.setTextColor(...ORANGE);
  doc.text("Recommendations", margin, y);
  y += 6;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  const recPoints = [
    "Validation of the variant by Sanger sequencing is recommended.",
    "Additional confirmation testing may be required.",
    "Consider genetic counseling for the patient and family members.",
  ];
  recPoints.forEach((line) => {
    y = checkPageBreak(y);
    doc.text("• " + line, margin, y);
    y += 6;
  });

  // Limitations
  y += 4;
  doc.setFontSize(12);
  doc.setTextColor(...ORANGE);
  doc.text("Limitations", margin, y);
  y += 6;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  const limitationsBullets = [
    "Pipeline have a false positive rate of 5–10% of detection.",
    "Certain types of genetic abnormalities are difficult to identify in sequencing data and have not been validated for clinical use, including long insertions, deletions, copy number alterations, long repetitive sequences, triplet repeat expansions, chromosomal rearrangements, polyploidy, repetitive regions including mono-, di-, and tri-nucleotide repeats, GC-rich regions, intronic variants inside and outside the splice-site, and epigenetic effects.",
    "Large insertions, deletions, duplications, inversions, and complex rearrangements cannot be characterized accurately by NGS as it uses short-read sequencing data.",
    "Only variations in genes potentially related to the patient’s phenotype are reported. Misinterpretation of results may occur if the information provided is inaccurate or incomplete.",
    "Rare polymorphisms may lead to false negative or positive results.",
    "This does not imply that reported variants can always explain all symptoms of the patient. More clinical details assist in more precise evaluation.",
    "If results obtained do not match with the clinical findings given, additional testing should be considered.",
    "Re-filtering based on additional clinical information can be done when required even after the final report has been issued.",
  ];

  y = drawBullets(doc, limitationsBullets, y, margin, 180);

  // Additional Information
  y += 4;
  doc.setFontSize(12);
  doc.setTextColor(...ORANGE);
  doc.text("Additional Information", margin, y);
  y += 6;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(
    "• Incidental gene analysis and reporting will be done after receiving consent from the parent/guardian.",
    margin,
    y
  );
  y += 10;

  // Disclaimer
  doc.setFontSize(12);
  doc.setTextColor(...ORANGE);
  doc.text("Disclaimer", margin, y);
  y += 6;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  const disclaimerBullets = [
    "It is presumed that the specimen used to perform the test belongs to the patient specified above, such verification having been carried out at the collection level of sample.",
    "Variants believed to be benign based on medical literature, or with population frequencies greater than or equal to 5%, or resulting in synonymous amino acid changes, or occurring in 5’ or 3’ untranslated regions are generally not reported.",
    "It has not been cleared or approved by the U.S. Food and Drug Administration (FDA) for diagnostic purposes. Hence, variant detection is recommended for research use only.",
    "The variants found need to be confirmed by Sanger sequencing, as it might be associated with having false positive/false negative results.",
  ];

  y = drawBullets(doc, disclaimerBullets, y, margin, 180);

  doc.addPage(); // ⬅️ Forces new page
  y = 20;
  // References
  doc.setFontSize(12);
  doc.setTextColor(...ORANGE);
  doc.text("References", margin, y);
  y += 6;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 255); // Link blue
  const links = [
    { text: "https://www.genecards.org/", url: "https://www.genecards.org/" },
    {
      text: "https://www.ncbi.nlm.nih.gov/snp/",
      url: "https://www.ncbi.nlm.nih.gov/snp/",
    },
    { text: "https://www.malacards.org/", url: "https://www.malacards.org/" },
    { text: "http://omim.org/entry/", url: "http://omim.org/entry/" },
  ];
  links.forEach(({ text, url }) => {
    y = checkPageBreak(y);
    doc.textWithLink(`• ${text}`, margin, y, { url });
    y += 6;
  });

  // "End of Report"
  y += 8;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text("End of Report", pageWidth / 2, y, { align: "center" });
  y += 8;

  // Draw horizontal line
  doc.setDrawColor(0, 0, 0); // Black
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);

  // 2. Reserve 30px space before signatures
  y += 40;

  // 3. Check if there's enough space left on the page
  if (y + 20 > pageHeight - 20) {
    doc.addPage();
    y = 40; // safe margin at top
  }

  // 4. Signatures
  doc.setFontSize(10);
  doc.setDrawColor(0, 0, 0);
  doc.line(margin, y, 80, y);
  doc.text("Bioinformatics Analyst", margin, y + 5);
  doc.line(120, y, pageWidth - margin, y);
  doc.text("Senior Genetic Counselor", 120, y + 5);

  // Save
  doc.save("Geneyx_Report.pdf");
};
