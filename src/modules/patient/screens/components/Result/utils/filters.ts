export const filterFunctionForText = (
  row: any,
  columnId: any,
  filterValue: any
) => {
  // Get the cell value and convert it to a normalized (trimmed, lowercase) string.
  const cellValue = row.getValue(columnId);
  const cellText = cellValue ? String(cellValue)?.trim().toLowerCase() : "";

  // Normalize the filter value.
  let filterText = "";
  let operator = "contains";
  if (typeof filterValue === "object" && filterValue !== null) {
    filterText = filterValue.value?.trim().toLowerCase();
    operator = filterValue.operator;
  } else {
    filterText = String(filterValue)?.trim().toLowerCase();
  }

  if (filterText === "") {
    return true;
  }

  // Apply filtering logic based on the operator.
  switch (operator) {
    case "startsWith":
      return cellText.startsWith(filterText);
    case "endsWith":
      return cellText.endsWith(filterText);
    case "equals":
      return cellText === filterText;
    case "contains":
      return cellText.includes(filterText);
    case "notContains":
      return !cellText.includes(filterText);
    default:
      return false;
  }
};

export const filterFunctionForNumbers = (
  row: any,
  columnId: any,
  filterValue: any
) => {
  const cellValue = row.getValue(columnId);
  const cellNumber = cellValue ? Number(String(cellValue)?.trim()) : NaN;

  let numericFilterValue;
  let operator = "equals"; // default operator

  // Check if the filterValue is an object (likely FilterObject) and extract the necessary details
  if (typeof filterValue === "object" && filterValue !== null) {
    const trimmed = filterValue.value.toString()?.trim();
    if (trimmed === "") {
      // If the filter input is empty, show all rows.
      return true;
    }
    numericFilterValue = Number(trimmed); // Convert the string to a number, handling scientific notation
    operator = filterValue.operator;
  } else {
    // If filterValue is a string or number, convert it to a number.
    numericFilterValue = Number(String(filterValue)?.trim());
  }

  // If numericFilterValue is not a valid number, show all rows.
  if (isNaN(numericFilterValue)) {
    return true;
  }

  // Apply filtering logic based on the operator.
  switch (operator) {
    case "equals":
      return cellNumber === numericFilterValue;
    case "greaterThan":
      return cellNumber > numericFilterValue;
    case "lessThan":
      return cellNumber < numericFilterValue;
    default:
      return false;
  }
};

export const filterFunctionForTextCheckbox = (
  row: any,
  columnId: any,
  filterValue: any
) => {
  // Convert cell value to a normalized string
  const cellValue = row.getValue(columnId);
  const cellText = cellValue ? String(cellValue).trim().toLowerCase() : "";

  // Case 1: If filterValue is an array (multi-select checkboxes)
  if (Array.isArray(filterValue)) {
    // If no items are selected, show all rows.
    if (filterValue.length === 0) {
      return true;
    }

    // Otherwise, keep the row if the cell text matches any of the selected checkboxes.
    return filterValue.some((selected) => selected?.toLowerCase() === cellText);
  }

  // Case 2: If filterValue is a single FilterObject or string
  let filterText = "";
  let operator = "contains";

  if (typeof filterValue === "object" && filterValue !== null) {
    filterText = filterValue.value?.trim().toLowerCase();
    operator = filterValue.operator;
  } else {
    filterText = String(filterValue)?.trim().toLowerCase();
  }

  // If there's no filter text, show all rows.
  if (filterText === "") {
    return true;
  }

  // Apply the single-value logic
  switch (operator) {
    case "startsWith":
      return cellText.startsWith(filterText);
    case "endsWith":
      return cellText.endsWith(filterText);
    case "equals":
      return cellText === filterText;
    case "contains":
      return cellText.includes(filterText);
    case "notContains":
      return !cellText.includes(filterText);
    default:
      return false;
  }
};
