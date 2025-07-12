
import React from 'react';
import { LogOut, Settings, User, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface UserMenuProps {
  userName: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ userName }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center text-sm font-medium text-gray-200 hover:text-white px-2 py-1 rounded-md transition-colors">
          <span className="mr-1">{userName}</span>
          <ChevronDown className="w-4 h-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-56 bg-[#1A1F2C]/95 backdrop-blur-sm border border-white/10 text-white shadow-xl rounded-xl"
        align="end"
        sideOffset={8}
      >
        <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white/5">
          <User className="h-4 w-4" />
          <span>Profile</span>
          <div className="ml-auto flex items-center text-xs text-gray-400">
            <span>⌘</span>
            <span> </span>
            <span>P</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white/5">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
          <div className="ml-auto flex items-center text-xs text-gray-400">
            <span>⌘</span>
            <span> </span>
            <span>,</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-white/5">
          <LogOut className="h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
