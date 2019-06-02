/**
 * Provides the temperature of the water to be added to a mash to achieve an 
 * initial infusion temperature. This will not do calculations for subsequent
 * infusions.
 * @param {number} waterGrainRatio The ratio of water to grains in qts to lbs.
 * for example 1.5 on a batch of 10lb of grain means that you intend to add 
 * 15 qts (3.75 gallons) of water to the mash with the grains.
 * @param {number} targetTemperature Intended temperature (in degrees 
 * fahrenheit) of mash after initial infusion.
 * infusion.
 * @param {number} grainTemperature The temperature of the grains (in degrees 
 * fahrenheit) that will be added to the mash. If none are supplied it will
 * default to room temperature (72 F).
 */
export default (
    waterGrainRatio, 
    targetTemperature, 
    grainTemperature = 72,
) => {
    const constantOverRatio = 0.2 / waterGrainRatio;
    const temperatureDelta = targetTemperature - grainTemperature;
    const infusionTemperature = constantOverRatio * temperatureDelta + targetTemperature;

    return infusionTemperature;
}