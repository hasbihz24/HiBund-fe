import React, { useState, useEffect } from "react";
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
import Loading from "../components/loading";
import Search from "../components/search";
import axios from 'axios';

function Artikel() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredCards, setFilteredCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8080/auth/article')
            .then(response => {
                setArticles(response.data);
                setFilteredCards(response.data); // Initialize filteredCards with all articles
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                console.error('Error message:', error.message);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                    console.error('Response status:', error.response.status);
                    console.error('Response headers:', error.response.headers);
                } else if (error.request) {
                    console.error('Request data:', error.request);
                }
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (searchQuery === "") {
            setFilteredCards(articles); // Reset filteredCards to all articles
            setNoResults(false); // Reset noResults state
            return;
        }

        setLoading(true);
        axios.get(`http://localhost:8080/auth/article/search?title=${searchQuery}`)
            .then(response => {
                if (response.data.length === 0) {
                    setNoResults(true);
                    setFilteredCards([]);
                } else {
                    setNoResults(false);
                    const results = response.data.map(article => ({
                        nama: article.authorName,
                        judul: article.title,
                        text: truncateText(article.content, 100),
                        img: imgchild13,
                        next: "Baca Selengkapnya →"
                    }));
                    setFilteredCards(results);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
                if (error.response && error.response.status === 404) {
                    setNoResults(true);
                    setFilteredCards([]);
                }
                setLoading(false);
            });
    }, [searchQuery, articles]);

    const truncateText = (text, length) => {
        return text.length > length ? text.substring(0, length) + "..." : text;
    };

    const cards = searchQuery ? filteredCards : articles.map(article => ({
        nama: article.authorName,
        judul: article.title,
        text: truncateText(article.content, 100),
        img: article.imageUrl || imgchild13,
        next: "Baca Selengkapnya →"
    }));


    return (
        <div className="bg-white">
            <main className="container mx-auto py-12">
                <section className="flex flex-col items-center">
                    <img src={imgchild13} alt='banner' className='w-full h-full object-cover' />
                    <div className="flex space-x-4 mt-5">
                        <Link to="/fitur">
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
                    </div>
                </section>

                <section className="px-4 mt-10 md:px-0">
                    {/* Search Input */}
                    <Search
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    {/* Loading or Cards */}
                    {loading ? (
                        <Loading />
                    ) : (
                        noResults ? (
                            <p>Pencarian tidak ditemukan</p>
                        ) : (
                            <FiturCard cards={cards} />
                        )
                    )}
                </section>


            </main>
        </div>
    );
}

export default Artikel;
