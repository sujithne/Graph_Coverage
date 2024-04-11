
import "../styling/GeneratePage.css"
import logo from  '../assets/pen.jpg'
import React, { useState, useEffect } from "react";



function GeneratePage() {
  // Initialize state with 6 rows
  const [rows, setRows] = useState([
    { column1: "", column2: "" },
    { column1: "", column2: "" },
    { column1: "", column2: "" },
    { column1: "", column2: "" },
    { column1: "", column2: "" },
    { column1: "", column2: "" },
  ]);

  // State for selected option
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleClick = () => {
    // Handle button click
  };
  // Function to handle adding a new row
  const handleAddRow = () => {
    setRows([...rows, { column1: "", column2: "" }]);
  };

  // Function to handle deleting a row
  const handleDeleteRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  // Function to handle updating text field value
  const handleInputChange = (index, column, value) => {
    const updatedRows = [...rows];
    updatedRows[index][column] = value;
    setRows(updatedRows);
  };

  // Ensure that there are always at least 6 rows on initial load
  useEffect(() => {
    if (rows.length < 6) {
      setRows([
        ...rows,
        ...Array(6 - rows.length).fill({ column1: "", column2: "" }),
      ]);
    }
  }, [rows]); // Include rows as dependency to trigger effect on rows change

  // Inline styles
  const tabStyle = {
    backgroundColor: "lightblue",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    marginTop: "2px",
    height: "60px",
  };

  return (
    <div className="content">
      {/* Tab style component */}
      <div style={tabStyle}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: "50px", marginRight: "15px" }}
        />
        <h3>Graph Inputs</h3>
      </div>

      {/* Rows of text fields */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", marginBottom: "10px" }}>
          {/* Column 1 heading */}
          <h6 style={{ marginRight: "100px" }}>Source Nodes</h6>
          {/* Column 2 heading */}
          <h6 style={{ marginRight: "30px" }}>Outgoing Edges</h6>
          {/* Button placeholder */}
          <div style={{ width: "72px" }}></div>
        </div>

        {rows.map((row, index) => (
          <div key={index} style={{ display: "flex", marginBottom: "20px" }}>
            {/* Column 1 text field */}

            {index === 0 && (
              <input
                type="text"
                value={row.column1}
                onChange={(e) =>
                  handleInputChange(index, "column1", e.target.value)
                }
                placeholder="Start Node"
                style={{
                  marginRight: "50px",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            )}
            {index === 0 && (
              <input
                type="text"
                value={row.column2}
                onChange={(e) =>
                  handleInputChange(index, "column2", e.target.value)
                }
                placeholder=""
                style={{
                  marginRight: "30px",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            )}
            {index !== 0 && index !== rows.length - 1 && (
              <input
                type="text"
                value={row.column1}
                onChange={(e) =>
                  handleInputChange(index, "column1", e.target.value)
                }
                placeholder=""
                style={{
                  marginRight: "50px",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            )}
            {index !== 0 && index !== rows.length - 1 && (
              <input
                type="text"
                value={row.column2}
                onChange={(e) =>
                  handleInputChange(index, "column2", e.target.value)
                }
                placeholder=""
                style={{
                  marginRight: "30px",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            )}
            {index === rows.length - 1 && (
              <input
                type="text"
                value={row.column1}
                onChange={(e) =>
                  handleInputChange(index, "column1", e.target.value)
                }
                placeholder="End node"
                style={{
                  marginRight: "50px",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            )}
            {index === rows.length - 1 && (
              <input
                type="text"
                value={row.column2}
                onChange={(e) =>
                  handleInputChange(index, "column2", e.target.value)
                }
                placeholder="Enter text"
                style={{
                  marginRight: "30px",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            )}
            {/* Column 2 text field */}

            {/* Button to delete row */}
            <button onClick={() => handleDeleteRow(index)}>Delete</button>
          </div>
        ))}

        {/* Button to add a new row */}
        <button onClick={handleAddRow}>Add Row</button>
      </div>
      {/* Radio buttons */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <label style={{ marginRight: "20px" }}>
          <input
            type="radio"
            name="option"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />{" "}
          Option 1
        </label>
        <label style={{ marginRight: "20px" }}>
          <input
            type="radio"
            name="option"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />{" "}
          Option 2
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />{" "}
          Option 3
        </label>

        <button style={{ marginLeft: "20px" }} onClick={handleClick}>
          Generate Coverage
        </button>
      </div>
      <div className="grey-background">
        <h4>{selectedOption}</h4>
        <div className="container">
      <div className="text-area-container">
        <h5 className="heading">Test Requirements</h5>
        <textarea className="text-area" placeholder="Enter test requirements here..."></textarea>
      </div>
      <div className="text-area-container">
        <h5 className="heading">TestPaths</h5>
        <textarea className="text-area" placeholder="Enter text fields here..."></textarea>
      </div>
    </div>
      </div>
    </div>
  );
}

export default GeneratePage;
