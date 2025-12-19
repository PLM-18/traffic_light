# Traffic Light Simulator

A interactive traffic light simulator built with modern web technologies. This project demonstrates state management, effects, and component-based architecture using React.

## Technologies

![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-blue?style=flat-square&logo=tailwindcss)

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start on `http://localhost:5173`

### Build

```bash
npm run build
```

## How It Works

The Traffic Light Simulator uses React hooks to manage:
- **useState**: Track current light color and running state
- **useEffect**: Handle timing logic for light transitions
- **useRef**: Maintain reference to timeout for cleanup

The component cycles through three lights:
1. **Green** - 2 seconds (Go)
2. **Yellow** - 0.5 seconds (Caution)
3. **Red** - 2 seconds (Stop)

