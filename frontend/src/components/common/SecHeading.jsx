import React from "react";

export default function SecHeading({ title, heading, description, span }) {


  return (

    <div className={`text-center my-5 `}>

      {title && (
        <h2 className="text-blue-500 font-bold tracking-[0.2em] text-xs uppercase mb-4">
          {title}
        </h2>
      )}

      {heading && (
        <p className="text-3xl md:text-5xl font-light text-white">
          {heading} <span className="font-bold">{span}</span>
        </p>
      )}

    </div>
  );
}
