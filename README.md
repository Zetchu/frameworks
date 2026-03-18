# Frontend Frameworks - React + TypeScript + Vite

This project is a React application built with TypeScript and Vite. It serves as a modern frontend playground featuring a simple counter component, automated testing with Vitest, and a polished UI.

## Features

- **React 19**: Utilizing the latest React features for efficient UI rendering.
- **TypeScript**: Ensuring type safety and enhanced developer experience.
- **Vite**: Offering a blazing fast development server and optimized build process.
- **Vitest**: Running unit tests with speed and accuracy, compatible with Vite.
- **Modern Styling**: Using CSS variables and responsive design principles for a clean look.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1.  Clone the repository.
2.  Install dependencies:

    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder. It bundles React in production mode and optimizes the build for best performance.

### `npm run preview`

Locally preview the production build.

### `npm run lint`

Runs ESLint to check for code quality issues.

### `npm test`

Launches Vitest to run component tests.

## Project Structure

- `src/App.tsx`: The main component containing the counter logic and UI.
- `src/App.css`: Styles for the App component.
- `src/App.test.tsx`: Component tests for App, verifying rendering and interactions.
- `vite.config.ts`: Configuration for Vite and Vitest.

## Recent Updates

- **UI Enhancements**: Buttons are now grouped in a row layout with improved styling (padding, borders, hover effects).
- **Testing Integration**: Added `vitest` and `@testing-library/react` for robust component testing. The App component is fully tested for initial render, increment, and decrement actions.
