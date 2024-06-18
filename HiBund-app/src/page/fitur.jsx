import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom untuk mengarahkan ke halaman lain
import imgchild1 from "../../public/child.jpg";
import imgchild2 from "../../public/child2.png";
import imgchild3 from "../../public/child3.png";
import imgchild4 from "../../public/child4.png";
import imgchild5 from "../../public/child5.png";
import imgchild6 from "../../public/child6.png";
import imgchild7 from "../../public/child7.png";
import imgchild8 from "../../public/child8.png";
import imgchild9 from "../../public/child9.png";
import imgchild10 from "../../public/child10.png";
import imgchild11 from "../../public/child11.png";
import imgchild12 from "../../public/child12.png";
import imgchild13 from "../../public/jumbo-child.png";
import FiturCard from "../components/fitur-card";

function Fitur() {
    // State for managing the selected category
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    // List of all articles
    const cards = [
        {
            nama: "Tips & Trik",
            judul: "10 Tips Efektif untuk Mengatasi Tantrum pada Anak Balita",
            text: "Strategi praktis untuk menenangkan anak saat mereka mengalami tantrum.",
            img: imgchild1,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Artikel & Panduan",
            judul: "Panduan Lengkap untuk Menjaga Kesehatan Mental..",
            text: "Tips untuk membantu anak tetap sehat secara mental dalam menghadapi dunia digital.",
            img: imgchild2,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Artikel & Panduan",
            judul: "Mengatasi Perilaku Anak yang Sulit: Panduan untuk Orang Tua",
            text: "Strategi untuk memahami dan mengatasi perilaku yang menantang pada anak.",
            img: imgchild3,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Tips & Trik",
            judul: "Cara Membangun Kebiasaan Belajar yang Positif pada Anak",
            text: "Trik untuk mendorong kebiasaan belajar yang baik sejak dini.",
            img: imgchild4,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Tips & Trik",
            judul: "Rahasia Menjaga Keseimbangan Antar Pekerjaan",
            text: "Tips bagi orang tua yang bekerja untuk tetap produktif sambil mengasuh anak.",
            img: imgchild5,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Tips & Trik",
            judul: "Membangun Komunikasi Efektif dengan Remaja Anda",
            text: "Cara berkomunikasi dengan anak remaja agar mereka merasa didengar dan dipahami.",
            img: imgchild6,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Tips & Trik",
            judul: "Pentingnya Rutinitas Tidur yang Baik untuk Anak-Anak",
            text: "Tips untuk menciptakan rutinitas tidur yang sehat dan konsisten bagi anak.",
            img: imgchild7,
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
            nama: "Tips & Trik",
            judul: "Cara Menghadapi Bullying: Dukungan untuk Anak dan.",
            text: "Tips untuk membantu anak yang mengalami bullying dan cara mencegahnya..",
            img: imgchild9,
            next: "Baca Selengkapnya →"
        },
        {
            nama: "Tips & Trik",
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
            nama: "Tips & Trik",
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
                                <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium px-6 py-3 rounded-xl shadow">
                                  Semua
                                </button>
                                <button className="bg-gray-400 hover:bg-gray-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow">
                                    Artikel & Panduan
                                </button>
                                <button className="bg-gray-400 hover:bg-gray-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow">
                                    Tips & Trik
                                </button>
                                <button className="bg-gray-400 hover:bg-gray-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow">
                                    Grup & Komunitas
                                </button>
                            </div>
                    </section>
    
                     <section className="px-4 mt-10 md:px-0">
                        <FiturCard cards={cards} />
                     </section>
    
                </main>
            </div>
        );
}

export default Fitur;
