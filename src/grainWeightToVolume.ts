/**
 * Estimates the volume of the grain using the weight provided.
 * @param {number} grainWeight Grain weight in American pounds (e.g. 10.5)
 * @returns {number} Estimated volume based on the weight in American Gallons.
 */
export default function grainWeightToVolume(grainWeight : number) : number {
	return Number((grainWeight * 0.28).toFixed(3));
}