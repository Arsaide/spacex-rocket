interface RGB {
    r: number;
    g: number;
    b: number;
}

export const setColorWithScroll = (
    scrollPos: number,
    maxScroll: number,
    startColor: RGB = { r: 255, g: 255, b: 255 },
    endColor: RGB = { r: 0, g: 0, b: 0 },
) => {
    const opacity = Math.min(scrollPos / maxScroll, 1);

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * opacity);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * opacity);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * opacity);

    return `rgba(${r}, ${g}, ${b}, 1)`;
};
