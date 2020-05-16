import fs from 'fs-extra';
import path from 'path';
import * as index from './index';

describe('Test for All imports', () => {
	it('all named files imported in index', async () => {
		const files = await fs.readdir(__dirname);

		const functionFiles = files.filter(
			file => !file.endsWith('.test.ts') && !file.includes('index.ts')
		).map(file => path.basename(file, '.ts'));

		const indexRequireNames = Object.keys(index);

		expect(indexRequireNames).toEqual(expect.arrayContaining(functionFiles));
	});
});