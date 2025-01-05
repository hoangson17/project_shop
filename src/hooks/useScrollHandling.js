import { useEffect, useRef, useState } from "react";

const useScrollHandling = () => {
    const [scrollDriction, setscrollDriction] = useState(null);
    const prevScrollPosition = useRef(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > prevScrollPosition.current) {
            setscrollDriction('down');
        }
        else if (currentScrollPosition < prevScrollPosition.current) {
            setscrollDriction('up');
        }

        prevScrollPosition.current = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        setScrollPosition(currentScrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);

    }, [])

    return {
        scrollDriction,
        scrollPosition

    }
}

export default useScrollHandling