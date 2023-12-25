export const sliderVal = ["first", "second", "third", "four", "five"];
export const footerVal = [1,2,3,4];
export const featurePromo = ["one", "two", "three", "four", "five"];

export const getStylesLan = (data,bg,color) => {
    return {
        fullBg: {
            background: data[bg]?.en,
            color: data[color]?.en
        },
        color: {
            color: data[color]?.en
        },
        bg: {
            background: data[bg]?.en,
        }
    }
}


export const getStyles = (data,bg,color) => {
    return {
        fullBg: {
            background: data[bg],
            color: data[color]
        },
        color: {
            color: data[color]
        },
        bg: {
            background: data[bg],
        }
    }
}