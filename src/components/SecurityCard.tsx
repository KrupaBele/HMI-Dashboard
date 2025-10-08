import { Lock } from "lucide-react";

const SecurityCard = () => {
  const events = [
    { title: "Front Door open", time: "9 min ago", icon: Lock },
    { title: "Left Door open", time: "21 min ago", icon: Lock },
    { title: "Back Camera On", time: "45 min ago", icon: Lock },
  ];

  return (
    <div className="bg-white/45 backdrop-blur-20 rounded-2xl p-4 shadow-xl h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-gray-700 font-medium text-sm">Security</h3>
        <button className="text-xs border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-50 transition-colors">
          View all
        </button>
      </div>

      <div className="space-y-2 flex-1">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Lock size={14} className="text-gray-600" />
              </div>
              <div>
                <div className="text-xs font-medium text-gray-900">
                  {event.title}
                </div>
                <div className="text-xs text-gray-500">{event.time}</div>
              </div>
            </div>
            <button className="w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <Lock size={12} className="text-gray-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityCard;
