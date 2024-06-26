import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import TheArticle from '../components/the-article';
import UNICEF from '../../public/UNICEF.png';
import FiturCard from '../components/fitur-card';
import imgchild1 from '../../public/child.jpg';
import imgchild2 from '../../public/child2.png';
import imgchild3 from '../../public/child3.png';
import Breadcrumb from '../components/breadcrumb';
import imgchild13 from '../../public/jumbo-child.png';

const image = [UNICEF];

function ArtikelFull() {
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);
    const [article, setArticle] = useState([]);
    const [cardArticle, setCardArticle] = useState([]);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get('http://localhost:8080/auth/article/search?title=' + decodedTitle);
                setArticle(response.data);
            } catch (error) {
                console.error('Error fetching Article:', error);
            }
        };

        fetchArticle();
    }, [decodedTitle]);

    useEffect(() => {
        axios.get('http://localhost:8080/auth/article')
            .then(response => {
                setCardArticle(response.data);
            }).catch(error => {
                console.error('Error fetching articles:', error);
                console.error('Error message:', error.message);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                    console.error('Response status:', error.response.status);
                    console.error('Response headers:', error.response.headers);
                } else if (error.request) {
                    console.error('Request data:', error.request);
                }
            });
    }, []);

    const truncateText = (text, length) => {
        return text.length > length ? text.substring(0, length) + "..." : text;
    };

    // Filter out articles with the same title as decodedTitle
    const filteredArticles = cardArticle.filter(article => article.title !== decodedTitle);

    // Limit the number of articles to 3
    const limitedCardArticles = filteredArticles.slice(0, 3);

    const cards = limitedCardArticles.map(article => ({
        nama: article.authorName,
        judul: article.title,
        text: truncateText(article.content, 100),
        img: article.imageUrl || imgchild13,
        next: "Baca Selengkapnya →"
    }));

    return (
        <>
            <img src={imgchild13} alt='banner' className='w-full h-full object-cover' />
            <div className="mx-14 mt-3 flex items-center space-x-2">
                <Breadcrumb />
            </div>
            <div className="mb-8">
                {article.map((article, index) => {
                    const formattedDate = new Date(article.createdAt).toLocaleDateString();
                    return (
                        <TheArticle
                            key={index}
                            title={article.title}
                            author={article.authorName}
                            date={formattedDate}
                            content={article.content}
                            image={article.imageUrl}
                        />
                    );
                })}
            </div>
            <div className="grid grid-cols-3 content-center mb-14">
                <div className="col-span-3 flex justify-center items-center">
                    <h1 className="text-black font-bold text-xl">Informasi Lainnya</h1>
                </div>
                <div className="col-span-3 flex justify-center items-center">
                    <section className="px-4 mt-13 md:px-0">
                        <FiturCard cards={cards} />
                    </section>
                </div>
            </div>
        </>
    );
}

export default ArtikelFull;
