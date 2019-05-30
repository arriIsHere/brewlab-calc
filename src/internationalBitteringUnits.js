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


export default function internationalBitteringUnits(alphaAcids, boilTime, weight) {
    let utilization = utilizationTable[13];
    if(boilTime <= 60) {
        utilization = utilizationTable[Math.floor(boilTime / 5)]
    }
    const ibu = weight * alphaAcids * utilization / 7.25;
    return ibu;
}