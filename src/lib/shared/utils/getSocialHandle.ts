function getSocialHandle(url, domain) {
	if (!url) return null;

	try {
		const parsed = new URL(url);
		if (!parsed.hostname.includes(domain)) return null;

		const handle = parsed.pathname.replace(/^\/|\/$/g, '');
		return handle || null;
	} catch (e) {
		return null;
	}
}

export default getSocialHandle;
