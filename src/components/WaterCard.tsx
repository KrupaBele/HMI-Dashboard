import { Droplets, TrendingUp, AlertTriangle } from "lucide-react";

const WaterCard = () => {
  const tankLevels = [
    { color: "bg-blue-400", height: "90%" },
    { color: "bg-blue-400", height: "85%" },
    { color: "bg-blue-400", height: "80%" },
    { color: "bg-blue-300", height: "75%" },
    { color: "bg-blue-300", height: "70%" },
    { color: "bg-blue-200", height: "65%" },
  ];

  return (
    <div className="bg-white/45 backdrop-blur-20 rounded-2xl p-4 shadow-xl h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-gray-700 font-medium text-sm">Water</h3>
      </div>

      <div className="space-y-3 flex-1 flex flex-col">
        {/* Water Status */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 flex-1">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Droplets size={14} className="text-blue-500" />
            </div>
            <div>
              <div className="text-xs font-medium text-gray-900">Fresh</div>
              <div className="text-xs text-gray-500">710</div>
            </div>
          </div>

          <div className="flex items-center gap-1 flex-1">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <Droplets size={14} className="text-gray-500" />
            </div>
            <div>
              <div className="text-xs font-medium text-gray-900">Grey</div>
              <div className="text-xs text-gray-500">570 (high)</div>
            </div>
          </div>

          <div className="flex items-center gap-1 flex-1">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <Droplets size={14} className="text-white" />
            </div>
            <div>
              <div className="text-xs font-medium text-gray-900">Black</div>
              <div className="text-xs text-gray-500">3/10</div>
            </div>
          </div>
        </div>

        {/* Water Tank Visualization */}
        <div className="flex items-center gap-2 p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl ">
          <div className="flex items-center gap-1">
            <TrendingUp size={12} className="text-blue-600" />
            <span className="text-xs font-medium text-gray-700">Water Use</span>
            <span className="text-xs text-gray-500">730</span>
          </div>
          <div className="flex items-end gap-1 ml-2 h-6 flex-1">
            {tankLevels.map((tank, index) => (
              <div key={index} className="flex-1 relative">
                <div
                  className={`${tank.color} rounded-sm transition-all duration-300`}
                  style={{ height: tank.height }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Warning */}
        <div className="flex items-start gap-2 p-2 bg-amber-50 rounded-xl">
          <AlertTriangle size={14} className="text-amber-600 mt-0.5" />
          <div>
            <div className="text-xs font-medium text-gray-900">
              Grey tank's nearly full
            </div>
            <div className="text-xs text-gray-600">Draining automatically</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterCard;
