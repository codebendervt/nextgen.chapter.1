import React from "react";


function getSocials(prop){

    return prop.Data.Social.map((x) =>
         ( <div className="my-4 w-64 h-12 p-2 bg-blue-700 rounded text-center">
         <a href={x.link} className="font-bold  text-white" >{x.Name}</a>
       </div>)
     )
 }
 
 
 export default getSocials;