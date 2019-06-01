const utilizationTable = [
    0, 5, 
    6, 8, 
    10.1, 
    12.1, 
    15.3, 
    18.8, 
    22.8, 
    26.9, 
    28.1, 
    30, 
    30,
    31,
];

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
export default function internationalBitteringUnits(
    alphaAcids, 
    boilTime, 
    weight, 
    volume,
) {
    let utilization = utilizationTable[13];
    if(boilTime <= 60) {
        utilization = utilizationTable[Math.floor(boilTime / 5)]
    }
    const ibu = weight * alphaAcids * utilization / 7.25;
    return ibu;
}