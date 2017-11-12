'use strict';

import parse from '../src/parse';

describe('parse', function() {
	it('should parse url into an object', function() {
		let uri = parse('http://hostname:8080/ignore?a=1#hash');
		assert.strictEqual('#hash', uri.hash);
		assert.strictEqual('hostname', uri.hostname);
		assert.strictEqual('/ignore', uri.pathname);
		assert.strictEqual('8080', uri.port);
		assert.strictEqual('http:', uri.protocol);
		assert.strictEqual('?a=1', uri.search);
	});

	it('should throw a TypeError exception if the port number exceeds 65535', function() {
		assert.throws(function() {
			parse('http://localhost:99999');
		}, TypeError);
	});
});
