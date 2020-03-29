/**
 * Provides the final gravity of a beer given the initial
 * brix and the final brix measured.
 * @param {Number} ogBrix the original gravity as refractometer brix
 * @param {Number} fgBrix the final gravity as refractometer brix
 */
export default function brixToFinalGravity(ogBrix, fgBrix) {

	// This formula was derived by Sean Terrill (http://seanterill.com/2011/04/07/refractometer-fg-results/)
	return 1.0000 - 0.0044993*ogBrix + 0.011774*fgBrix 
        + 0.00027581*ogBrix ** 2 - 0.0012717*fgBrix ** 2 
        - 0.0000072800*ogBrix ** 3 + 0.000063293*fgBrix ** 3;
}