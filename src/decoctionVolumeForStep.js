/**
 * will calculate the approximate volume to be collected
 * for a decoction in order to increase the mash temperature 
 * to the target temperature.
 * @param {number} startingTemperature starting temperature of the mash in degrees fahrenheit
 * @param {number} targetTemperature temperature to raise the mash to in degrees fahrenheit
 * @param {number} mashVolume volume of the mash (including grains and strike water).
 * @param {number} boilingPoint for the elivation being brewed at, the boiling point of water, defaults to 212.
 * @returns {number}
 */
export default function decoctionVolumeForStep(startingTemperature, targetTemperature, mashVolume, boilingPoint = 212) {
	const temperatureDelta = targetTemperature - startingTemperature;
	const boilingDelta = boilingPoint - startingTemperature;

	return temperatureDelta / boilingDelta * mashVolume;
}