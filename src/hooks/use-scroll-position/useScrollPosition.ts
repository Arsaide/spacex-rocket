import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
    const [scrollPos, setScrollPos] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPos(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scrollPos };
};
