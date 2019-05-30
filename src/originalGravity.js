export default function originalGravity(gravityPoints, volume, mashEfficiency) {
    const efficiencyFraction = mashEfficiency / 100;
    const brewhouseGravityPoints = gravityPoints * efficiencyFraction; 
    const volumeGravityPoints = brewhouseGravityPoints / volume;

    return volumeGravityPoints / 1000 + 1;
}