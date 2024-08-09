import RocketDataSection from './sections/rocket-data/RocketDataSection.tsx';
import GallerySection from '../main-page/sections/gallery-section/GallerySection.tsx';
import StarbaseSection from './sections/starbase/Starbase.tsx';

const RocketIdPage = () => {
    return (
        <>
            <RocketDataSection />
            <GallerySection />
            <StarbaseSection />
        </>
    );
};

export default RocketIdPage;
