import React from 'react';
import 'animate.css';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight animate__animated animate__fadeInUp'>
        Explore Rentify
      </h1>
      <p className='mb-8 text-lg text-gray-800 animate__animated animate__fadeIn'>
        Rentify is your trusted partner for seamless real estate transactions in sought-after neighborhoods. Our expert team ensures a personalized experience whether you're buying, selling, or renting. With a commitment to excellence and deep local knowledge, Rentify empowers you to achieve your property goals effortlessly.
      </p>
      <p className='text-lg text-gray-800 animate__animated animate__fadeIn'>
        Discover Rentify today and experience real estate done right.
      </p>
    </div>
  );
}
