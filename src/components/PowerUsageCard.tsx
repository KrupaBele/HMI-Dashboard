import { TrendingDown } from "lucide-react";

const PowerUsageCard = () => {
  const data = [
    { time: "9AM", value: 8 },
    { time: "12PM", value: 15 },
    { time: "3PM", value: 10 },
    { time: "6PM", value: 12 },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="bg-white/45 backdrop-blur-20 rounded-2xl p-4 shadow-xl h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className=" text-white font-medium text-sm">Power Usage</h3>
      </div>

      <div className="mb-3">
        <div
          className="text-3xl font-light text-white  "
          style={{ fontWeight: 500 }}
        >
          12.5 <span className=" text-white text-xl">kWh</span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative flex-1 flex items-end justify-between gap-2 mb-2">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="border-t border-gray-200/50" />
          ))}
        </div>

        {/* Bars */}
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center gap-1 relative z-10"
          >
            <div
              className="w-full bg-gradient-to-t from-blue-400 to-blue-200 rounded-t-lg"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            ></div>
            <span className="text-xs text-white">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerUsageCard;
