import {originalGravity} from './index';

describe('original gravity', ()=> {
	it('standard baseline', () => {
		const gravityPoints = 360;
		const volume = 5;
		const mashEfficiency = 80;
		const ogExpected = 1.058;
		const og = originalGravity(gravityPoints, volume, mashEfficiency);

		expect(og.toFixed(3)).toBe(ogExpected.toFixed(3));
	});

	it('default efficiency', () => {
		const gravityPoints = 360;
		const volume = 5;
		const ogExpected = 1.058;
		const og = originalGravity(gravityPoints, volume);

		expect(og.toFixed(3)).toBe(ogExpected.toFixed(3));
	});

	it('High gravity', () => {
		const gravityPoints = 720;
		const volume = 5;
		const mashEfficiency = 80;
		const ogExpected = 1.115;
		const og = originalGravity(gravityPoints, volume, mashEfficiency);

		expect(og.toFixed(3)).toBe(ogExpected.toFixed(3));
	});

	it('Large Volume', () => {
		const gravityPoints = 720;
		const volume = 10;
		const mashEfficiency = 80;
		const ogExpected = 1.058;
		const og = originalGravity(gravityPoints, volume, mashEfficiency);

		expect(og.toFixed(3)).toBe(ogExpected.toFixed(3));
	});
});