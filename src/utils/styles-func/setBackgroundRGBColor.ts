export const getBackgroundRGBColor = (
    maxScroll: number,
    scrollPos: number,
    color?: string | '255, 255, 255',
    opacityValue?: number,
) => {
    const opacity = Math.min(scrollPos / maxScroll, opacityValue || 0.8);
    return `rgba(${color}, ${opacity})`;
};
