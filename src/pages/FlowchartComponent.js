import React, { useEffect } from 'react';

function FlowchartComponent({ flowDiagram }) {
  useEffect(() => {
    if (window.flowchart) {
      try {
        // Parse and draw the flowchart
        window.flowchart.parse(flowDiagram).drawSVG('flowchart-container', {
          lineColor: '#007bff',
          elementColor: '#007bff',
          fontColor: '#333',
          diagramPadding: 20,
        });
      } catch (error) {
        console.error('Error rendering flowchart:', error);
      }
    } else {
      console.error('Flowchart library not found on window object');
    }
  }, [flowDiagram]);

  return (
    <div id="flowchart-container" style={{ width: '100%', height: '400px' }}></div>
  );
}

export default FlowchartComponent;
