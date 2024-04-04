import React from 'react';
import Section from './Section';
import GraphImage from '../assets/graph-image.png';

function HomePage() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 my-auto">
                    <h1>Welcome to Graph Coverage</h1>
                    <p className="lead">Graphs can be represented to show the flow of Program execution and all it's possible ways.</p>
                    <button className="btn btn-primary btn-lg">Get Started</button>
                </div>
                <div className="col-md-6">
                    <img src={GraphImage} alt="Graph Coverage Visualization" className="img-fluid" />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row mt-5 text-center g-3 card-row"> {/* Added card-row for equal height */}
                    <div className="col-md-4 d-flex align-items-stretch"> {/* d-flex and align-items-stretch ensure the card fills the column's height */}
                        <Section
                            header="What is node coverage"
                            description="Node coverage ensures that each line of code in the program has been executed at least once during testing, helping to identify untested code segments."
                            headerClass="card-header-color"
                            descriptionClass="card-description-color"
                        />
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Section
                            header="What is edge coverage"
                            description="Edge coverage ensures that all possible paths through the code, including branches, loops and conditional statements are executed."
                            headerClass="card-header-color"
                            descriptionClass="card-description-color"
                        />
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Section
                            header="What is edge-pair coverage"
                            description="It ensures that all pairs of edges between nodes in the code are executed. This helps to uncover potential dependencies between different parts of the code that are not revelaed when testing induvidual edges separately."
                            headerClass="card-header-color"
                            descriptionClass="card-description-color"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
