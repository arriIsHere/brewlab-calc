/**
 * Calculates the original gravity (e.x. 1.050) given the gravity points, 
 * volume, and efficiency.
 * @param {number} gravityPoints The total number of gravity points from all
 * the grains, extract, and adjuncts. Please note that this is gravity points
 * and not a gravity value. For example 1.050 would not be correct but 50 would be.
 * @param {number} volume Volume of the batch in gallons.
 * @param {number} mashEfficiency Percentage efficiency of the total brewhouse efficiency.
 * For extract brewing use 100.
 */
function originalGravity(gravityPoints, volume, mashEfficiency = 80) {
    const efficiencyFraction = mashEfficiency / 100;
    const brewhouseGravityPoints = gravityPoints * efficiencyFraction; 
    const volumeGravityPoints = brewhouseGravityPoints / volume;

    return volumeGravityPoints / 1000 + 1;
}

export default originalGravity;