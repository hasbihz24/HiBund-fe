import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FiturCard from "../components/fitur-card";
import Loading from "../components/loading";
import Search from "../components/search";
import axios from 'axios';

// Importing images
import imgchild13 from "../../public/jumbo-child.png";

function Tips() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredCards, setFilteredCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8080/auth/article')
            .then(response => {
                // Filter articles to only include those with "tips" or "trik" in the title
                const filteredArticles = response.data.filter(article => (
                    article.title.toLowerCase().includes("tips") || article.title.toLowerCase().includes("trik")
                ));
                setArticles(filteredArticles);
                setFilteredCards(filteredArticles);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (searchQuery === "") {
            setFilteredCards(articles);
            setNoResults(false);
            return;
        }

        setLoading(true);
        axios.get(`http://localhost:8080/auth/article/search?title=${encodeURIComponent(searchQuery)}`)
            .then(response => {
                const filteredResults = response.data.filter(article => (
                    article.title.toLowerCase().includes("tips") || article.title.toLowerCase().includes("trik")
                ));
                if (filteredResults.length === 0) {
                    setNoResults(true);
                    setFilteredCards([]);
                } else {
                    setNoResults(false);
                    setFilteredCards(filteredResults);
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

    // Mapping articles to cards format
    const mapArticlesToCards = () => {
        return filteredCards.map(article => ({
            nama: article.authorName, // Assuming authorName is correct
            judul: article.title, // Assuming title is correct
            text: article.content.substring(0, 100) + "...", // Assuming content is correct
            img: article.imageUrl || imgchild13, // Assuming imageUrl is correct or using default image
            next: "Baca Selengkapnya →"
        }));
    };

    const cards = searchQuery ? mapArticlesToCards() : mapArticlesToCards();

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
                            <button className="bg-gray-400 hover:bg-gray-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow">
                                Artikel & Panduan
                            </button>
                        </Link>
                        <Link to="/tips">
                            <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium px-6 py-3 rounded-xl shadow">
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

export default Tips;
