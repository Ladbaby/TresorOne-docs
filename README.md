# 📚 TresorOne Documentation

User guide for [TresorOne](https://github.com/ladbaby/TresorOne) — a cross-platform Flutter client for the [Tresor](https://github.com/ladbaby/Tresor) LLM gateway.

Built with [Docusaurus](https://docusaurus.io/). Deployed to [GitHub Pages](https://ladbaby.github.io/TresorOne-docs/).

## 🛠️ Local Development

```bash
# Install dependencies (first time only)
npm install

# Start development server with hot reload
npm start

# Build for production
npm run build

# Serve the built site locally
npm run serve
```

## 📁 Project Structure

```
├── docs-content/        # MDX documentation source files
│   └── user/            # User-facing documentation
│       ├── getting-started/
│       ├── reference/
│       └── reference/
├── src/                 # Custom CSS, homepage
├── static/              # Images, favicon
├── docusaurus.config.ts # Site configuration
├── sidebars.ts          # Sidebar definitions
└── .github/workflows/   # CI deployment
```

## ✏️ Editing Docs

Docs use MDX format. Internal links should use **relative paths** (e.g., `docs/user/reference/settings`) — Docusaurus automatically prepends the `baseUrl`.

Style conventions:

- YAML frontmatter with `title` + `description` fields only
- `#` for page title and `##` for major sections, emoji-prefixed
- `:::tip` / `:::info` / `:::warning` blockquote callouts
- `<Tabs>` + `<TabItem>` for OS-specific code paths
- Markdown tables for field references and feature matrices
