/**
 * calculates the alcohol by volume based on the original and final gravity
 * @param {number} originalGravity original specific gravity value (1.050 for example)
 * @param {number} finalGravity final specific gravity value (1.015 for example)
 * @returns {number} the percentage alcohol 
 */
export default function alcoholByVolume(originalGravity : number, finalGravity: number): number {
	const gravityDelta = originalGravity - finalGravity;

	return (76.08 * gravityDelta / (1.775-originalGravity)) * (finalGravity / 0.794);
}