import { setBackgroundRGBColor } from '../../src/utils/styles-func/setBackgroundRGBColor';

describe('setBackgroundRGBColor', () => {
    it('should return the correct rgba color with default color and opacity', () => {
        const result = setBackgroundRGBColor(100, 50);
        expect(result).toBe('rgba(255, 255, 255, 0.5)');
    });

    it('should return the correct rgba color with custom color and opacitry', () => {
        const result = setBackgroundRGBColor(100, 50, '0, 0, 0', 0.7);
        expect(result).toBe('rgba(0, 0, 0, 0.5)');
    });

    it('should return maximum opacity if scroll is greater than max scroll', () => {
        const result = setBackgroundRGBColor(100, 150, '100, 100, 100', 0.8);
        expect(result).toBe('rgba(100, 100, 100, 0.8)');
    });

    it('should handle opacity value correct when its lower than calc', () => {
        const result = setBackgroundRGBColor(100, 50, '0, 0, 0', 0.2);
        expect(result).toBe('rgba(0, 0, 0, 0.2)');
    });
});
