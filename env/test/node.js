'use strict';

import assert from 'assert';
import path from 'path';
import Uri from '../../src/Uri';
import url from 'url';

Uri.setParseFn(function(urlStr) {
	let parsed = url.parse(urlStr);
	parsed.pathname = path.normalize(parsed.pathname);
	return parsed;
});

global.assert = assert;
