import { useState, useEffect, useRef } from 'react';
import { Power } from 'lucide-react';

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState('Green');
  const [isRunning, setIsRunning] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  const lights = [
    { color: 'Green', duration: 2000 },
    { color: 'Yellow', duration: 500 },
    { color: 'Red', duration: 2000 }
  ];

  useEffect(() => {
    if (!isRunning) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      return;
    }

    const currentIndex = lights.findIndex(l => l.color === currentLight);
    const nextIndex = (currentIndex + 1) % lights.length;
    const currentDuration = lights[currentIndex].duration;

    timeoutRef.current = setTimeout(() => {
      setCurrentLight(lights[nextIndex].color);
    }, currentDuration);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentLight, isRunning]);

  const toggleTrafficLight = () => {
    setIsRunning(!isRunning);
  };

  const getLightStyle = (color: string) => {
    const isActive = currentLight === color && isRunning;
    const baseClasses = "w-24 h-24 rounded-full transition-all duration-300";
    
    if (color === 'Red') {
      return `${baseClasses} ${isActive ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-red-900/30'}`;
    } else if (color === 'Yellow') {
      return `${baseClasses} ${isActive ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50' : 'bg-yellow-900/30'}`;
    } else {
      return `${baseClasses} ${isActive ? 'bg-green-500 shadow-lg shadow-green-500/50' : 'bg-green-900/30'}`;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Traffic Light Simulator</h1>
        <p className="text-gray-400 text-center">
          Status: <span className={isRunning ? 'text-green-400' : 'text-red-400'}>
            {isRunning ? 'Running' : 'Stopped'}
          </span>
        </p>
      </div>

      <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl mb-8">
        <div className="flex flex-col gap-6 items-center">
          <div className={getLightStyle('Red')} />
          <div className={getLightStyle('Yellow')} />
          <div className={getLightStyle('Green')} />
        </div>
      </div>

      <button
        onClick={toggleTrafficLight}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
          isRunning 
            ? 'bg-red-600 hover:bg-red-700' 
            : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        <Power size={20} />
        {isRunning ? 'Stop Traffic Light' : 'Start Traffic Light'}
      </button>

      {!isRunning && (
        <p className="text-gray-500 mt-4 text-sm">
          Current light: {currentLight}
        </p>
      )}
    </div>
  );
};

export default TrafficLight;