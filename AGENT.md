# P2P Chat Enterprise - Agent Instructions

## Skill Requirements
- **MUST** invoke `find-skills` before any task
- **MUST** load ALL available skills via `skill` tool
- **MUST** use `using-superpowers` for workflow optimization

## Constraints
- **Zero-knowledge**: Explore codebase before assumptions
- **P2P-first**: No centralized servers
- **Stateless**: Independent operations

## Build & Deploy
```bash
npm install
npm run build
# GitHub Pages auto-deploys via workflow
```

## Project Structure
- `src/routes/+page.svelte` - Home auth
- `src/routes/chat/+page.svelte` - P2P Chat  
- `src/routes/premium/+page.svelte` - Premium
- `build/` - Static output for GitHub Pages
