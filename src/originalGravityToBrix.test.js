import { originalGravityToBrix } from './index';

describe('Original Gravity To Brix conversion', () => {
	it('verify 1.000 => 0.00', () => {
		const og = 1.0;
		const expectedBrix = 0.0;
		const brix = originalGravityToBrix(og);

		expect((Math.round(brix * 100) / 100)).toBe(expectedBrix);
	});

	it('verify 0.990 => 0.00', () => {
		const og = 0.990;
		const expectedBrix = 0.0;
		const brix = originalGravityToBrix(og);

		expect((Math.round(brix * 100) / 100)).toBe(expectedBrix);
	});

	it('verify 1.050 => 12.37', () => {
		const og = 1.050;
		const expectedBrix = 12.39;
		const brix = originalGravityToBrix(og);

		expect( Math.round(brix * 100) / 100).toBe(expectedBrix);
	});

	it('verify 1.002 => 0.51', () => {
		const og = 1.002;
		const expectedBrix = 0.51;
		const brix = originalGravityToBrix(og);

		expect( Math.round(brix * 100) / 100).toBe(expectedBrix);
	});

	it('verify 1.045 => 0.51', () => {
		const og = 1.045;
		const expectedBrix = 11.20;
		const brix = originalGravityToBrix(og);

		expect( Math.round(brix * 100) / 100).toBe(expectedBrix);
	});

	it('verify 1.130 => 30.15', () => {
		const og = 1.130;
		const expectedBrix = 30.18;
		const brix = originalGravityToBrix(og);

		expect( Math.round(brix * 100) / 100).toBe(expectedBrix);
	});
});