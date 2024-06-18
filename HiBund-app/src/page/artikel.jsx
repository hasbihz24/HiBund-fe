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
    // State for managing the selected category
    const [selectedCategory, setSelectedCategory] = useState("Semua");

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

     // Function to handle category change
     const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // Filtered cards based on the selected category
    const filteredCards = selectedCategory === "Semua"
        ? cards
        : cards.filter(card => card.nama === selectedCategory);

        return (
            <div className="w-full h-screen flex flex-col items-center bg-white relative overflow-y-auto">
                {/* Main Content Overlay */}
                <div className="flex justify-center items-center w-full h-full md:mt-[-5%]">
                    <img src={imgchild13} className="max-w-full max-h-full object-contain" alt="child" />
                </div>
    
                {/* Categories Section */}
                <div className="absolute top-[68%] transform -translate-y-1/2 flex flex-wrap justify-center items-center gap-2 px-4">
                    <Link 
                        to="/"
                        className={`text-sm font-medium px-6 py-3 rounded-xl shadow ${selectedCategory === "Semua" ? "btn-pink text-white" : "btn-default text-zinc-800"}`}
                        onClick={() => handleCategoryChange("Semua")}
                    >
                        Semua
                    </Link>
                    <Link 
                        to="/artikel"
                        className={`text-sm font-medium px-4 py-2 rounded-lg ${selectedCategory === "Artikel & Panduan" ? "btn-pink text-white" : "btn-default text-zinc-800"}`}
                        onClick={() => handleCategoryChange("Artikel & Panduan")}
                    >
                        Artikel & Panduan
                    </Link>
                    <Link 
                        to="/tips"
                        className={`text-sm font-medium px-4 py-2 rounded-lg ${selectedCategory === "Tips & Trik" ? "btn-pink text-white" : "btn-default text-zinc-800"}`}
                        onClick={() => handleCategoryChange("Tips & Trik")}
                    >
                        Tips & Trik
                    </Link>
                    <Link 
                        to="/grup-komunitas"
                        className={`text-sm font-medium px-4 py-2 rounded-lg ${selectedCategory === "Grup & Komunitas" ? "btn-pink text-white" : "btn-default text-zinc-800"}`}
                        onClick={() => handleCategoryChange("Grup & Komunitas")}
                    >
                        Grup & Komunitas
                    </Link>
                </div>
    
                {/* Articles Section */}
                <div className="w-full px-4 md:px-0 mt-8">
                    <FiturCard cards={filteredCards} />
                </div>
            </div>
        );
}

export default Artikel;
