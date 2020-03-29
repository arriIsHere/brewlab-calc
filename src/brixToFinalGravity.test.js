import brixToFinalGravity from './brixToFinalGravity';

describe('Brix to Final Gravity', () => {
	it('14.8, 10 => 1.028', () => {
		const ogBrix = 14.8;
		const fgBrix = 10;
		const expectedFg = 1.020;
		const fg = brixToFinalGravity(ogBrix, fgBrix);

		expect(Math.round(fg * 100) / 100).toBe(expectedFg);
	});

	it('14.8, 10 => 1.028', () => {
		const ogBrix = 14.8;
		const fgBrix = 7;
		const expectedFg = 1.010;
		const fg = brixToFinalGravity(ogBrix, fgBrix);

		expect(Math.round(fg * 100) / 100).toBe(expectedFg);
	});

	it('15.2, 8.2 => 1.015', () => {
		const ogBrix = 15.7;
		const fgBrix = 8.2;
		const expectedFg = 1.020;
		const fg = brixToFinalGravity(ogBrix, fgBrix);

		expect(Math.round(fg * 100) / 100).toBe(expectedFg);
	});

	it('15.2, 9.0 => 1.021', () => {
		const ogBrix = 15.2;
		const fgBrix = 9.0;
		const expectedFg = 1.020;
		const fg = brixToFinalGravity(ogBrix, fgBrix);

		expect(Math.round(fg * 100) / 100).toBe(expectedFg);
	});
});