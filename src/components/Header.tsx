import { Bell, Camera } from "lucide-react";

interface HeaderProps {
  currentTime: Date;
}

const Header = ({ currentTime }: HeaderProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="flex items-center justify-between h-16">
      {/* Logo and Time */}
      <div className="flex items-center gap-6">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-25 w-20 object-contain"
          />
        </div>

        <div className="text-white">
          <div className="text-2xl font-light">{formatTime(currentTime)}</div>
          <div className="text-xs opacity-80">
            {formatDate(currentTime).substring(0, 20)}
          </div>
        </div>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-2">
        {/* Notification */}
        <div className="bg-white/90 backdrop-blur-md rounded-full px-3 py-2 flex items-center gap-2 shadow-lg">
          <Camera size={14} className="text-gray-700" />
          <div className="text-left">
            <div className="text-xs font-semibold text-gray-900">
              Front door opened
            </div>
            <div className="text-xs text-gray-600">2 min ago</div>
          </div>
          <button className="text-xs text-blue-600 font-medium">View</button>
        </div>

        {/* Action Buttons */}
        <button className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-white/30 transition-all">
          Dashboard
        </button>
        <button className="bg-blue-600/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-blue-600/70 transition-all">
          Use Camera
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2">
          <button className="relative">
            <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-xs text-white font-bold leading-none">
                3
              </span>
            </div>
          </button>
          <div className="text-white text-xs">
            <div className="font-medium">Iliana D</div>
            <div className="opacity-80">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
