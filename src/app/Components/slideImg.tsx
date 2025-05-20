'use client';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import Link from 'next/link'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SliderImg () {

    const data = [
        { id: '1', img:'/img/MesaBatman1.jpg'},
        { id: '2', img:'/img/Pokebola.png'}
    ]

    return (
        <div>
            <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000, // troca a cada 3 segundos
                disableOnInteraction: false, // continua mesmo se o usuário interagir
            }}
            navigation
            >
               {data.map( (fotos) => (
                <SwiperSlide key={fotos.id}>
                    <img
                    src={fotos.img}
                    alt='Fotos das mesas feitas pela Móveis Gondor!'
                    className="w-full h-250 bg-cover bg-center"
                    />
                </SwiperSlide>
               ))}
            </Swiper>
        </div>
    )
}

export default SliderImg