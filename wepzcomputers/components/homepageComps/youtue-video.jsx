"use client";
import { useState, useEffect } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Play } from "lucide-react";

export default function YouTubePlayer({
  videoId = "dQw4w9WgXcQ",
  title = "Amazing Video Title",
  channelName = "Awesome Channel",
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    img.onload = () => setIsLoaded(true);
  }, [videoId]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="max-w-4xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <div className="relative aspect-video">
          {!isPlaying && (
            <button
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 group transition-opacity duration-300 z-10"
              onClick={handlePlay}
              aria-label="Play video"
            >
              <span className="sr-only">Play video</span>
              <div className="bg-red-600 rounded-full p-4 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-red-700">
                <Play className="w-12 h-12 text-white" />
              </div>
            </button>
          )}
          <div
            className={`transition-opacity duration-500 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
          >
            <YouTubeEmbed
              videoid={videoId}
              height={400}
              params="autoplay=1&mute=1"
              title={title}
            />
          </div>
          {!isPlaying && (
            <div
              className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 ${
                isLoaded ? "" : "animate-pulse"
              }`}
              aria-hidden="true"
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg)`,
                }}
              />
            </div>
          )}
        </div>
        <div className="p-6 sm:p-8 bg-gray-50 dark:bg-gray-900">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Published by <span className="font-semibold">{channelName}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
