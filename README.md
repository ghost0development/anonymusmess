# P2PChat

Zero-censorship decentralized messenger. Connect directly with any peer - no servers, no middlemen.

## Features

- **P2P WebRTC** - Direct connections via libp2p
- **Zero censorship** - All files, links, content visible
- **Offline-first** - IndexedDB local storage
- **Premium mode** - Unlimited connections, large files
- **Cross-platform** - Works on any device with a browser

## Deploy

```bash
npm run build
npx gh-pages -d build
```

## Usage

1. Open the app
2. Show your peer ID (QR kod) to someone
3. Enter their peer ID to connect
4. Chat freely - no servers store your messages

## Premium

Code: `P2P-PREMIUM-2026`

## Tech Stack

- SvelteKit + TypeScript
- libp2p (WebRTC + WebRTC-Star)
- IndexedDB (Dexie)
- QRCode

## License

MIT - totally open source