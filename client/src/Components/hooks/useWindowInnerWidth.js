import React, { useEffect, useState } from 'react'

const useWindowInnerWidth = () => {
    const [widthValue, setWidthValue] = useState(window.innerWidth);
    useEffect(() => {
        const handleWidth = () => {
            setWidthValue(window.innerWidth);
        };
        window.addEventListener('resize', handleWidth);
        return () => {

            window.removeEventListener('resize', handleWidth);
        }
    }, [])
    return widthValue;
}
export default useWindowInnerWidth;