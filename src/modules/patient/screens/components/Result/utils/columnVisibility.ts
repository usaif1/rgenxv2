// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const getDefaultColumnVisibility = (columns: any) => {
  const visibility = {};

  const traverse = (cols: any) => {
    cols.forEach((col: any) => {
      if ("id" in col) {
        // Assume visible unless meta.defaultVisibility is explicitly false.
        visibility[col?.id] =
          col.meta?.defaultVisibility === false ? false : true;
      }
      if ("columns" in col && Array.isArray(col.columns)) {
        traverse(col.columns);
      }
    });
  };

  traverse(columns);
  return visibility;
};
