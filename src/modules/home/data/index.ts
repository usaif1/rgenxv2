// /* eslint-disable @typescript-eslint/no-explicit-any */
// export const mutationData = [
//   {
//     gene: "NRAS",
//     cancerType: "Melanoma",
//     frequency: 6.5,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "PTEN",
//     cancerType: "Endometrial Cancer",
//     frequency: 4.1,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "PIK3CA",
//     cancerType: "Breast Cancer",
//     frequency: 11.7,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "ALK",
//     cancerType: "Neuroblastoma",
//     frequency: 3.2,
//     significance: "VUS",
//     response: "Unknown",
//   },
//   {
//     gene: "BRAF",
//     cancerType: "Melanoma",
//     frequency: 9.8,
//     significance: "Pathogenic",
//     response: "Sensitive",
//   },
//   {
//     gene: "BRCA1",
//     cancerType: "Ovarian Cancer",
//     frequency: 5.7,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "EGFR",
//     cancerType: "Lung Adenocarcinoma",
//     frequency: 8.2,
//     significance: "Likely Pathogenic",
//     response: "Sensitive",
//   },
//   {
//     gene: "IDH1",
//     cancerType: "Glioma",
//     frequency: 7.9,
//     significance: "Pathogenic",
//     response: "Sensitive",
//   },
//   {
//     gene: "KRAS",
//     cancerType: "Colorectal Cancer",
//     frequency: 15.3,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
//   {
//     gene: "TP53",
//     cancerType: "Breast Cancer",
//     frequency: 12.5,
//     significance: "Pathogenic",
//     response: "Resistant",
//   },
// ];

// // Generic grouping function
// const groupDataByKey = (data: any, keyName: any) => {
//   const grouped = data.reduce((acc: any, item: any) => {
//     const key = item[keyName];
//     acc[key] = (acc[key] || 0) + 1;
//     return acc;
//   }, {});

//   return Object.entries(grouped).map(([name, value]) => ({ name, value }));
// };

// // Process data for charts
// export const geneFrequencyData = mutationData.map(
//   ({ gene: name, frequency, response }) => ({
//     name,
//     frequency,
//     responseColor: response === "Sensitive" ? "#A78BFA" : "#F472B6",
//   })
// );

// export const cancerTypeDistribution = groupDataByKey(
//   mutationData,
//   "cancerType"
// );
// export const significanceData = groupDataByKey(mutationData, "significance");
// export const responseData = groupDataByKey(mutationData, "response");
export const mutationData = [
  {
    gene: "CFTR",
    cancerType: "Sickle Cell Anemia",
    frequency: 6.5,
    significance: "Pathogenic",
    response: "Resistant",
  },
  {
    gene: "HBB",
    cancerType: "Cystic Fibrosis",
    frequency: 4.1,
    significance: "Pathogenic",
    response: "Resistant",
  },
  {
    gene: "HEXA",
    cancerType: "Tay-Sachs Disease",
    frequency: 11.7,
    significance: "Pathogenic",
    response: "Resistant",
  },
  {
    gene: "HTT",
    cancerType: "Thalassemia",
    frequency: 3.2,
    significance: "VUS",
    response: "Unknown",
  },
  {
    gene: "BRCA1",
    cancerType: "Huntington’s Disease",
    frequency: 9.8,
    significance: "Pathogenic",
    response: "Sensitive",
  },
  {
    gene: "BRCA2",
    cancerType: "G6PD Deficiency",
    frequency: 5.7,
    significance: "Pathogenic",
    response: "Resistant",
  },
  {
    gene: "DMD",
    cancerType: "Canavan Disease",
    frequency: 7.2,
    significance: "Likely Pathogenic",
    response: "Sensitive",
  },
];

// Fix: Group cancer types by summed frequency
export const cancerTypeDistribution = mutationData.reduce((acc, item) => {
  const existing = acc.find((entry) => entry.name === item.cancerType);
  if (existing) {
    existing.value += item.frequency;
  } else {
    acc.push({ name: item.cancerType, value: item.frequency });
  }
  return acc;
}, [] as { name: string; value: number }[]);

export const geneFrequencyData = mutationData.map(
  ({ gene: name, frequency, response }) => ({
    name,
    frequency,
    responseColor: response === "Sensitive" ? "#A78BFA" : "#F472B6",
  })
);

// Grouping helper
const groupDataByKey = (data: any, keyName: any) => {
  const grouped = data.reduce((acc: any, item: any) => {
    const key = item[keyName];
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(grouped).map(([name, value]) => ({ name, value }));
};

export const significanceData = groupDataByKey(mutationData, "significance");
export const responseData = groupDataByKey(mutationData, "response");
