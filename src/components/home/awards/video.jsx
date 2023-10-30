import React from 'react';
import video from "./logo/Wicked.mp4"
const VideoWithTextOverlay = () => {
  return (
    <div className="video-container">
      <video className='videoTag' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      <div className="text-Onvideo">
        <p>Check out some updated information about stocks</p>
      </div>
    </div>
  );
}

export default VideoWithTextOverlay;
