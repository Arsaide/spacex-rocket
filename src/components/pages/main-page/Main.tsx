import WelcomeSection from './sections/welcome-section/WelcomeSection.tsx';
import RocketListSection from './sections/rocket-list-section/RocketListSection.tsx';
import CounterSection from './sections/counters-section/CounterSection.tsx';

const MainPage = () => {
    return (
        <>
            <WelcomeSection />
            <RocketListSection />
            <CounterSection/>
        </>
    );
};

export default MainPage;
