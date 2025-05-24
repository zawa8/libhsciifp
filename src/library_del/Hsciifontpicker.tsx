"use client" ;
import React from "react";
import fgioptions from "./fgioptions_soft.json" ;

export const Hsciifontpicker = () => {
  const handle_fitem_change = (event: React.ChangeEvent<HTMLSelectElement>) => {
	if (event.target.value) { document.body.style.fontFamily = event.target.value ; }
  }; 
  return (
    <div>
      <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handle_fitem_change} defaultValue={''} >
      <option value="" disabled>hscii_font select please</option>
      {fgioptions.map((option) => (
        <option key={option.walue} value={option.walue}>
          {option.label}
        </option>
      ))}
    </select>
    </div>
  );
};
