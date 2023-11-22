"use client";
import Image from "next/image";
import videoMobile from "../../../public/mobile/video/video.png";
import videoPlayerImage from "../../../public/details/video-player.svg";
import React, { useState } from "react";
import dynamic from "next/dynamic";
export function Video() {
  const [videoPlayer, setVideoPlayer] = useState(false);
  const VideoPlayerReact = dynamic(() => import("../VideoPlayer/index"), {
    ssr: false,
  });

  function handleVideoPlayer() {
    setVideoPlayer(true);
  }

  return (
    <div className="relative bg-[#FDFAF6] pt-20">
      <div className="mx-auto w-full lg:max-w-6xl lg:py-8 ">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/desktop/video/bg-video.png"
          />
          <Image
            src={videoMobile}
            alt="Fachada"
            className="w-full object-cover lg:rounded-xl "
          />
        </picture>
      </div>
      <Image
        src={videoPlayerImage}
        alt="videoPlayer"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={handleVideoPlayer}
      />
    </div>
  );
}
