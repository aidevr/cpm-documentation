# CPM Documentation

[![Deploy to GitHub Pages](https://github.com/aidevr/cpm-documentation/actions/workflows/deploy.yml/badge.svg)](https://github.com/aidevr/cpm-documentation/actions/workflows/deploy.yml)

This repository contains the documentation for the **Continuous Performance Management (CPM) System** - a comprehensive solution for streamlining and automating employee appraisal processes.

## 🚀 Live Documentation

Visit the live documentation at: [https://aidevr.github.io/cpm-documentation/](https://aidevr.github.io/cpm-documentation/)

## 📚 About CPM

The CPM System is designed to:
- **Automate** manual appraisal processes
- **Improve transparency** in employee evaluations
- **Enable data-driven decision making** for HR
- **Provide actionable insights** for managers
- **Foster accountability** and growth culture

## 🛠️ Built With

This documentation website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## 🏗️ Local Development

### Prerequisites

- Node.js (version 18 or higher)
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/aidevr/cpm-documentation.git
cd cpm-documentation

# Install dependencies
yarn install
```

### Local Development

```bash
# Start development server
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
# Build for production
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## 🚀 Deployment

The documentation is automatically deployed to GitHub Pages when changes are pushed to the `main` branch using GitHub Actions.

### Manual Deployment

If you need to deploy manually:

```bash
# Deploy to GitHub Pages
GIT_USER=<Your_GitHub_username> yarn deploy
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📖 Documentation Structure

- `/docs/` - Main documentation content
  - `intro.md` - Introduction and overview
  - `Product Factory/` - Product development specific guides
- `/blog/` - Blog posts and updates
- `/src/` - Custom React components and styles
- `/static/` - Static assets (images, files, etc.)

## 🎨 Customization

- **Styling**: Modify `/src/css/custom.css` for global styles
- **Components**: Add custom React components in `/src/components/`
- **Configuration**: Update `docusaurus.config.js` for site configuration

## 📧 Support

For questions or support:
- Open an [issue](https://github.com/aidevr/cpm-documentation/issues)
- Start a [discussion](https://github.com/aidevr/cpm-documentation/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using [Docusaurus](https://docusaurus.io/)**
