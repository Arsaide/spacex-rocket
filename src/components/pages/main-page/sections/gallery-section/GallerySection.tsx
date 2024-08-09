import styles from './GallerySection.module.scss';
import './gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { useRef, useState } from 'react';
import SwiperCore from 'swiper';
import Arrow from '../../../../../lib/icons/Arrow.tsx';
import { galleryArr } from './gallery.ts';
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const GallerySection = () => {
    const prevBtnRef = useRef<HTMLButtonElement | null>(null);
    const nextBtnRef = useRef<HTMLButtonElement | null>(null);

    const [navState, setNavState] = useState({
        isBeginning: true,
        isEnd: false,
    });

    const handleSwiper = (swiper: SwiperCore) => {
        setNavState({
            isBeginning: swiper.isBeginning,
            isEnd: swiper.isEnd,
        });
    };

    return (
        <section className={styles.section}>
            <div className={styles.swiper}>
                <Swiper
                    slidesPerView={1}
                    navigation={{
                        prevEl: prevBtnRef.current,
                        nextEl: nextBtnRef.current,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.custom-gallery-pagination',
                        bulletClass: 'custom-gallery-bullet',
                        bulletActiveClass: 'custom-gallery-bullet-active',
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    effect="fade"
                    modules={[Pagination, Navigation, Autoplay, EffectFade]}
                    onSwiper={handleSwiper}
                    onSlideChange={handleSwiper}
                >
                    {galleryArr.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.slide}>
                                <img src={item} alt={'SpaceX swiper slide image'} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.content}>
                <div className={'cnt'}>
                    <div className={styles.info}>
                        <h4 className={styles.title}>
                            STARSHIP
                            <br /> CAPABILITIES
                        </h4>
                        <p className={styles.text}>
                            As the most powerful launch system ever developed, Starship will be able
                            to carry up to 100 people on long-duration, interplanetary flights.
                            Starship will also help enable satellite delivery, the development of a
                            Moon base, and point-to-point transport here on Earth.
                        </p>
                    </div>
                    <div className={styles.pagination}>
                        <button
                            ref={prevBtnRef}
                            className={styles.btn}
                            disabled={navState.isBeginning}
                        >
                            <Arrow direction={'left'} size={30} />
                        </button>
                        <div className="custom-gallery-pagination"></div>
                        <button ref={nextBtnRef} className={styles.btn} disabled={navState.isEnd}>
                            <Arrow direction={'right'} size={30} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
