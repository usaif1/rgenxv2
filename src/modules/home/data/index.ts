/* eslint-disable @typescript-eslint/no-explicit-any */
export const mutationData = [
  {
    gene: "NRAS",
    cancerType: "Melanoma",
    frequency: 6.5,
    significance: "Pathogenic",
    response: "Resistant",
  },
  {
    gene: "PTEN",
    cancerType: "Endometrial Cancer",
    frequency: 4.1,
    significance: "Pathogenic",
    response: "Resistant",
  },
  {
    gene: "PIK3CA",
    cancerType: "Breast Cancer",
    frequency: 11.7,
    significance: "Pathogenic",
    response: "Resistant",
  },
  {
    gene: "ALK",
    cancerType: "Neuroblastoma",
    frequency: 3.2,
    significance: "VUS",
    response: "Unknown",
  },
  {
    gene: "BRAF",
    cancerType: "Melanoma",
    frequency: 9.8,
    significance: "Pathogenic",
    response: "Sensitive",
  },
  {
    gene: "BRCA1",
    cancerType: "Ovarian Cancer",
    frequency: 5.7,
    significance: "Pathogenic",
    response: "Resistant",
  },
  {
    gene: "EGFR",
    cancerType: "Lung Adenocarcinoma",
    frequency: 8.2,
    significance: "Likely Pathogenic",
    response: "Sensitive",
  },
  {
    gene: "IDH1",
    cancerType: "Glioma",
    frequency: 7.9,
    significance: "Pathogenic",
    response: "Sensitive",
  },
  {
    gene: "KRAS",
    cancerType: "Colorectal Cancer",
    frequency: 15.3,
    significance: "Pathogenic",
    response: "Resistant",
  },
  {
    gene: "TP53",
    cancerType: "Breast Cancer",
    frequency: 12.5,
    significance: "Pathogenic",
    response: "Resistant",
  },
];

// Generic grouping function
const groupDataByKey = (data: any, keyName: any) => {
  const grouped = data.reduce((acc: any, item: any) => {
    const key = item[keyName];
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(grouped).map(([name, value]) => ({ name, value }));
};

// Process data for charts
export const geneFrequencyData = mutationData.map(
  ({ gene: name, frequency, response }) => ({
    name,
    frequency,
    responseColor: response === "Sensitive" ? "#A78BFA" : "#F472B6",
  })
);

export const cancerTypeDistribution = groupDataByKey(
  mutationData,
  "cancerType"
);
export const significanceData = groupDataByKey(mutationData, "significance");
export const responseData = groupDataByKey(mutationData, "response");
