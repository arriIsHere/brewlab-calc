import grainWeightToVolume from './grainWeightToVolume';

describe('Grain Weight To Volume', () => {
	it('volume (10 lb) => 2.8 gal', () => {
		const calculatedVolume = grainWeightToVolume(10);

		expect(calculatedVolume).toBe(2.8);
	})

	it('volume (9.75 lb) => 2.73 gal', () => {
		const calculatedVolume = grainWeightToVolume(9.75);

		expect(calculatedVolume).toBe(2.73);
	});

	it('volume (20.25 lb) => 5.67', () => {
		const calculatedVolume = grainWeightToVolume(20.25);

		expect(calculatedVolume).toBe(5.67)
	});
})