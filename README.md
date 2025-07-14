# RiverSweeps Casino Game

A modern React-based casino gaming application featuring slot machines, interactive gameplay, and stunning graphics powered by PIXI.js.

![RiverSweeps Casino](https://img.shields.io/badge/React-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.5.5-blue.svg)
![PIXI.js](https://img.shields.io/badge/PIXI.js-6.2.2-green.svg)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple.svg)

## 🎰 Features

- **Modern Casino Games**: Interactive slot machines with realistic animations
- **High-Quality Graphics**: PIXI.js powered gaming engine for smooth performance
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Gameplay**: Dynamic game states and interactive features
- **Custom Audio**: Immersive sound effects and background music
- **Progressive Features**: Advanced gaming mechanics and bonus rounds

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/riversweeps-casino.git
   cd riversweeps-casino
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3001` to see the application.

## 🛠️ Scripts

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Alternative start command
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## 🏗️ Project Structure

```
riversweeps-casino/
├── public/                 # Static assets
│   ├── images/            # Game graphics and UI images
│   │   └── frenzy/        # Slot machine assets
│   ├── audio/             # Sound effects and music
│   └── favicon.ico        # Site icon
├── src/                   # Source code
│   ├── components/        # React components
│   ├── assets/           # Fonts and styles
│   ├── App.tsx           # Main application component
│   ├── index.tsx         # Application entry point
│   ├── Preloader.tsx     # Game preloader
│   ├── Watermark.tsx     # Watermark component
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # Project documentation
```

## 🎮 Technology Stack

- **Frontend Framework**: React 18.2.0 with TypeScript
- **Build Tools**: Vite 7.0.4 (modern) + Create React App (legacy support)
- **Graphics Engine**: PIXI.js 6.2.2 for high-performance 2D graphics
- **Styling**: CSS3 with custom animations and responsive design
- **Audio**: Web Audio API for immersive sound experience
- **State Management**: React Hooks and Context API

## 🎨 Game Features

### Slot Machine Games
- Multiple themed slot machines with unique graphics
- Animated reels with smooth spinning mechanics
- Winning combinations detection and payouts
- Progressive jackpots and bonus features
- Interactive bonus rounds and mini-games

### Visual Effects
- PIXI.js powered particle systems for celebrations
- Smooth transitions and micro-animations
- Dynamic lighting and glow effects
- Responsive UI with mobile-first design

### Audio System
- Background music with volume controls
- Sound effects for all user interactions
- Audio feedback for wins, losses, and bonuses
- Configurable audio settings and mute options

## 🚀 Deployment Options

### Development Server
```bash
# Using Vite (recommended)
npm run dev

# Using legacy Create React App
npm start
```

### Production Build
```bash
npm run build
# Creates optimized build in dist/ or build/ folder
```

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the build folder to GitHub Pages
3. Configure repository settings for Pages deployment

### Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist` (for Vite) or `build` (for CRA)

## 🔧 Configuration & Setup

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_URL=your_api_url_here
VITE_GAME_VERSION=1.0.0
REACT_APP_API_URL=your_api_url_here
```

### Dependencies Installation
```bash
# Install with legacy peer deps for compatibility
npm install --legacy-peer-deps

# Or using yarn
yarn install
```

### Vite Configuration
Modern build configuration in `vite.config.ts`:
- React plugin for JSX/TSX support
- Path resolution and aliases
- Development server settings
- Build optimization

## 🎯 Game Instructions

1. **Starting the Game**: Click anywhere to begin
2. **Slot Machine**: Use spin buttons to play
3. **Betting**: Adjust bet amounts before spinning
4. **Winning**: Match symbols for payouts
5. **Bonuses**: Trigger special features for bigger wins

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Troubleshooting

### Common Issues

**Port conflicts**: If port 3000 is occupied, the app will automatically use port 3001
```bash
npx vite --port 3001
```

**Dependency issues**: Use legacy peer deps flag
```bash
npm install --legacy-peer-deps
```

**Build errors**: Ensure all dependencies are installed
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

## 📞 Support

For issues and questions:
1. Check existing [Issues](https://github.com/yourusername/riversweeps-casino/issues)
2. Create new issue with detailed description
3. Include browser console errors if applicable

---

**🎰 Ready to play? Star this repository and enjoy the casino experience!**

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
