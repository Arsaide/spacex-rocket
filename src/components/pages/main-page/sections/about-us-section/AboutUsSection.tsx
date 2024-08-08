import styles from './AboutUsSection.module.scss';

const AboutUsSection = () => {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}></h3>
            <div className={styles.content}>
                <div className={styles.video}>
                    <iframe
                        className={styles.iframe}
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Cf_-g3UWQ04?enablejsapi=1&rel=0&controls=0"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
