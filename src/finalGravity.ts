/**
 * Calculates the final gravity as specific gravity using the estimated yest
 * attenuation and the original (specific) gravity.
 * @param {number} originalGravity Starting specific gravity.(e.x. 1.051)
 * @param {number} attenuation estimated yeast attenuation (e.x. 75%)
 * @returns {number} final gravity as specific gravity
 */
export default function finalGravity(originalGravity : number, attenuation : number) : number {
	//assume attenuation of 75%
	const attenuationFraction = attenuation / 100;
	const originalGravityPoints = originalGravity * 1000 - 1000;
	const finalGravityPoints = originalGravityPoints - originalGravityPoints * attenuationFraction;

	return finalGravityPoints / 1000 + 1;
}