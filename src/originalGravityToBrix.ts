/**
 * Converts a pre-fermented gravity measurement into brix. 
 * Note: this calculator will only work for unfermented
 * wart.
 * @param {number} og The original gravity measurement (e.g. 1.050)
 * @returns {number} the brix value that represents the provided
 * original gravity. 
 */
export default function originalGravityToBrix(og : number) : number {

	// Og of 1 or less means the brix is 0 
	if(og <= 1) {
		return 0;
	}

	return (((182.4601 * og - 775.6821) * og + 1262.7794) * og - 669.5622);
}