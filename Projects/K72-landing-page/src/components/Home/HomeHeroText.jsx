import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-2 text-center">
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[9vw]">
        L'étincelle
      </div>
      <div className="text-[9.5vw] justify-center flex items-start uppercase leading-[9vw]">
        qui
        <div className="h-[7vw] w-[16vw] rounded-full  overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[9vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
