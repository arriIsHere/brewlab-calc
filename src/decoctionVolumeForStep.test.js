import decoctionVolumeForStep from './decoctionVolumeForStep';

describe('Decoction Volume for Step unit test', () => {
	it.each([
		[70, 105, 1.4],
		[105, 122, 0.85],
		[122, 150, 1.76],
		[150, 170, 1.8],
	])('(%s, %s) => %s', (startTemperature, targetTemperature, expectedVolume) => {
		const measuredTemperature = decoctionVolumeForStep(startTemperature, targetTemperature);

		expect(measuredTemperature).toBe(expectedVolume);
	});
});