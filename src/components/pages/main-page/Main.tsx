import WelcomeSection from './sections/welcome-section/WelcomeSection.tsx';
import RocketListSection from './sections/rocket-list-section/RocketListSection.tsx';
import CounterSection from './sections/counters-section/CounterSection.tsx';
import AboutUsSection from './sections/about-us-section/AboutUsSection.tsx';
import TeamSection from './sections/team-section/TeamSection.tsx';
import GallerySection from './sections/gallery-section/GallerySection.tsx';

const MainPage = () => {
    return (
        <>
            <WelcomeSection />
            <RocketListSection />
            <CounterSection />
            <AboutUsSection />
            <TeamSection />
            <GallerySection />
        </>
    );
};

export default MainPage;
