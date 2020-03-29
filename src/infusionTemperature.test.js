import { infusionTemperature } from './index';

describe('infusion temperature', () => {
	it('average conditions', () => {
		const ratio = 1.5;
		const target = 150;
		const grainTemp = 65;
		const expectedInfusion = 161.3;
		const infusion = infusionTemperature(ratio, target, grainTemp);

		expect(infusion.toFixed(1)).toBe(expectedInfusion.toFixed(1));
	});

	it('low temperature mash', () => {
		const ratio = 1.5;
		const target = 135;
		const grainTemp = 65;
		const expectedInfusion = 144.3;
		const infusion = infusionTemperature(ratio, target, grainTemp);

		expect(infusion.toFixed(1)).toBe(expectedInfusion.toFixed(1));
	});

	it('low ratio mash', () => {
		const ratio = 1;
		const target = 165;
		const grainTemp = 70;
		const expectedInfusion = 184.0;
		const infusion = infusionTemperature(ratio, target, grainTemp);

		expect(infusion.toFixed(1)).toBe(expectedInfusion.toFixed(1));
	});

	it('default value', () => {
		const ratio = 1.5;
		const target = 150;
		const expectedInfusion = 160.4;
		const infusion = infusionTemperature(ratio, target);

		expect(infusion.toFixed(1)).toBe(expectedInfusion.toFixed(1));
	});
});