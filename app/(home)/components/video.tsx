"use client";

import React from "react";
import { useState } from "react";
import { GiPlayButton, GiSoundOff, GiSoundOn } from "react-icons/gi";

export const Video = ({
  src,
  likes,
  views,
}: {
  src: string;
  likes: string | number;
  views: string | number;
}) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleVideoSound = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="rounded-xl overflow-hidden relative">
      <div className="absolute top-2 left-2">
        {isMuted ? (
          <GiSoundOff color="white" className="w-8 h-8" />
        ) : (
          <GiSoundOn color="white" className="w-8 h-8" />
        )}
      </div>
      <video
        src={src}
        className="w-full h-full"
        autoPlay
        loop
        playsInline
        muted={isMuted}
        onClick={toggleVideoSound}
      />
      <div className="absolute bottom-2 w-full ">
        <div className="flex justify-between items-center h-full px-4">
          <div className="flex items-center gap-1">
            {/* <HeartIcon className="w-4 h-4 text-neutral-300" /> */}
            <p className="text-neutral-300 text-md">{likes}</p>
          </div>
          <div className="flex items-center gap-1">
            <GiPlayButton className="w-8 h-8 text-neutral-300" />
            <p className="text-neutral-300 text-md">{views}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
