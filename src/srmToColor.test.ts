import srmToColor from './srmToColor';

describe('SRM to Color', () => {
	it('return check', () => {
		const srm = 5;
		const color = srmToColor(srm);
        
		expect(color).not.toBe(null);
	});

	it('hex code check', () => {
		const srm = 5;
		const color = srmToColor(srm);

		expect(color).toMatch(/\#[0-9A-F]{6}/);
	});
});