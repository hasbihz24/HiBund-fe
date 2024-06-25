import TheArticle from "../components/the-article";
import UNICEF from "../../public/UNICEF.png";
import FiturCard from "../components/fitur-card";
import imgchild1 from "../../public/child.jpg";
import imgchild2 from "../../public/child2.png";
import imgchild3 from "../../public/child3.png";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb";

import imgchild13 from "../../public/jumbo-child.png";
const author = {
    name: "Jane Doe",
    image: "https://via.placeholder.com/150",
};

const content = [
    "Lorem ipsum dolor sit amet consectetur. Sagittis tempus turpis volutpat tristique egestas gravida ac donec. In placerat proin arcu venenatis eleifend enim in id ut. Turpis tellus mauris mi dictum ut amet odio massa sollicitudin. Ultrices pulvinar vel dolor ultrices tellus ultrices nec. Leo morbi sodales tellus tristique aenean arcu bibendum. Habitasse justo augue enim arcu nibh tincidunt diam. Nec lacus pellentesque molestie morbi eu morbi egestas. Sem venenatis sed consectetur ullamcorper aliquam dictum.Fermentum pretium blandit nullam sed tortor dignissim nulla bibendum.Enim in nec neque nibh non vitae iaculis justo.Aliquam aliquam felis orci id aliquet turpis velit velit semper.Eu erat in malesuada phasellus quam proin facilisi nec.Ut ullamcorper amet in gravida auctor urna pretium eget vitae.Eget nulla quam ipsum facilisis feugiat ut ante tincidunt pellentesque.Nunc odio id dolor volutpat cras ut massa pulvinar dignissim.Varius pulvinar massa id pellentesque.Ultricies orci scelerisque vitae vel felis orci tortor a eget.Viverra turpis egestas dictumst sit egestas proin congue.Faucibus malesuada ultrices egestas nunc elit.Sagittis quis ut morbi hac.Commodo placerat feugiat varius felis at in.Erat a turpis bibendum arcu sed.Praesent amet bibendum luctus purus imperdiet interdum.Ut velit scelerisque platea facilisi adipiscing viverra phasellus a.Maecenas enim sodales sit ipsum ullamcorper.Enim massa faucibus in amet sed pellentesque vel ullamcorper eget.Id consectetur id mi aliquam.Vitae ut mi faucibus a.Sed aliquet vel magnis dignissim.Et lorem quis turpis nunc mi vivamus vulputate lectus ut.Velit morbi velit curabitur sollicitudin pulvinar nulla congue viverra et.Egestas nunc mauris iaculis nisl elit mauris.Leo eu euismod sit quis euismod vitae purus.In at urna neque sed tortor quam tempus.Cursus ipsum pellentesque mattis sagittis sed euismod lectus.",
    "Vivamus lacinia odio vitae vestibulum vestibulum.",
    "Cras vehicula, massa at semper tincidunt, sapien turpis aliquet urna, eu feugiat nunc quam ac dui.",
    // Add more paragraphs as needed
];
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
]
const image = [UNICEF];
function ArtikelFull() {
    return (
        <>
            <img src={imgchild13} alt='banner' className='w-full h-full object-cover' />
            <div className="mx-14 mt-3 flex items-center space-x-2">
                <Breadcrumb />
                <span className="text-gray-700">
                    10 Tips Efektif untuk Mengatasi Tantrum pada Anak Balita
                </span>
            </div>
            <div className="mb-8">
                <TheArticle
                    title="10 Tips Efektif untuk Mengatasi Tantrum pada Anak Balita"
                    author={author}
                    date="June 23, 2024"
                    content={content}
                    image={image}
                />
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
