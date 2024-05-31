import React, { useEffect, useState } from "react";

function ProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;

    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollPercent(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] bg-gray-200">
      <div
        className="h-full bg-yellow"
        style={{ width: `${scrollPercent}%` }}
      ></div>
      {console.log(scrollPercent)}
    </div>
  );
}

export default ProgressBar;
