import { useState, useEffect } from "react";
import {
  Home,
  Zap,
  Shield,
  Droplets,
  Wind,
  Wifi,
  Settings,
  MessageCircle,
} from "lucide-react";
import PowerUsageCard from "./components/PowerUsageCard";
import SecurityCard from "./components/SecurityCard";
import WaterCard from "./components/WaterCard";
import HVACCard from "./components/HVACCard";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatAssistant from "./components/ChatAssistant";
import LightingScreen from "./components/LightingScreen";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentView, setCurrentView] = useState<"dashboard" | "lighting">(
    "dashboard"
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (currentView === "lighting") {
    return <LightingScreen onNavigate={setCurrentView} />;
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundPosition: "center 60%",
        }}
      />

      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-screen flex">
        <Sidebar currentView={currentView} onNavigate={setCurrentView} />

        <div className="flex-1 flex flex-col p-4 mx-20">
          {/* Header stays fixed at the top */}
          <Header currentTime={currentTime} />

          {/* Grid vertically centered in remaining space */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-3 ">
              <PowerUsageCard />
              <SecurityCard />
              <WaterCard />
              <div className="col-start-2">
                <HVACCard />
              </div>
            </div>
          </div>
        </div>

        <ChatAssistant />
      </div>
    </div>
  );
}

export default App;
