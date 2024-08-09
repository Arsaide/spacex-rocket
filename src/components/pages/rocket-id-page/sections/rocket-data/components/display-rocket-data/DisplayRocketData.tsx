import { SpaceShipModel } from '../../../../../../../api/models/SpaceShipsModels.ts';
import { FC } from 'react';
import styles from './DisplayRocketData.module.scss';
import './rocketSwiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import CharacteristicItem from '../characteristic-item/CharacteristicItem.tsx';
SwiperCore.use([Pagination]);

interface DisplayRocketDataProps {
    data: SpaceShipModel;
}

const DisplayRocketData: FC<DisplayRocketDataProps> = ({ data }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{data.name}</h2>
            <div className={styles.content}>
                <div className={styles.swiperContainer}>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            el: '.custom-rocket-pagination',
                            bulletClass: 'custom-rocket-bullet',
                            bulletActiveClass: 'custom-rocket-bulletActive',
                        }}
                        loop={true}
                        className={'RocketSwiper'}
                    >
                        {data.flickr_images.map((image, index) => (
                            <SwiperSlide key={index} className={styles.slide}>
                                <img
                                    src={image}
                                    alt={`Rocket Image ${index + 1}`}
                                    className={styles.image}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="custom-rocket-pagination"></div>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.name}>{data.name}</h3>
                    <ul className={styles.characteristics}>
                        <CharacteristicItem
                            label="Height"
                            values={`${data.height.meters} m / ${data.height.feet} ft`}
                        />
                        <CharacteristicItem
                            label="Diameter"
                            values={`${data.diameter.meters} m / ${data.diameter.feet} ft`}
                        />
                        <CharacteristicItem
                            label="Mass"
                            values={`${data.mass.kg} kg / ${data.mass.lb} lbs`}
                        />
                        <CharacteristicItem
                            label="Thrust (First Stage)"
                            values={`${data.first_stage.thrust_sea_level.kN} kN / ${data.first_stage.thrust_sea_level.lbf} lbf`}
                        />
                        <CharacteristicItem
                            label="Thrust (Vacuum, First Stage)"
                            values={`${data.first_stage.thrust_vacuum.kN} kN / ${data.first_stage.thrust_vacuum.lbf} lbf`}
                        />
                        <CharacteristicItem
                            label="Fuel Amount (First Stage)"
                            values={`${data.first_stage.fuel_amount_tons} tons`}
                        />
                        <CharacteristicItem
                            label="Burn Time (First Stage)"
                            values={`${data.first_stage.burn_time_sec} sec`}
                        />
                        <CharacteristicItem
                            label="Thrust (Second Stage)"
                            values={`${data.second_stage.thrust.kN} kN / ${data.second_stage.thrust.lbf} lbf`}
                        />
                        <CharacteristicItem
                            label="Fuel Amount (Second Stage)"
                            values={`${data.second_stage.fuel_amount_tons} tons`}
                        />
                        <CharacteristicItem
                            label="Burn Time (Second Stage)"
                            values={`${data.second_stage.burn_time_sec} sec`}
                        />
                        <CharacteristicItem
                            label="Cost per Launch"
                            values={`${data.cost_per_launch.toLocaleString()} $`}
                        />
                        <CharacteristicItem
                            label="Success Rate"
                            values={`${data.success_rate_pct}%`}
                        />
                        <CharacteristicItem label="First Flight" values={data.first_flight} />
                        <CharacteristicItem label="Country" values={data.country} />
                        <CharacteristicItem label="Company" values={data.company} />
                        <CharacteristicItem
                            label="Engines (First Stage)"
                            values={data.first_stage.engines}
                        />
                        <CharacteristicItem
                            label="Engines (Second Stage)"
                            values={data.second_stage.engines}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DisplayRocketData;
