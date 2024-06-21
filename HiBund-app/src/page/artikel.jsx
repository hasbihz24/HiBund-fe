import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import imgchild19 from "../../public/child19.png";
import imgchild18 from "../../public/child18.png";
import imgchild17 from "../../public/child17.png";
import imgchild16 from "../../public/child16.png";
import imgchild15 from "../../public/child15.png";
import imgchild6 from "../../public/child6.png";
import imgchild14 from "../../public/child14.png";
import imgchild8 from "../../public/child8.png";
import imgchild9 from "../../public/child9.png";
import imgchild10 from "../../public/child10.png";
import imgchild11 from "../../public/child11.png";
import imgchild12 from "../../public/child12.png";
import imgchild13 from "../../public/jumbo-child.png";
import FiturCard from "../components/fitur-card";

function Artikel() {
  

    const cards = [
        {
            nama: "Artikel & Panduan",
            judul: "10 Tips Efektif untuk Mengatasi Tantrum pada Anak Balita",
            text: "Strategi praktis untuk menenangkan anak saat mereka mengalami tantrum.",
            img: imgchild19,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Artikel & Panduan",
            judul: "Panduan Lengkap untuk Menjaga Kesehatan Mental..",
            text: "Tips untuk membantu anak tetap sehat secara mental dalam menghadapi dunia digital.",
            img: imgchild18,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Artikel & Panduan",
            judul: "Mengatasi Perilaku Anak yang Sulit: Panduan untuk Orang Tua",
            text: "Strategi untuk memahami dan mengatasi perilaku yang menantang pada anak.",
            img: imgchild17,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Artikel & Panduan",
            judul: "Cara Membangun Kebiasaan Belajar yang Positif pada Anak",
            text: "Trik untuk mendorong kebiasaan belajar yang baik sejak dini.",
            img: imgchild16,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Artikel & Panduan",
            judul: "Rahasia Menjaga Keseimbangan Antar Pekerjaan",
            text: "Tips bagi orang tua yang bekerja untuk tetap produktif sambil mengasuh anak.",
            img: imgchild15,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Artikel & Panduan",
            judul: "Membangun Komunikasi Efektif dengan Remaja Anda",
            text: "Cara berkomunikasi dengan anak remaja agar mereka merasa didengar dan dipahami.",
            img: imgchild6,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Artikel & Panduan",
            judul: "Pentingnya Rutinitas Tidur yang Baik untuk Anak-Anak",
            text: "Tips untuk menciptakan rutinitas tidur yang sehat dan konsisten bagi anak.",
            img: imgchild14,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Artikel & Panduan",
            judul: "Mengajarkan Anak Tentang Uang: 5 Pelajaran Dasar",
            text: "Panduan mengajarkan konsep keuangan kepada anak-anak sejak dini.",
            img: imgchild8,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Artikel & Panduan",
            judul: "Cara Menghadapi Bullying: Dukungan untuk Anak dan.",
            text: "Tips untuk membantu anak yang mengalami bullying dan cara mencegahnya..",
            img: imgchild9,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Artikel & Panduan",
            judul: "Aktivitas Seru dan Edukatif untuk Meningkatkan Kreatif..",
            text: "Ide aktivitas yang menyenangkan dan mendidik untuk anak-anak di rumah..",
            img: imgchild10,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Artikel & Panduan",
            judul: "Menumbuhkan Rasa Percaya Diri pada Anak Sejak Dini",
            text: "Strategi dan kegiatan yang dapat membantu anak mengembangkan rasa percaya diri yang kuat.",
            img: imgchild11,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Artikel & Panduan",
            judul: "Mengajarkan Anak Nilai-Nilai Empati dan Kebaikan",
            text: "Cara efektif untuk menanamkan empati dan kebaikan pada anak melalui contoh dan kegiatan sehari-hari..",
            img: imgchild12,
            next: "Baca Selengkapnya →"
        },
    ];
    return (
        <div className="bg-white">
            <main className="container mx-auto py-12">
                <section className="flex flex-col items-center">
                    <img src={imgchild13} alt='banner' className='w-full h-full object-cover' />
                    <div className="flex space-x-4 mt-5">
                        <Link to="/">
                            <button className="bg-gray-400 hover:bg-gray-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow">
                                Semua
                            </button>
                        </Link>
                        <Link to="/artikel">
                            <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium px-6 py-3 rounded-xl shadow">
                                Artikel & Panduan
                            </button>
                        </Link>
                        <Link to="/tips">
                            <button className="bg-gray-400 hover:bg-gray-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow">
                                Tips & Trik
                            </button>
                        </Link>
                        <Link to="/grup">
                            <button className="bg-gray-400 hover:bg-gray-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow">
                                Grup & Komunitas
                            </button>
                        </Link>
                    </div>
                </section>

                <section className="px-4 mt-10 md:px-0">
                    <FiturCard cards={cards} />
                </section>

            </main>
        </div>
    );
}

export default Artikel;
