import { useState } from 'react';
import { Home, Lightbulb, Sun, Thermometer, Shield, Wifi, Settings, Moon, Sunrise, Music, Lock } from 'lucide-react';

interface LightingScreenProps {
  onNavigate?: (view: string) => void;
}

const LightingScreen = ({ onNavigate }: LightingScreenProps) => {
  const [activeMode, setActiveMode] = useState('Evening');
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Living Room', power: 25, status: 'online', brightness: 60 },
    { id: 2, name: 'Bedroom', power: 0, status: 'offline', brightness: 0 },
    { id: 3, name: 'Kitchen', power: 0, status: 'offline', brightness: 0 },
  ]);

  const modes = [
    { name: 'Evening', icon: Moon, active: true },
    { name: 'Night', icon: Moon },
    { name: 'Security', icon: Lock },
    { name: 'Party', icon: Music },
    { name: 'Sunrise', icon: Sunrise },
  ];

  const menuItems = [
    { icon: Home, label: 'Home', view: 'dashboard' },
    { icon: Lightbulb, label: 'Lighting', view: 'lighting' },
    { icon: Sun, label: 'Climate', view: 'climate' },
    { icon: Thermometer, label: 'Temp', view: 'temp' },
    { icon: Shield, label: 'Security', view: 'security' },
    { icon: Wifi, label: 'Network', view: 'network' },
    { icon: Settings, label: 'Settings', view: 'settings' },
  ];

  const toggleRoom = (roomId: number) => {
    setRooms(rooms.map(room =>
      room.id === roomId
        ? { ...room, status: room.status === 'online' ? 'offline' : 'online', power: room.status === 'online' ? 0 : 25, brightness: room.status === 'online' ? 0 : 60 }
        : room
    ));
  };

  const activeZones = rooms.filter(r => r.status === 'online').length;
  const totalPower = rooms.reduce((sum, room) => sum + room.power, 0);
  const activeScene = modes.find(m => m.name === activeMode)?.name || 'Night';

  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden flex">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />

      {/* Sidebar */}
      <div className="relative z-10 w-16 flex flex-col items-center justify-center py-6">
        <div className="flex flex-col gap-3">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => onNavigate?.(item.view)}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 shadow-lg ${
                item.view === 'lighting'
                  ? 'bg-white text-gray-700'
                  : 'bg-white/80 text-gray-500 hover:bg-white hover:text-gray-700'
              }`}
            >
              <item.icon size={20} />
            </button>
          ))}
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          {/* Header Stats */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="bg-gray-900/70 backdrop-blur-md rounded-xl px-3 py-2 border border-gray-700/30">
              <div className="text-xs text-gray-400">Active Zones</div>
              <div className="text-lg font-light text-white">{activeZones}/6</div>
            </div>
            <div className="bg-gray-900/70 backdrop-blur-md rounded-xl px-3 py-2 border border-gray-700/30">
              <div className="text-xs text-gray-400">Total Power</div>
              <div className="text-lg font-light text-white">{totalPower}W</div>
            </div>
            <div className="bg-gray-900/70 backdrop-blur-md rounded-xl px-3 py-2 border border-gray-700/30">
              <div className="text-xs text-gray-400">Active Scene</div>
              <div className="text-lg font-light text-white">{activeScene}</div>
            </div>
            <div className="bg-gray-900/70 backdrop-blur-md rounded-xl px-3 py-2 border border-gray-700/30">
              <div className="text-xs text-gray-400">Schedule Mode</div>
              <div className="text-lg font-light text-white">Auto</div>
            </div>
          </div>

          {/* Modes Section */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 mb-4 shadow-2xl">
            <h3 className="text-gray-900 font-semibold mb-4 text-lg">Modes</h3>
            <div className="grid grid-cols-5 gap-2">
              {modes.map((mode) => (
                <button
                  key={mode.name}
                  onClick={() => setActiveMode(mode.name)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-200 ${
                    activeMode === mode.name
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <mode.icon size={20} />
                  <span className="text-xs font-medium">{mode.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Room Controls - Fixed Height Cards */}
          <div className="grid grid-cols-3 gap-3">
            {rooms.map((room) => (
              <div
                key={room.id}
                className={`rounded-3xl p-4 backdrop-blur-md border transition-all duration-200 h-[180px] flex flex-col ${
                  room.status === 'online'
                    ? 'bg-white/95 border-white/20 shadow-2xl'
                    : 'bg-gray-900/70 border-gray-700/30'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Lightbulb
                      size={20}
                      className={room.status === 'online' ? 'text-yellow-500' : 'text-gray-400'}
                    />
                  </div>
                  <button
                    onClick={() => toggleRoom(room.id)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      room.status === 'online'
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" />
                      {room.status === 'online' && (
                        <line x1="8" y1="5" x2="8" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      )}
                    </svg>
                  </button>
                </div>

                <div className="flex-1">
                  <div className={`text-base font-semibold mb-0.5 ${room.status === 'online' ? 'text-gray-900' : 'text-gray-300'}`}>
                    {room.name}
                  </div>
                  <div className={`text-sm ${room.status === 'online' ? 'text-gray-900' : 'text-gray-500'}`}>
                    {room.power}W
                  </div>
                  <div className={`text-xs capitalize ${room.status === 'online' ? 'text-green-600' : 'text-gray-500'}`}>
                    {room.status}
                  </div>
                </div>

                <div className="mt-auto pt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs ${room.status === 'online' ? 'text-gray-600' : 'text-gray-500'}`}>Brightness</span>
                    <span className={`text-xs font-semibold ${room.status === 'online' ? 'text-gray-900' : 'text-gray-500'}`}>{room.brightness}%</span>
                  </div>
                  <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full transition-all duration-300 ${
                        room.status === 'online' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' : 'bg-gray-400'
                      }`}
                      style={{ width: `${room.brightness}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Profile - Top Right */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
        <button className="relative">
          <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full border-2 border-black flex items-center justify-center">
            <span className="text-xs text-white font-bold leading-none">3</span>
          </div>
        </button>
        <div className="text-white text-xs">
          <div className="font-medium">Iliana. D</div>
          <div className="opacity-60">Admin</div>
        </div>
      </div>
    </div>
  );
};

export default LightingScreen;
