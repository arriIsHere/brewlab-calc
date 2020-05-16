import fs from 'fs-extra';
import path from 'path';
import * as index from './index';

const extension = process.env.NODE_ENV === 'ci' ? 'js' : 'ts';

describe('Test for All imports', () => {
	it('all named files imported in index', async () => {
		const files = await fs.readdir(__dirname);

		const functionFiles = files.filter(
			file => !file.endsWith(`.test.${extension}`) && !file.includes(`index.${extension}`) && !file.endsWith('.d.ts')
		).map(file => path.basename(file, `.${extension}`));

		const indexRequireNames = Object.keys(index);

		expect(indexRequireNames).toEqual(expect.arrayContaining(functionFiles));
	});
});