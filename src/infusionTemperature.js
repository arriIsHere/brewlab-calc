export default function infusionTemperature(
    waterGrainRatio, 
    targetTemperature, 
    grainTemperature,
) {
    const constantOverRatio = 0.2 / waterGrainRatio;
    const temperatureDelta = targetTemperature - grainTemperature;
    const infusionTemperature = constantOverRatio * temperatureDelta + targetTemperature;

    return infusionTemperature;
}