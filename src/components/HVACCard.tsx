import { Power, Droplets, Fan, Thermometer } from "lucide-react";

const HVACCard = () => {
  const currentTemp = 27;
  const targetTemp = 22;
  const interiorTemp = 27;
  const percentage = ((currentTemp - 15) / (35 - 15)) * 100;

  return (
    <div className="bg-white/45 backdrop-blur-20 rounded-2xl p-4 shadow-xl h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-gray-700 font-medium text-sm">HVAC Status</h3>
      </div>

      {/* Temperature Gauge */}
      <div className="relative w-32 h-32 mx-auto mb-3">
        {/* Background Circle */}
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Progress Circle */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray={`${(percentage / 100) * 502} 502`}
            className="transition-all duration-500"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
        </svg>

        {/* Temperature Display */}
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="text-3xl font-light text-gray-900">
            {currentTemp}°C
          </div>
        </div>
      </div>

      {/* Temperature Info */}
      <div className="flex items-center justify-center gap-3 mb-3 text-xs text-gray-600">
        <span>Interior at {interiorTemp}°C</span>
        <span className="flex items-center gap-1">→ Target {targetTemp}°C</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2">
        <button className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors">
          <Droplets size={16} className="text-gray-600" />
        </button>
        <button className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors">
          <span className="text-gray-600 text-xs font-medium">%</span>
        </button>
        <button className="w-9 h-9 bg-blue-500 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
          <Power size={16} className="text-white" />
        </button>
        <button className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors">
          <Fan size={16} className="text-gray-600" />
        </button>
        <button className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors">
          <Thermometer size={16} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default HVACCard;
