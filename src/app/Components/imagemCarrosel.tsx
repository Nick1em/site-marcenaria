import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const imagemCarrosel: React.FC = () =>{

    const settings = {
        dots: false,
        Infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase:"linear",
        arrows: false,
    };
    return(

        <div style={{ width: "100%", overflow: "hidden" }}>
            <Slider {...settings}>
                <img src="/img/IMAGENS AQUI.png" alt="Imagem temporaria"></img>
                <img src="/img/MesaBatman1.jpg" alt="Imagem temporaria"></img>
                <img src="/img/IMAGENS AQUI.png" alt="Imagem temporaria"></img>
            </Slider>
        </div>
    )
};

export default imagemCarrosel; 