import React from "react";

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center flex flex-col items-center gap-6">
      <span className="brush-underline font-bold text-3xl">{title}.</span>
      <p className="font-semibold text-xl">{subtitle}</p>
    </div>
  );
}

export default SectionTitle;
