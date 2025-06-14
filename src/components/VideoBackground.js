import React from 'react';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="/backvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
