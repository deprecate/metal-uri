'use strict';

import parseFromAnchor from '../src/parseFromAnchor';
const URL = window.URL;

if (typeof URL !== 'undefined') {
	// Skips the tests for this file on node environment.
	describe('parseFromAnchor', function() {
		it('should parse url into object', function() {
			var uri = parseFromAnchor('http://hostname:8080/ignore?a=1#hash');
			assert.ok(!uri.tagName);
			assert.strictEqual('#hash', uri.hash);
			assert.strictEqual('hostname', uri.hostname);
			assert.strictEqual('/ignore', uri.pathname);
			assert.strictEqual('8080', uri.port);
			assert.strictEqual('http:', uri.protocol);
			assert.strictEqual('?a=1', uri.search);
		});
	});
}
