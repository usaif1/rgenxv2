import React from "react";

const CustomCheckbox = ({
  isChecked = false,
  onChange,
  width = "24px",
  height = "24px",
  borderColor = "#ccc",
  checkedColor = "#4caf50",
  uncheckedColor = "transparent",
  borderRadius = "4px",
  icon = null,
}) => {
  // Default checkmark icon
  const defaultIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16px"
      viewBox="0 0 24 24"
      width="16px"
      fill="white"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>
  );

  return (
    <label
      style={{
        display: "inline-block",
        width,
        height,
        position: "relative",
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        style={{
          opacity: 0,
          width: 0,
          height: 0,
          position: "absolute",
        }}
      />
      <span
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          backgroundColor: isChecked ? checkedColor : uncheckedColor,
          border: `2px solid ${borderColor}`,
          borderRadius,
          transition: "all 0.2s",
        }}
      >
        {isChecked && (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            {icon || defaultIcon}
          </span>
        )}
      </span>
    </label>
  );
};

export default CustomCheckbox;
