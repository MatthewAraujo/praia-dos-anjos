"use client";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
interface VideoPlayerProps {
  url: string;
  playing: boolean;
  thumbnail: any;
}
// Render a YouTube video player
export default function VideoPlayer({
  url,
  playing,
  thumbnail,
}: VideoPlayerProps) {
  return (
      <ReactPlayer
        url={url}
        controls
        playing={true}
        light={
          <Image
            src={`/${thumbnail}`}
            alt="Thumbnail"
            height={200}
            width={500}
          />
        }
        height={200}
        width={500}
      />
  );
}
