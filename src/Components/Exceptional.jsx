import React, { useRef, useState } from 'react';
import { TbArrowsMinimize } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";
import { TbMessageQuestion } from "react-icons/tb";
import { FiPlay } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5"; // Close icon

function Exceptional() {
  const videoRef = useRef(null);
  const [videoVisible, setVideoVisible] = useState(false);
  const [modalActive, setModalActive] = useState(false); // For smooth modal appearance

  // Function to play the video and open modal
  const handlePlay = () => {
    setVideoVisible(true); // Show modal
    setTimeout(() => {
      setModalActive(true); // Trigger smooth transition
    }, 100); // Delay to trigger the animation

    if (videoRef.current) {
      videoRef.current.play(); // Play video
    }
  };

  // Function to close the modal
  const handleClose = () => {
    setModalActive(false); // Trigger fade-out and zoom-out effect
    setTimeout(() => {
      setVideoVisible(false); // Hide modal after animation completes
    }, 300); // Duration should match the CSS transition duration

    if (videoRef.current) {
      videoRef.current.pause(); // Pause video when closing
      videoRef.current.currentTime = 0; // Reset video time to 0
    }
  };

  return (
    <div className='mt-36 lg:flex items-center xl:gap-10 2xl:pr-60 p-4 md:p-0'>
      <div className='md:px-12 order-2 lg:w-1/2'>
        <h1 className='text-3xl md:text-5xl font-semibold'>What Makes Us Different?</h1>
        <p className='text-xl mt-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, placeat deserunt.
          Minus odio similique explicabo corrupti est ducimus tenetur earum!
        </p>

        {/* Feature sections */}
        <div className='md:flex gap-6 mt-10 items-center'>
          <div>
            <span className=''><TbArrowsMinimize className='text-7xl p-4 border rounded-full shadow-lg'/></span>
          </div>
          <div>
            <h1 className='text-2xl font-semibold'>200+ online Courses</h1>
            <p className='text-xl mt-3 text-gray-400'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, minus!
            </p>
          </div>
        </div>

        <div className='md:flex gap-6 mt-4 items-center'>
          <div>
            <span className=''><IoPeople className='text-7xl p-4 border rounded-full shadow-lg'/></span>
          </div>
          <div>
            <h1 className='text-2xl font-semibold'>Expert Instructors</h1>
            <p className='text-xl mt-3 text-gray-400'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, minus!
            </p>
          </div>
        </div>

        <div className='md:flex gap-6 mt-4 items-center'>
          <div>
            <span className=''><TbMessageQuestion className='text-7xl p-4 border rounded-full shadow-lg'/></span>
          </div>
          <div>
            <h1 className='text-2xl font-semibold'>Lifetime Access & Support</h1>
            <p className='text-xl mt-3 text-gray-400'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, minus!
            </p>
          </div>
        </div>
      </div>

      {/* Video section */}
      <div className='relative mt-16 order-1 lg:w-1/2'>
        {/* Background image */}
        <img
          src="images/video-bg.jpg"
          alt="Background"
          className='w-full h-auto'
        />

        {/* Play button */}
        <button
          className='p-4 rounded-full absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-neutral-400 transition-colors duration-500 ease-out'
          onClick={handlePlay} // Open modal on play button click
        >
          <FiPlay className='text-orange-300 text-6xl md:text-8xl p-4 md:p-8 bg-white rounded-full'/>
        </button>
      </div>

      {/* Fullscreen Modal for Video */}
      {videoVisible && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 transition-opacity duration-300 ${modalActive ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Close button */}
          <button
            className='absolute top-5 right-5 text-white text-4xl p-2 hover:bg-gray-700 rounded-full'
            onClick={handleClose} // Close modal on click
          >
            <IoCloseSharp />
          </button>

          {/* Video element with zoom-in effect */}
          <video
            ref={videoRef}
            controls
            width="80%"
            height="auto"
            className={`rounded-lg shadow-lg transform transition-transform duration-300 ${modalActive ? 'scale-100' : 'scale-75'}`} // Zoom-in effect
            src="/public/video/istockphoto-1197800870-640_adpp_is.mp4" // Replace with your video file path
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default Exceptional;
