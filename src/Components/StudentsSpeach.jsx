import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function StudentsSpeach() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Anil Sarma',
      role: 'Web Designer',
      image: "images/instructor5.avif",
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dicta commodi et debitis quas necessitatibus officiis odit, quod molestias, blanditiis quis consectetur cupiditate asperiores assumenda? Sunt quaerat rem!',
    },
    {
      name: 'Tusli Kumar',
      role: 'Frontend Developer',
      image: "images/instructor1.avif",
      feedback:
        'Adipisicing elit. Totam dicta commodi et debitis quas necessitatibus officiis odit, quod molestias, blanditiis quis consectetur cupiditate asperiores assumenda? Sunt quaerat rem adipisci sapiente!',
    },
    {
      name: 'Roy Das',
      role: 'UI/UX Designer',
      image: "images/instructor6.avif",
      feedback:
        'Quod molestias, blanditiis quis consectetur cupiditate asperiores assumenda? Sunt quaerat rem adipisci sapiente! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
  ];

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const afterTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='flex justify-center mt-16 md:mt-44 px-4  md:px-0 '>
      <div className='md:w-3/4 2xl:w-1/3 py-6  overflow-hidden'>
        <h1 className='text-3xl md:text-5xl font-semibold text-center'>
          What Our Ex-Students Say
        </h1>

        {/* Avatar Display */}
        <div className='flex gap-2 md:gap-14 mt-10 justify-center'>
          {testimonials.map((test, index) => (
            <div className='h-32' key={index}>
              <img
                src={test.image}
                className={`w-24 h-24 transform transition-all duration-300 rounded-full ${
                  index === currentIndex ? 'md:w-32 md:h-32 w-28 h-28' : ''
                }`}
              />
            </div>
          ))}
        </div>

        {/* Testimonial Content Carousel */}
        <div className='mt-8 overflow-hidden relative shadow-md'>
          <div
            className='flex transition-transform duration-700 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className='min-w-full p-6 text-center'
              >
                <h1 className='text-lg font-semibold'>{testimonial.name}</h1>
                <h2 className='text-gray-400 mt-2'>{testimonial.role}</h2>
                <p className='mt-6 text-center font-semibold h-32'>
                  {testimonial.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className='justify-center flex gap-4 mt-10 items-center'>
          <button
            className='p-4 rounded-md bg-orange-300 hover:bg-orange-400'
            onClick={prevTestimonials}
          >
            <IoIosArrowBack />
          </button>

          <button
            className='p-4 rounded-md bg-orange-300 hover:bg-orange-400'
            onClick={afterTestimonials}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentsSpeach;
