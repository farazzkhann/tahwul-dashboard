import { Search, Menu } from 'lucide-react';
import NotificationIcon from '../../assets/icons/notification-icon.svg'
import UserImg from '../../assets/images/user-img.png'

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 z-10 sticky top-0">
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={24} className="text-gray-700" />
        </button>

        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 bg-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm md:text-base"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <img src={NotificationIcon} alt="" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="flex items-center gap-2 md:gap-3 bg-[#F9FAFA] p-2 rounded-full">
            <img
              src={UserImg}
              alt="User"
            />
            <span className="font-medium text-sm md:text-base hidden sm:inline">Mohamed</span>
          </div>
        </div>
      </div>
    </header>
  );
};