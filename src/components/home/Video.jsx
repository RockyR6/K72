import React from 'react';

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video
        className='h-full w-full object-cover'
        autoPlay
        loop
        muted
        playsInline
        src="https://res.cloudinary.com/rocky7/video/upload/video_f3tjgx.mp4"
      />
    </div>
  );
};

export default Video;
