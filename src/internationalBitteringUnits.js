/**
 * Estimates the bitterness of the beer based on a hop addition as 
 * International Bittering Units. This is a estimate of bitterness not an 
 * actual measure and the hop addition may yield more or less bitterness
 * than this calculation shows.
 * @param {number} alphaAcids alpha acids as a percentage for this hop addition
 * @param {number} boilTime time in minutes that this hop will be in the boil.
 * for example, a value of 60 means the hops will be in for the entirety of a
 * 60minute boil.
 * @param {number} weight weight in ounces
 * @param {number} volume volume of boil in gallons
 */
export default (
    alphaAcids, 
    boilTime, 
    weight, 
    volume,
) => {
    const boilFactor = (1 - 2.718281828459045235 ** (-0.04 * boilTime)) / 4.15;
    const utilization = 1.0527601683 * boilFactor * 82.39;

    const ibu = alphaAcids * weight * utilization / volume;

    return ibu;
}