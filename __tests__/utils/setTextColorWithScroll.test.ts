import { setTextColorWithScroll, RGB } from '../../src/utils/styles-func/setTextColorWithScroll';

describe('setTextColorWithScroll', () => {
    it('should return the start color when scroll pos = 0', () => {
        const result = setTextColorWithScroll(0, 100);
        expect(result).toBe('rgba(255, 255, 255, 1)');
    });

    it('should return the endColor when scroll pos = max scroll value', () => {
        const result = setTextColorWithScroll(100, 100);
        expect(result).toBe('rgba(0, 0, 0, 1)');
    });

    it('should handle custom startColor and endColor', () => {
        const startColor: RGB = { r: 100, g: 100, b: 100 };
        const endColor: RGB = { r: 200, g: 200, b: 200 };
        const result = setTextColorWithScroll(50, 100, startColor, endColor);
        expect(result).toBe('rgba(150, 150, 150, 1)');
    });
});
