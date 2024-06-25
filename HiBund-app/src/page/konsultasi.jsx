// src/App.js
import React from 'react';
import DokterCard from '../components/dokter-card';
import imgchild13 from "../../public/jumbo-child.png";
import imgdokter from "../../public/doctor1.png";
import imgdokter2 from "../../public/doctor2.png";
import imgdokter3 from "../../public/doctor3.png";
import imgdokter4 from "../../public/doctor4.png";
import imgdokter5 from "../../public/doctor5.png";
import imgdokter6 from "../../public/doctor6.png";
import imgdokter7 from "../../public/doctor7.png";
import imgdokter8 from "../../public/doctor8.png";
import imgdokter9 from "../../public/doctor9.png";
import Navigation from '../components/navigation';

function Konsultasi() {
  // Sample data for dokter cards
  const dokter = [
    {
      imgSrc: imgdokter,
      doctorName: 'Dr. John Doe',
      specialist: 'Pediatrician',
      location: 'New York, USA',
      rating: '4.9 (98)',
    },
    {
      imgSrc: imgdokter2,
      doctorName: 'Dr. Jane Smith',
      specialist: 'Dermatologist',
      location: 'Los Angeles, USA',
      rating: '4.8 (85)',
    },
    {
        imgSrc: imgdokter3,
        doctorName: 'Dr. Jane Smith',
        specialist: 'Dermatologist',
        location: 'Los Angeles, USA',
        rating: '4.8 (85)',
      },
      {
        imgSrc: imgdokter4,
        doctorName: 'Dr. Jane Smith',
        specialist: 'Dermatologist',
        location: 'Los Angeles, USA',
        rating: '4.8 (85)',
      },
      {
        imgSrc: imgdokter5,
        doctorName: 'Dr. Jane Smith',
        specialist: 'Dermatologist',
        location: 'Los Angeles, USA',
        rating: '4.8 (85)',
      },
      {
        imgSrc: imgdokter6,
        doctorName: 'Dr. Jane Smith',
        specialist: 'Dermatologist',
        location: 'Los Angeles, USA',
        rating: '4.8 (85)',
      },
      {
        imgSrc: imgdokter7,
        doctorName: 'Dr. Jane Smith',
        specialist: 'Dermatologist',
        location: 'Los Angeles, USA',
        rating: '4.8 (85)',
      },
      {
        imgSrc: imgdokter8,
        doctorName: 'Dr. Jane Smith',
        specialist: 'Dermatologist',
        location: 'Los Angeles, USA',
        rating: '4.8 (85)',
      },
      {
        imgSrc: imgdokter9,
        doctorName: 'Dr. Jane Smith',
        specialist: 'Dermatologist',
        location: 'Los Angeles, USA',
        rating: '4.8 (85)',
      },
   
  ];

  return (
    <div className='bg-white'>
    <main className="container mx-auto py-12">
      <section className="flex flex-col items-center">
          <img src={imgchild13} alt="Product" className="w-full h-full object-cover" />
      </section>


      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Recommendations. Best matching doctors for you</h2>
        <Navigation />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-14">
          {dokter.map((product, index) => (
            <DokterCard
              key={index}
              imgSrc={product.imgSrc}
              doctorName={product.doctorName}
              specialist={product.specialist}
              location={product.location}
              rating={product.rating}
            />
          ))}
        </div>
      </section>
      </main>
     
    </div>
   
  );
}

export default Konsultasi;
