
const srmToRgbTable= [
	'#FFE699',
	'#FFD878',
	'#FFCA5A',
	'#FFBF42',
	'#FBB123',
	'#F8A600',
	'#F39C00',
	'#EA8F00',
	'#E58500',
	'#DE7C00',
	'#D77200',
	'#CF6900',
	'#CB6200',
	'#C35900',
	'#BB5100',
	'#B54C00',
	'#B04500',
	'#A63E00',
	'#A13700',
	'#9B3200',
	'#952D00',
	'#8E2900',
	'#882300',
	'#821E00',
	'#7B1A00',
	'#771900',
	'#701400',
	'#6A0E00',
	'#660D00',
	'#5E0B00',
	'#5A0A02',
	'#600903',
	'#520907',
	'#4C0505',
	'#470606',
	'#440607',
	'#3F0708',
	'#3B0607',
	'#3A070B',
	'#36080A',
];

/**
 * 
 * @param {number} srm the SRM value to be converted to 
 * an hex color string i.e. #000000
 */
export default function srmToColor(srm) {
	// Round
	const trueSRM = srm.toFixed(0);

	return srmToRgbTable[trueSRM];
}