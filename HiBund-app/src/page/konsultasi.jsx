// src/App.js
import React from 'react';
import DokterCard from '../components/dokter-card';
import imgchild13 from "../../public/jumbo-child.png";
import imgdokter from "../../public/doctor1.png";

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
      imgSrc: imgdokter,
      doctorName: 'Dr. Jane Smith',
      specialist: 'Dermatologist',
      location: 'Los Angeles, USA',
      rating: '4.8 (85)',
    },
    {
        imgSrc: imgdokter,
        doctorName: 'Dr. Jane Smith',
        specialist: 'Dermatologist',
        location: 'Los Angeles, USA',
        rating: '4.8 (85)',
      },
      {
        imgSrc: imgdokter,
        doctorName: 'Dr. Jane Smith',
        specialist: 'Dermatologist',
        location: 'Los Angeles, USA',
        rating: '4.8 (85)',
      },
      {
        imgSrc: imgdokter,
        doctorName: 'Dr. Jane Smith',
        specialist: 'Dermatologist',
        location: 'Los Angeles, USA',
        rating: '4.8 (85)',
      },
      {
        imgSrc: imgdokter,
        doctorName: 'Dr. Jane Smith',
        specialist: 'Dermatologist',
        location: 'Los Angeles, USA',
        rating: '4.8 (85)',
      },
      {
        imgSrc: imgdokter,
        doctorName: 'Dr. Jane Smith',
        specialist: 'Dermatologist',
        location: 'Los Angeles, USA',
        rating: '4.8 (85)',
      },
      {
        imgSrc: imgdokter,
        doctorName: 'Dr. Jane Smith',
        specialist: 'Dermatologist',
        location: 'Los Angeles, USA',
        rating: '4.8 (85)',
      },
      {
        imgSrc: imgdokter,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
