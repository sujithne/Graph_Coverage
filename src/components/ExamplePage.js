import React, { useState } from 'react';
import GraphImage from '../assets/graph-example.png'; // Adjust the path as necessary
import "../styling/ExamplePage.css"

const ExamplePage = () => {
  const [graphInputs, setGraphInputs] = useState(Array(6).fill({ node: '', edges: '' }));

  const handleInputChange = (index, field, value) => {
    const newInputs = [...graphInputs];
    newInputs[index][field] = value;
    setGraphInputs(newInputs);
  };

  const graphNodes = [
    { node: 'A', edges: 'B' },
    { node: 'B', edges: 'C, D' },
    { node: 'C', edges: 'E' },
    { node: 'D', edges: 'B' },
    { node: 'E', edges: 'F' },
    { node: 'F', edges: '' }, // No outgoing edges from F
  ];

  const testRequirement1 = "{A, B, C, D, E, F}";
  const testPaths1 = "[A->B->C->E->D->B->C->E->F]";

  const testRequirement2 = "(A->B) (B->C) (C->E) (E->D) (D->B) (E->F)";
  const testPaths2 = "[A->B->C->E->D->B->C->E->F]";

  const testRequirement3 = "[A->B->C] [B->C->E] [C->E->D] [C->E->F] [E->D->B] [D->B->C]";
  const testPaths3 = "[A->B->C->E->D->B->C->E->F],  [A->B->C->E->F]";

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
    <div className="center-container">
      <div>
        <div style={tabStyle}>
          <h3>Example on how to input graph</h3>
        </div>
        <div className="centered-content">
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6">
                <img src={GraphImage} alt="Graph Visualization" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <div className="row mb-2 font-weight-bold">
                  <div className="col-6">Node</div>
                  <div className="col-6">Outgoing Edges</div>
                </div>
                {graphNodes.map((input, index) => (
                  <div key={index} className="row mb-3">
                    <div className="col-6">
                      <div className="form-control">{input.node}</div>
                    </div>
                    <div className="col-6">
                      <div className="form-control">{input.edges}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="black-background white-text">
            <div className="row mt-5 px-5">
              <div className="col-12 col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body bg-dark">
                    <h5 className="card-title blue-header">Node Coverage</h5>
                    <p className="card-text white-text">Test Requirements: {testRequirement1}</p>
                    <p className="card-text white-text">Test Paths: {testPaths1}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body bg-dark">
                    <h5 className="card-title blue-header">Edge Coverage</h5>
                    <p className="card-text white-text">Test Requirements: {testRequirement2}</p>
                    <p className="card-text white-text">Test Paths: {testPaths2}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body bg-dark">
                    <h5 className="card-title blue-header">Edge-Pair Coverage</h5>
                    <p className="card-text white-text">Test Requirements: {testRequirement3}</p>
                    <p className="card-text white-text">Test Paths: {testPaths3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;