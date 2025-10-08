import {
  Home,
  Lightbulb,
  Sun,
  Thermometer,
  Shield,
  Wifi,
  Settings,
} from "lucide-react";

interface SidebarProps {
  currentView?: string;
  onNavigate?: (view: string) => void;
}

const Sidebar = ({ currentView = "dashboard", onNavigate }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: "Home", view: "dashboard" },
    { icon: Lightbulb, label: "Lighting", view: "lighting" },
    { icon: Sun, label: "Climate", view: "climate" },
    { icon: Thermometer, label: "Temp", view: "temp" },
    { icon: Shield, label: "Security", view: "security" },
    { icon: Wifi, label: "Network", view: "network" },
    { icon: Settings, label: "Settings", view: "settings" },
  ];

  return (
    <div className="relative z-20 w-20 flex flex-col items-center justify-center py-6">
      {/* Menu Items */}
      <div className="flex flex-col gap-3 items-center">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onNavigate?.(item.view)}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 shadow-lg ${
              currentView === item.view
                ? "bg-white text-gray-700"
                : "bg-white/80 text-gray-500 hover:bg-white hover:text-gray-700"
            }`}
          >
            <item.icon size={20} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
