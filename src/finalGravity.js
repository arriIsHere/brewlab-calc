export default function finalGravity(originalGravity, attenuation) {
    //assume attenuation of 75%
    const attenuationFraction = attenuation / 100;
    const originalGravityPoints = originalGravity * 1000 - 1000;
    const finalGravityPoints = originalGravityPoints - originalGravityPoints * attenuationFraction;
    return finalGravityPoints / 1000 + 1;
}