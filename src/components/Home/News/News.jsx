import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCard from "./NewsCard";
import article1 from "../../../assets/Carousel/article1.png";
import article2 from "../../../assets/Carousel/article2.png";
import article3 from "../../../assets/Carousel/article3.jpg";
import article4 from "../../../assets/Carousel/article4.jpg";

const News = () => {
  const newsData = [
    {
      id: 0,
      img: article1,
      link:'https://www.ynet.co.il/news/article/SkTEvwsov',
    },
    {
      id: 1,
      img: article2,
      link:'https://www.maariv.co.il/landedpages/printarticle.aspx?id=749760#',
    },
    {
      id: 2,
      img: article3,
      link:'https://www.themarker.com/labels/employment-diversity/2023-03-05/ty-article-labels/00000186-a232-d3d5-a7e7-aa377eea0000',
    },
    {
      id: 3,
      img: article4,
      link:'https://www.themarker.com/labels/diversity/2022-02-06/ty-article-labels/0000017f-f88a-d044-adff-fbfbc5360000',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className=" container mt-32">
      <h1 className=" font-bold text-4xl text-center text-primary mb-14">
     פרנסה ביושר <span className=" text-secondary">בעיתונות</span>
      </h1>
      <div className=" mt-8">
        <Slider {...settings}>
          {newsData.map((item) => (
            <NewsCard key={item.id} img={item.img} desc={item.desc} link={item.link} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default News;
