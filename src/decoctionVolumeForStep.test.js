import decoctionVolumeForStep from './decoctionVolumeForStep';

describe('Decoction Volume for Step unit test', () => {
	it.each([
		[70, 105, 5.65, 1.4],
		[105, 122, 5.65, 0.85],
		[122, 150, 5.65, 1.76],
		[150, 170, 5.65, 1.8],
	])('(%s, %s) => %s', (startTemperature, targetTemperature, mashVolume, expectedVolume) => {
		const measuredTemperature = decoctionVolumeForStep(startTemperature, targetTemperature, mashVolume);

		expect(measuredTemperature).toBe(expectedVolume);
	});
});