import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { SpaceShipModel } from '../../../../../../../api/models/SpaceShipsModels.ts';
import { FC, useState } from 'react';
import styles from './RocketSwiper.module.scss';
import './swiper.css';
import Arrow from '../../../../../../../lib/icons/Arrow.tsx';
import { NavLink } from 'react-router-dom';
SwiperCore.use([Navigation, Pagination]);

interface RocketSwiperProps {
    rockets: SpaceShipModel[];
}

const RocketSwiper:FC<RocketSwiperProps> = ({rockets}) => {
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
        <div className={styles.swiperCnt}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                    bulletClass: 'custom-bullet',
                    bulletActiveClass: 'custom-bullet-active',
                }}
                modules={[Pagination, Navigation]}
                onSwiper={handleSwiper}
                onSlideChange={handleSwiper}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {rockets.map(ship => (
                    <SwiperSlide key={ship.id}>
                        <NavLink to={`/rocket?id=${ship.id}`} className={styles.card}>
                            <div className={styles.imgCnt}>
                                <img className={styles.img} src={ship.flickr_images[0]} alt={ship.name} />
                            </div>
                            <div className={styles.content}>
                                <h4 className={styles.name}>{ship.name}</h4>
                                <ul className={styles.characteristics}>
                                    <li className={styles.item}>
                                        <div className={styles.label}>Height:</div>
                                        <div className={styles.values}>
                                            {ship.height.meters} m / {ship.height.feet} ft
                                        </div>
                                    </li>
                                    <li className={styles.item}>
                                        <div className={styles.label}>Diameter:</div>
                                        <div className={styles.values}>
                                            {ship.diameter.meters} m / {ship.diameter.feet} ft
                                        </div>
                                    </li>
                                    <li className={styles.item}>
                                        <div className={styles.label}>Mass:</div>
                                        <div className={styles.values}>
                                            {ship.mass.kg} kg / {ship.mass.lb} lbs
                                        </div>
                                    </li>
                                    <li className={styles.item}>
                                        <div className={styles.label}>Thrust (First Stage):</div>
                                        <div className={styles.values}>
                                            {ship.first_stage.thrust_sea_level.kN} kN
                                            / {ship.first_stage.thrust_sea_level.lbf} lbf
                                        </div>
                                    </li>
                                    <li className={styles.item}>
                                        <div className={styles.label}>Cost per Launch:</div>
                                        <div className={styles.values}>
                                            ${ship.cost_per_launch.toLocaleString()}
                                        </div>
                                    </li>
                                    <li className={styles.item}>
                                        <div className={styles.label}>Success Rate:</div>
                                        <div className={styles.values}>
                                            {ship.success_rate_pct}%
                                        </div>
                                    </li>
                                    <li className={styles.item}>
                                        <div className={styles.label}>First Flight:</div>
                                        <div className={styles.values}>
                                            {ship.first_flight}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </NavLink>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.pagination}>
                <div
                    className={`custom-prev ${navState.isBeginning ? 'disabled' : ''}`}
                >
                    <Arrow direction={'left'} size={30} />
                </div>
                <div className="custom-pagination"></div>
                <div
                    className={`custom-next ${navState.isEnd ? 'disabled' : ''}`}
                >
                    <Arrow direction={'right'} size={30} />
                </div>
            </div>
        </div>
    );
};

export default RocketSwiper;