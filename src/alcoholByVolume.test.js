import {alcoholByVolume} from './index';

describe('alcohol by volume', () => {
    it('test 1.05 -> 1.01', () => {
        const og = 1.05;
        const fg = 1.01;
        const expABV = 5.34;

        const abv = alcoholByVolume(og, fg);

        expect(abv.toFixed(2)).toBe(expABV.toFixed(2));
    });

    it('test 1.61 -> 1.014', () => {
        const og = 1.061;
        const fg = 1.014;
        const expABV = 6.40;

        const abv = alcoholByVolume(og, fg);

        expect(abv.toFixed(2)).toBe(expABV.toFixed(2));
    });

    it('test 1.30 -> 1.009', () => {
        const og = 1.030;
        const fg = 1.009;
        const expABV = 2.73;

        const abv = alcoholByVolume(og, fg);

        expect(abv.toFixed(2)).toBe(expABV.toFixed(2));
    });
});