# brewlab-calc

[![npm version](https://badge.fury.io/js/%40brewlab%2Fcalc.svg)](https://www.npmjs.com/package/@brewlab/calc)

Library that contains methods for use for calculations used in brewing. You can use it for calculating ABV, Gravity etc.

## Installation

Brewlab calc can be found on NPM

```bash
npm install --save @brewlab/calc
```

## Using libraries

You can import any of the methods of this library.

```javascript
import {finalGravity} from '@brewlab/calc';

const fg = finalGravity(1.050, 75);
```

### Individual functions

If you are trying to reduce bundle size you can import individual functions from
their respective files.

```javascript
import finalGravity from '@brewlab/calc/finalGravity'

const fg = finalGravity(1.050, 75);
```

## Contributing

please refer to [CONTRIBUTING](CONTRIBUTING.md) file for information on making contributions to this library.

