'use strict';

/**
 * Extracts the port for a given uri. This function helps to support for
 * Safari 5, that returns '0' when the port is not present in the URI string.
 * @param {*=} opt_uri Optional string URI to parse
 */
function extractPortFromURI(uri) {
	let port = parseInt(uri.split(':').pop());
	if (isNaN(port)) {
		return '';
	}
	return port.toString()
}

/**
 * Parses the given uri string into an object.
 * @param {*=} opt_uri Optional string URI to parse
 */
function parseFromAnchor(opt_uri) {
	var link = document.createElement('a');
	link.href = opt_uri;
	return {
		hash: link.hash,
		hostname: link.hostname,
		password: link.password,
		pathname: link.pathname[0] === '/' ? link.pathname : '/' + link.pathname,
		port: extractPortFromURI(opt_uri),
		protocol: link.protocol,
		search: link.search,
		username: link.username
	};
}

export default parseFromAnchor;
