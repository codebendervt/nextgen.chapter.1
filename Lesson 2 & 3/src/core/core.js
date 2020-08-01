import React from 'react';


function Core() {
  return (
    <div className="base-layer">
        {/* JSX has to alwasys return one tag */}
         <div className="h-16 w-full bg-black">
         <div className="layer">
         
         </div>
      </div>
        
          <div className="max-w-lg text-5xl w-screen h-screen flex justify-center items-center">
            <p className="text-6xl">Hello World</p>
          </div>

    </div>
    
  );
}

export default Core;