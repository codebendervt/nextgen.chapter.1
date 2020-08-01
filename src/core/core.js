import React from "react";
import Socials from './socials';
import Data from './data.json';

//Global Scope

function Core() {
//Scope Core

  return (
    <div className="w-screen h-full flex  justify-center items-center">
      <div className="flex-wrap items-center justify-center">

        <div className="w-full flex justify-center my-4">
        <div className="w-32 h-32 rounded-full bg-black flex justify-center items-center">
          <div className="w-12 h-12 bg-red-200"></div>
        </div>
        </div>

       <Socials Data={Data}></Socials>
{/* 
       {
         Socials({Data:Data})
       } */}

   


      </div>
    </div>
  );
}

export default Core;
