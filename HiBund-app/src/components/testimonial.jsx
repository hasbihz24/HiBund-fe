// src/Testimonial.js

import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const testimonials = [
  {
    name: 'Chika Anak Tiga',
    image: 'https://via.placeholder.com/150',
    rating: 5,
    text: 'Melalui [Nama Platform], kami terhubung dengan banyak orang tua yang mengerti tantangan yang kami hadapi. Komunitas ini benar-benar mendukung.'
  },
  {
    name: 'John Doe',
    image: 'https://via.placeholder.com/150',
    rating: 4,
    text: 'Platform ini sangat membantu dalam menemukan komunitas yang tepat. Sangat direkomendasikan!'
  },
  {
    name: 'Asep Perkasa',
    image: 'https://via.placeholder.com/150',
    rating: 2,
    text: 'Istri Saya Lahiran Kembar 5 '
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const { name, image, rating, text } = testimonials[currentIndex];

  return (
    <div className="max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-lg leading-6 font-semibold text-pink-600 uppercase tracking-wider">Testimoni</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Lihat bagaimana pengalaman mereka</p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.</p>
      </div>

      <div className="relative h-48 mt-10"> {/* Fixed height to maintain layout consistency */}
        <TransitionGroup>
          <CSSTransition key={currentIndex} timeout={500} classNames="slide">
            <div className="absolute w-full h-full"> {/* Absolute positioning for smooth transitions */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="mb-4">
                  <div className="flex items-center">
                    <svg className='me-4' width="60" height="38" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.9606 0L0 37.2632H21.7241L30.1478 0H15.9606ZM45.8128 0L29.8522 37.2632H51.5764L60 0H45.8128Z" fill="#F5497D" />
                    </svg>
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src={image} alt={name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-lg leading-6 font-medium text-gray-900">{name}</div>
                      <div className="flex items-center mt-1">
                        {[...Array(rating)].map((_, index) => (
                          <svg key={index} className="text-yellow-400 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.122-6.54L.487 6.91l6.573-.957L10 0l2.94 5.953 6.573.957-4.757 4.64 1.122 6.54z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote>
                  <p className="text-xl font-medium text-gray-900">"{text}"</p>
                </blockquote>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>

      <div className="flex justify-center mt-14 space-x-4 ">
        <button
          onClick={handlePrev}
          className="arrow-btn"
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 26.5C35.5523 26.5 36 26.0523 36 25.5C36 24.9477 35.5523 24.5 35 24.5L35 26.5ZM14.2929 24.7929C13.9024 25.1834 13.9024 25.8166 14.2929 26.2071L20.6569 32.5711C21.0474 32.9616 21.6805 32.9616 22.0711 32.5711C22.4616 32.1805 22.4616 31.5474 22.0711 31.1569L16.4142 25.5L22.0711 19.8431C22.4616 19.4526 22.4616 18.8195 22.0711 18.4289C21.6805 18.0384 21.0474 18.0384 20.6569 18.4289L14.2929 24.7929ZM35 24.5L15 24.5L15 26.5L35 26.5L35 24.5Z" fill="#F5497D" />
          </svg>

        </button>
        <div className="flex space-x-2 mt-5">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'}`}
            ></span>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="arrow-btn"
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 24.5C14.4477 24.5 14 24.9477 14 25.5C14 26.0523 14.4477 26.5 15 26.5V24.5ZM35.7071 26.2071C36.0976 25.8166 36.0976 25.1834 35.7071 24.7929L29.3431 18.4289C28.9526 18.0384 28.3195 18.0384 27.9289 18.4289C27.5384 18.8195 27.5384 19.4526 27.9289 19.8431L33.5858 25.5L27.9289 31.1569C27.5384 31.5474 27.5384 32.1805 27.9289 32.5711C28.3195 32.9616 28.9526 32.9616 29.3431 32.5711L35.7071 26.2071ZM15 26.5H35V24.5H15V26.5Z" fill="#F5497D" />
          </svg>

        </button>
      </div>
    </div>
  );
};

export default Testimonial;
