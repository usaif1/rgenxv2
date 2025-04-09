// dependencies
import React, {
  useEffect,
  //  useState
} from "react";

// data
import { headers } from "./data";

// store
import testStore from "../../../store/testStore";
// import CheckboxCustom from "./CheckboxCustom";

const GenomicDataTable = ({ rows, filteredRows }) => {
  const hiddenCols = testStore.use.hiddenCols();
  const colSpan = testStore.use.colSpan();

  useEffect(() => {
    const colsToHide = [];
    const colSpanObj = {};

    headers.forEach((header) => {
      const headersToBeHidden = header.subHeaders.slice(1);
      colsToHide.push(...headersToBeHidden);

      colSpanObj[header.header] = 1;
    });

    testStore.setState((prevState) => ({
      ...prevState,
      hiddenCols: colsToHide,
      colSpan: { ...colSpanObj },
    }));
  }, []);

  const onExpand = (header) => {
    const arr1 = [...header.subHeaders];
    const arr2 = [...hiddenCols];

    const result = arr2.filter((item) => !arr1.includes(item));

    testStore.setState((prevState) => ({
      ...prevState,
      hiddenCols: result,
      colSpan: {
        ...prevState.colSpan,
        [header.header]: header.subHeaders.length,
      },
    }));
    return;
  };

  const onContract = (header) => {
    const arr1 = [...header.subHeaders];
    const arr2 = [...hiddenCols];

    const headersToBeHidden = arr1.slice(1);

    const newHiddenCols = [...arr2, ...headersToBeHidden];

    testStore.setState((prevState) => ({
      ...prevState,
      hiddenCols: newHiddenCols,
      colSpan: {
        ...prevState.colSpan,
        [header.header]: 1,
      },
    }));
    // setHiddenCols(newHiddenCols);
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      <p className="pt-1 pl-1 font-semibold">
        Total no of rows:{" "}
        {filteredRows.length ? filteredRows?.length : rows.length}
      </p>

      {/* Set a fixed width and height for the table container */}
      <div className="flex">
        {/* <div className="flex flex-col gap-y-5 mt-14 pt-1 px-1 h-fit">
          <CheckboxCustom isChecked={true} />
          <CheckboxCustom isChecked={false} />
          <CheckboxCustom isChecked={true} />
          <CheckboxCustom isChecked={false} />
          <CheckboxCustom isChecked={true} />
        </div> */}
        <div
          className="relative flex-grow mt-4 border border-gray-300"
          style={{
            width: "100%", // Fixed width for the table container
            overflowX: "scroll", // Enable horizontal scrolling
            overflowY: "scroll", // Enable vertical scrolling
            height: "calc(100vh - 244px)",
          }}
        >
          <table className="table-auto border-collapse border border-gray-600">
            <thead>
              <tr>
                {headers.map((header) => {
                  return (
                    <th
                      className="table_headers"
                      // colSpan={header.subHeaders.length}
                      colSpan={colSpan[header.header]}
                      key={header?.header.split(" ").join("")}
                    >
                      <div className="flex items-center gap-x-2">
                        {header.header}
                        {header.subHeaders.length > 1 ? (
                          colSpan[header.header] ===
                          header.subHeaders.length ? (
                            <button
                              onClick={() => onContract(header)}
                              className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-400"
                            >
                              {`<`}
                            </button>
                          ) : (
                            <button
                              onClick={() => onExpand(header)}
                              className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-400"
                            >
                              {`>`}
                            </button>
                          )
                        ) : null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                {headers.map((headerData) => {
                  return headerData.subHeaders.map((subHeader) => {
                    return (
                      <th
                        key={subHeader}
                        className={`table_subheaders ${
                          hiddenCols.includes(subHeader) ? "hidden" : ""
                        }`}
                      >
                        {subHeader}
                      </th>
                    );
                  });
                })}
              </tr>

              {filteredRows?.length
                ? filteredRows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                      {headers.map((header) => {
                        return header.subHeaders.map((subHeader, colIndex) => {
                          return (
                            <td
                              key={colIndex}
                              className={`border border-gray-300 px-4 py-2 ${
                                hiddenCols.includes(subHeader) ? "hidden" : ""
                              }`}
                            >
                              {row[subHeader] || "-"}
                            </td>
                          );
                        });
                      })}
                    </tr>
                  ))
                : rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                      {headers.map((header) => {
                        return header.subHeaders.map((subHeader, colIndex) => {
                          return (
                            <td
                              key={colIndex}
                              className={`border border-gray-300 px-4 py-2 ${
                                hiddenCols.includes(subHeader) ? "hidden" : ""
                              }`}
                            >
                              {row[subHeader] || "-"}
                            </td>
                          );
                        });
                      })}
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GenomicDataTable;
