# Contributing to RiverSweeps Casino

Thank you for your interest in contributing to RiverSweeps Casino! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Setup Development Environment

1. **Fork the repository**
   - Click the "Fork" button on GitHub
   - Clone your fork locally

2. **Clone and setup**
   ```bash
   git clone https://github.com/yourusername/riversweeps-casino.git
   cd riversweeps-casino
   npm install --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## 📋 How to Contribute

### Reporting Bugs
1. Check existing issues first
2. Create a new issue with:
   - Clear bug description
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/OS information
   - Screenshots if applicable

### Suggesting Features
1. Check existing feature requests
2. Create a new issue with:
   - Clear feature description
   - Use case explanation
   - Mockups/wireframes if applicable

### Code Contributions

#### Before You Start
1. Check existing issues and pull requests
2. Comment on the issue you want to work on
3. Wait for maintainer approval

#### Development Workflow
1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow coding standards
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   npm run test
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing new feature"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 🎨 Coding Standards

### TypeScript/React Guidelines
- Use TypeScript for all new code
- Follow React functional component patterns
- Use hooks instead of class components
- Implement proper prop types

### File Organization
```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
└── assets/        # Static assets
```

### Naming Conventions
- **Components**: PascalCase (`GameComponent.tsx`)
- **Hooks**: camelCase with "use" prefix (`useGameState.ts`)
- **Utils**: camelCase (`formatCurrency.ts`)
- **Types**: PascalCase (`GameState.ts`)

### Code Style
- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Use meaningful variable names
- Add comments for complex logic

## 🎮 Game Development Guidelines

### PIXI.js Components
- Create reusable PIXI components
- Dispose of resources properly
- Use object pooling for performance
- Follow PIXI best practices

### Audio Implementation
- Preload audio assets
- Implement volume controls
- Handle audio permissions
- Provide fallbacks for unsupported formats

### Animation Standards
- Use requestAnimationFrame
- Implement easing functions
- Optimize for 60fps
- Test on mobile devices

## 🧪 Testing

### Running Tests
```bash
npm run test
```

### Test Guidelines
- Write unit tests for utilities
- Test React components with React Testing Library
- Test game logic thoroughly
- Add integration tests for critical flows

## 📝 Documentation

### Code Documentation
- Document complex functions
- Use JSDoc for public APIs
- Include usage examples
- Keep README updated

### Commit Messages
Follow conventional commit format:
```
type(scope): description

Examples:
feat(slots): add new bonus round
fix(audio): resolve volume control issue
docs(readme): update installation steps
```

## 🔍 Code Review Process

### For Contributors
- Keep PRs focused and small
- Provide clear PR description
- Respond to feedback promptly
- Update based on review comments

### Review Criteria
- Code quality and style
- Performance impact
- Security considerations
- Documentation completeness
- Test coverage

## 🚀 Release Process

### Version Numbering
We follow [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backwards compatible)
- **PATCH**: Bug fixes

### Release Steps
1. Update version in package.json
2. Update CHANGELOG.md
3. Create release tag
4. Deploy to production

## 📞 Getting Help

### Communication Channels
- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Email**: your.email@example.com

### Response Times
- Issues: Within 2-3 business days
- Pull Requests: Within 1 week
- Security issues: Within 24 hours

## 📄 License

By contributing to RiverSweeps Casino, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to RiverSweeps Casino! 🎰
