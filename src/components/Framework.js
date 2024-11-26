import React from 'react';

function Framework() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-semibold text-center mb-10">Project Framework & Diagrams</h1>
      
      {/* Section for Diagram Images and Descriptions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Example for a Diagram Section */}
        

        {/* Example for Arduino Image and Description */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src="/images/matlab.png"  // Reference image stored in the 'public/images' folder
            alt="Arduino Setup" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-6">
            <h2 className="text-xl font-medium text-gray-800">MATLAB Simulink Analysis</h2>
            <p className="mt-3 text-gray-600">
            The image shows the MATLAB Simulink model and simulation results. The model likely represents a system for energy harvesting from vibrations. It includes components like a piezo-bender, rectifier, DC-DC converter, battery, and load. The simulation results probably show the voltage and power output of the system under different conditions.
            </p>
          </div>
        </div>

        {/* Example for Another Diagram or Image */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src="/images/Geodesgin.png"  // Reference image stored in the 'public/images' folder
            alt="Another Diagram or Image" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-6">
            <h2 className="text-xl font-medium text-gray-800">Geometric Design</h2>
            <p className="mt-3 text-gray-600">
            Geometric solution for a 3D model with specific dimensions (height and length) and a pitch of 2.93. The model appears to have a rectangular base with multiple circular cutouts
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src="/images/prototype.png"  // Reference image stored in the 'public/images' folder
            alt="Another Diagram or Image" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-6">
            <h2 className="text-xl font-medium text-gray-800">Piezoelectric Power Generator Prototype</h2>
            <p className="mt-3 text-gray-600">
            The image shows a prototype of a piezoelectric power generator, likely designed to harness kinetic energy from vibrations. The device incorporates piezoelectric sensors, possibly arranged in a specific configuration, and a fiberglass substrate. The project aims to generate renewable energy through the conversion of mechanical energy into electrical energy.
            </p>
          </div>
        </div>


        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src="/images/arduino.png"  // Reference image stored in the 'public/images' folder
            alt="Project Diagram" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-6">
            <h2 className="text-xl font-medium text-gray-800">Arduino microcontroller</h2>
            <p className="mt-3 text-gray-600">
            The Arduino microcontroller, priced at Rs 475, is compact and versatile. It operates at 5V, adheres to ISO 27001, and is powered by the ATmega328P.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src="/images/pizeo.png"  // Reference image stored in the 'public/images' folder
            alt="Another Diagram or Image" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-6">
            <h2 className="text-xl font-medium text-gray-800">Piezoelectric Sensor</h2>
            <p className="mt-3 text-gray-600">
            High Piezoelectric Coefficient: PZT has a high piezoelectric coefficient, allowing it to generate significant electrical charges under mechanical stress.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src="/images/cap.png"  // Reference image stored in the 'public/images' folder
            alt="Another Diagram or Image" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-6">
            <h2 className="text-xl font-medium text-gray-800">Electrolytic Capacitor</h2>
            <p className="mt-3 text-gray-600">
            The Alcon Electronics capacitor, priced at Rs 255, is versatile and reliable. It handles a wide range of voltages and capacitances, and functions reliably in extreme temperatures.
            </p>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default Framework;
