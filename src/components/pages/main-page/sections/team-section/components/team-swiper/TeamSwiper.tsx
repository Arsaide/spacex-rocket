import styles from './TeamSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import TeamMember from '../team-member/TeamMember.tsx';
import { useRef, useState } from 'react';
import Arrow from '../../../../../../../lib/icons/Arrow.tsx';
import './TeamSwiper.css';
import { ColorsEnum } from '../../../../../../../utils/enums/ColorEnums.ts';
SwiperCore.use([Navigation, Pagination]);

const TeamSwiper = () => {
    const [navState, setNavState] = useState({
        isBeginning: true,
        isEnd: false,
    });

    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    const handleSwiper = (swiper: SwiperCore) => {
        setNavState({
            isBeginning: swiper.isBeginning,
            isEnd: swiper.isEnd,
        });
    };

    return (
        <div className={styles.team}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h4 className={styles.title}>Team</h4>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor sed
                        urna a faucibus. Pellentesque mi nisl, mollis convallis metus id, congue
                        semper neque. Sed suscipit eget ipsum ut gravida. Fusce
                    </p>
                </div>
                <div className={styles.pagination}>
                    <button ref={prevRef} className={styles.btn} disabled={navState.isBeginning}>
                        <Arrow direction={'left'} color={ColorsEnum.BLACK} size={50} />
                    </button>
                    <button ref={nextRef} className={styles.btn} disabled={navState.isEnd}>
                        <Arrow direction={'right'} color={ColorsEnum.BLACK} size={50} />
                    </button>
                </div>
            </div>
            <div className={styles.swiper}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation={{
                        nextEl: nextRef.current,
                        prevEl: prevRef.current,
                    }}
                    modules={[Navigation, Pagination]}
                    onSwiper={handleSwiper}
                    onSlideChange={handleSwiper}
                    className={'TeamSwiper'}
                >
                    <SwiperSlide>
                        <TeamMember
                            name="DAVE JOHNSON"
                            position="ST. MECHANIC"
                            avatarUrl="https://image.cdn2.seaart.ai/2023-11-04/21789972062325765/26cead95b5371651d92f6cb92ebf539b62638e19_high.webp"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMember
                            name="JANE DOE"
                            position="ENGINEER"
                            avatarUrl="https://image.cdn2.seaart.ai/2023-11-04/21789972062325765/26cead95b5371651d92f6cb92ebf539b62638e19_high.webp"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMember
                            name="JANE DOE"
                            position="ENGINEER"
                            avatarUrl="https://image.cdn2.seaart.ai/2023-11-04/21789972062325765/26cead95b5371651d92f6cb92ebf539b62638e19_high.webp"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMember
                            name="JANE DOE"
                            position="ENGINEER"
                            avatarUrl="https://image.cdn2.seaart.ai/2023-11-04/21789972062325765/26cead95b5371651d92f6cb92ebf539b62638e19_high.webp"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMember
                            name="JANE DOE"
                            position="ENGINEER"
                            avatarUrl="https://image.cdn2.seaart.ai/2023-11-04/21789972062325765/26cead95b5371651d92f6cb92ebf539b62638e19_high.webp"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TeamSwiper;
