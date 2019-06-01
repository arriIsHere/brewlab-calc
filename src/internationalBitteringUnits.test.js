import {internationalBitteringUnits} from './index';

describe('infusion temperature', () => {
    it('simple baseline', () => {
        const alphaAcids = 10;
        const boilTime = 60;
        const weight = 1;
        const volume = 5;

        const expectedIbus = 38.01;

        const ibus = internationalBitteringUnits(
            alphaAcids, 
            boilTime, 
            weight, 
            volume
        );

        expect(ibus.toFixed(2)).toBe(expectedIbus.toFixed(2));
    });

    it('high AA hop', () => {
        const alphaAcids = 20;
        const boilTime = 60;
        const weight = 0.5;
        const volume = 5.5;

        const expectedIbus = 34.55;

        const ibus = internationalBitteringUnits(
            alphaAcids, 
            boilTime, 
            weight, 
            volume
        );

        expect(ibus.toFixed(2)).toBe(expectedIbus.toFixed(2));
    });
});