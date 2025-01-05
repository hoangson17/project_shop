import React, { useEffect, useState } from 'react'
import useScrollHandling  from '@/hooks/useScrollHandling'

const useTranslateXImages = () => {
    const {scrollPosition,scrollDriction} = useScrollHandling();
    const [translateXPosition, setTranslateXPosition] = useState(5);

    const handleTranslateX = () => {
        if (scrollDriction === "down" && scrollPosition >= 1000) {
            setTranslateXPosition(translateXPosition <= 0 ? 0 : translateXPosition - 1);
        } else if (scrollDriction === "up") {
            setTranslateXPosition(translateXPosition >= 5 ? 5 : translateXPosition + 1)
        }
    }

    // console.log(scrollPosition);

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition])


    return{
        translateXPosition
    } 
}

export default useTranslateXImages