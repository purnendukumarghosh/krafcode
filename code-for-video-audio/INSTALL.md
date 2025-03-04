# Installation Guide for CodeCraft IDE

This guide provides detailed instructions for setting up the CodeCraft IDE project on different operating systems.

## Prerequisites

Before installing the project, ensure you have the following installed:

- **Node.js** (v18.x or higher)
- **npm** (v9.x or higher, comes with Node.js)

## Installation Steps

### Windows

1. **Install Node.js and npm**:
   - Download the installer from [Node.js official website](https://nodejs.org/)
   - Run the installer and follow the installation wizard
   - Verify installation by opening Command Prompt and running:
     ```
     node --version
     npm --version
     ```

2. **Clone or download the project**:
   - If using Git: `git clone <repository-url>`
   - Or download and extract the ZIP file

3. **Install dependencies**:
   - Open Command Prompt
   - Navigate to the project directory: `cd path\to\codecraft-ide`
   - Run: `npm install`

4. **Start the development server**:
   - Run: `npm run dev`
   - Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

### macOS

1. **Install Node.js and npm**:
   - Download the installer from [Node.js official website](https://nodejs.org/)
   - Run the installer and follow the installation wizard
   - Alternatively, use Homebrew: `brew install node`
   - Verify installation by opening Terminal and running:
     ```
     node --version
     npm --version
     ```

2. **Clone or download the project**:
   - If using Git: `git clone <repository-url>`
   - Or download and extract the ZIP file

3. **Install dependencies**:
   - Open Terminal
   - Navigate to the project directory: `cd path/to/codecraft-ide`
   - Run: `npm install`

4. **Start the development server**:
   - Run: `npm run dev`
   - Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

### Linux

1. **Install Node.js and npm**:
   - Using apt (Ubuntu/Debian):
     ```
     sudo apt update
     sudo apt install nodejs npm
     ```
   - Using dnf (Fedora):
     ```
     sudo dnf install nodejs
     ```
   - Verify installation:
     ```
     node --version
     npm --version
     ```

2. **Clone or download the project**:
   - If using Git: `git clone <repository-url>`
   - Or download and extract the ZIP file

3. **Install dependencies**:
   - Open Terminal
   - Navigate to the project directory: `cd path/to/codecraft-ide`
   - Run: `npm install`

4. **Start the development server**:
   - Run: `npm run dev`
   - Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

## Troubleshooting

### Common Issues

1. **Node.js version is too old**:
   - Error: "The engine "node" is incompatible with this module"
   - Solution: Update Node.js to a newer version

2. **Port already in use**:
   - Error: "Port 5173 is already in use"
   - Solution: Close other applications that might be using the port or change the port in vite.config.js

3. **Dependencies installation fails**:
   - Try clearing npm cache: `npm cache clean --force`
   - Try installing with the force flag: `npm install --force`

4. **Monaco Editor not loading**:
   - Check browser console for errors
   - Ensure all dependencies are correctly installed
   - Try using a different browser

## Building for Production

To create a production build:

```
npm run build
```

This will generate optimized files in the `dist` directory that can be deployed to any static hosting service.