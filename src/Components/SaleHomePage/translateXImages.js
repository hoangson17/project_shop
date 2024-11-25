import React, { useEffect, useRef, useState } from 'react'

const useTranslateX = () => {
    const [scrollDriction, setscrollDriction] = useState(null);
    const prevScrollPosition = useRef(0);
    const [translateXPosition, setTranslateXPosition] = useState(5);
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

    const handleTranslateX = () => {
        if (scrollDriction === "down" && scrollPosition >= 1000) {
            setTranslateXPosition(translateXPosition <= 0 ? 0 : translateXPosition - 1);
        } else if (scrollDriction === "up") {
            setTranslateXPosition(translateXPosition >= 5 ? 5 : translateXPosition + 1)
        }
    }

    console.log(scrollPosition);

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);

    }, [])

    useEffect(()=>{
        handleTranslateX();
      },[scrollPosition])

    return{
        translateXPosition
    }
}

export default useTranslateX;