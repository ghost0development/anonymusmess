export function formatPeerId(id) {
	return id.slice(0, 8) + '...' + id.slice(-4);
}

export function generatePeerId() {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function copyToClipboard(text) {
	navigator.clipboard.writeText(text);
}