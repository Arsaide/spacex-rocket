export const settingMinMaxValue = (
    scrollPos: number,
    maxValue: number,
    minValue: number,
    scrollValue: number,
) => {
    return Math.max(maxValue - (scrollPos / scrollValue) * (maxValue - minValue), minValue);
};
