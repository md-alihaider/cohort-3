import React from "react";
import { Link } from "react-router";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-5 pb-3">
      <div className="rounded-full border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-24 uppercase px-10 flex items-center border-white">
        <Link className="text-[6vw] mt-6" to={"/projects"}>
          Projects
        </Link>
      </div>
      <div className="rounded-full border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-24 uppercase px-10 flex items-center border-white">
        <Link className="text-[6vw] mt-6" to={"/agence"}>
          agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
