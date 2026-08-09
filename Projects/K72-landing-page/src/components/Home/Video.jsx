import React from "react";
import heroVideo from "../../assets/media/hero-video.mp4";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={heroVideo}
      />
    </div>
  );
};

export default Video;
