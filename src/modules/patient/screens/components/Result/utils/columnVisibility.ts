export const getDefaultColumnVisibility = (columns) => {
  const visibility = {};

  const traverse = (cols) => {
    cols.forEach((col) => {
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
