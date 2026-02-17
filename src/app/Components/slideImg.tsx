'use client';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';




import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SliderImg () {

    const data = [
        
        { id: '1', img:'/img/IMG_0807.jpg'},
        { id: '2', img:'/img/IMG_4461.jpg'},
        { id: '3', img:'/img/IMG_9769.jpg'},
        { id: '4', img:'/img/IMG_4473.jpg'},
        { id: '5', img:'/img/IMG_4393.png'},
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
                    alt='Fotos dos móveis temáticos feitos pela Móveis Gondor!'
                    className="w-screen h-max bg-cover bg-center" //cortar as fotos para elas ficarem menores
                    />
                </SwiperSlide>
               ))}
            </Swiper>
        </div>
    )
}

export default SliderImg