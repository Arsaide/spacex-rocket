import { settingMinMaxValue } from '../../src/utils/styles-func/settingMinMaxValue.ts';

describe('settingMinMaxValue', () => {
    it('should return the correct calc value within range', () => {
        const result = settingMinMaxValue(50, 200, 100, 100);
        expect(result).toBe(150);
    });

    it('should return the min value if calc value is below min', () => {
        const result = settingMinMaxValue(150, 200, 100, 100);
        expect(result).toBe(100);
    });

    it('should return the max value if scroll pos = 0', () => {
        const result = settingMinMaxValue(0, 200, 100, 100);
        expect(result).toBe(200);
    });

    it('should return the correct value when scroll pos is max scroll', () => {
        const result = settingMinMaxValue(100, 200, 100, 100);
        expect(result).toBe(100);
    });
});
