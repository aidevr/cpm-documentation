# Contributing to CPM Documentation

Thank you for your interest in contributing to the CPM Documentation! This document provides guidelines and information about contributing to this project.

## 🤝 How to Contribute

### Reporting Issues

- Use the [GitHub Issues](https://github.com/aidevr/cpm-documentation/issues) to report bugs or suggest improvements
- Before creating a new issue, please check if a similar issue already exists
- Provide clear and detailed information about the issue

### Suggesting Enhancements

- Use [GitHub Discussions](https://github.com/aidevr/cpm-documentation/discussions) for feature requests and general discussions
- Clearly describe the enhancement and its benefits
- Provide examples or mockups if applicable

### Contributing Code

1. **Fork the Repository**
   ```bash
   git clone https://github.com/aidevr/cpm-documentation.git
   cd cpm-documentation
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Follow the existing code style and conventions
   - Write clear and concise commit messages
   - Test your changes locally

4. **Test Your Changes**
   ```bash
   yarn start  # Test in development mode
   yarn build  # Test the build process
   ```

5. **Submit a Pull Request**
   - Push your branch to your forked repository
   - Create a pull request against the `main` branch
   - Provide a clear description of your changes

## 📝 Writing Guidelines

### Documentation

- Use clear, concise language
- Include examples where appropriate
- Follow the existing documentation structure
- Use proper Markdown formatting

### Code Style

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

### Commit Messages

- Use descriptive commit messages
- Start with a verb in present tense (e.g., "Add", "Fix", "Update")
- Keep the first line under 50 characters
- Include more details in the body if necessary

Example:
```
Add new tutorial for KPI management

- Include step-by-step instructions
- Add screenshots for better understanding
- Update navigation sidebar
```

## 🏗️ Development Setup

### Prerequisites

- Node.js (version 18 or higher)
- Yarn package manager

### Local Development

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build

# Serve built files locally
yarn serve
```

### Project Structure

```
cpm-documentation/
├── docs/                 # Documentation content
│   ├── intro.md         # Introduction page
│   ├── tutorial-basics/ # Basic tutorials
│   └── tutorial-extras/ # Advanced topics
├── blog/                # Blog posts
├── src/                 # Custom components and styles
│   ├── components/      # React components
│   └── css/            # CSS files
├── static/             # Static assets
└── docusaurus.config.js # Configuration
```

## 🎨 Styling Guidelines

- Use CSS modules for component-specific styles
- Follow the existing color scheme and typography
- Ensure responsive design for mobile devices
- Use semantic HTML elements

## 📱 Responsive Design

- Test on different screen sizes
- Use CSS Grid and Flexbox for layouts
- Ensure touch-friendly interface on mobile
- Optimize images for different resolutions

## 🧪 Testing

- Test all new features and changes
- Ensure documentation builds successfully
- Verify links and navigation work correctly
- Check for accessibility compliance

## 📋 Pull Request Checklist

Before submitting a pull request, ensure:

- [ ] Code follows the project's style guidelines
- [ ] Documentation has been updated (if applicable)
- [ ] Changes have been tested locally
- [ ] Commit messages are clear and descriptive
- [ ] No merge conflicts exist
- [ ] All checks pass

## 🚀 Deployment

The documentation is automatically deployed to GitHub Pages when changes are merged to the `main` branch. No manual deployment is required.

## 🤔 Questions?

If you have questions about contributing, feel free to:
- Open a [discussion](https://github.com/aidevr/cpm-documentation/discussions)
- Create an [issue](https://github.com/aidevr/cpm-documentation/issues)

Thank you for contributing to CPM Documentation! 🎉
