import React, { useEffect } from 'react';

function Graph() {
  useEffect(() => {
    
    const socket = new WebSocket('http://localhost:80');
 
    socket.onclose = function(event) {
      console.log('WebSocket connection closed');
    };
    
    socket.onerror = function(error) {
      console.error('WebSocket error:', error);
    };

   
  }, []); 

  return (
    <div>Graph</div>
  );
}

export default Graph;
