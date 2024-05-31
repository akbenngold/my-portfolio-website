import React from "react";

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center">
      <span className="brush-underline font-bold text-3xl">{title}.</span>
      <p className="font-semibold text-xl">{subtitle}</p>
    </div>
  );
}

export default SectionTitle;
