import {React, useEffect} from 'react';


function App() {
    useEffect(() => {
        const timer=setTimeout(() => {
            // some code
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
      });

    return (
      <>

      </>
      
    );
  }

