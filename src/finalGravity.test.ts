import finalGravity from './finalGravity';

describe('final gravity', () => {
	it('1.05 at 79%', () => {
		const og = 1.05;
		const att = 79;
		const expFg = 1.01;
		const fg = finalGravity(og, att);
        
		expect(fg.toFixed(3)).toBe(expFg.toFixed(3));
	});

	it('1.055 at 74%', () => {
		const og = 1.055;
		const att = 74;
		const expFg = 1.014;
		const fg = finalGravity(og, att);
        
		expect(fg.toFixed(3)).toBe(expFg.toFixed(3));
	});

	it('1.030 at 86%', () => {
		const og = 1.030;
		const att = 86;
		const expFg = 1.004;
		const fg = finalGravity(og, att);
        
		expect(fg.toFixed(3)).toBe(expFg.toFixed(3));
	});

	it('1.090 at 65%', () => {
		const og = 1.090;
		const att = 65;
		const expFg = 1.032;
		const fg = finalGravity(og, att);
        
		expect(fg.toFixed(3)).toBe(expFg.toFixed(3));
	})
});