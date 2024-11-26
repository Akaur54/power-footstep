import React from 'react';

function Analysis() {
    return (
        <div className="container py-10">
          <h1 className="text-3xl font-semibold text-center mb-10">Project Analysis</h1>
    
          {/* Section for Graphs and Data Visualizations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Example for a Graph or Chart */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src="/images/G1.png" 
                alt="Performance Graph" 
                className="w-full h-auto object-contain"
              />
            </div>
    
            {/* Example for Another Graph */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src="/images/G2.png" 
                alt="Sensor Data Graph" 
                className="w-full h-auto object-contain"
              />
            </div>
    
            {/* Example for another graph or analysis */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src="/images/G3.png" 
                alt="System Efficiency" 
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src="/images/G4.png" 
                alt="System Efficiency" 
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src="/images/G5.png" 
                alt="System Efficiency" 
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src="/images/G6.png" 
                alt="System Efficiency" 
                className="w-full h-auto object-contain"
              />
            </div>
    
          </div>
    
          {/* Section for Additional Insights */}
          <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-medium text-gray-800">Key Insights</h2>
            <p className="mt-3 text-gray-600">
              Based on the analysis, several key insights have been identified, which include:
              <ul className="list-disc pl-6 mt-3 text-gray-600">
                <li>Improved sensor accuracy over time.</li>
                <li>Optimized system performance through software updates.</li>
                <li>Key bottlenecks identified in the data processing stage.</li>
                <li>Potential improvements in energy efficiency.</li>
              </ul>
            </p>
          </div>
        </div>
    );
}

export default Analysis;
