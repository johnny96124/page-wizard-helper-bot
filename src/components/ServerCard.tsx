
import React from 'react';
import { Info, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServerType } from '@/data/servers';
import { StarRating } from '@/components/StarRating';

interface ServerCardProps {
  server: ServerType;
}

const ServerCard: React.FC<ServerCardProps> = ({ server }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0">
            {server.icon}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{server.name}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-xs font-medium px-2 py-1 rounded ${
                server.type === 'STDIO' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {server.type}
              </span>
              <span className="text-gray-500 text-sm">v{server.version}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">{server.description}</p>
        
        <div className="mb-6">
          <p className="text-gray-700 font-medium mb-1">Author</p>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">{server.author}</p>
            <StarRating rating={server.rating} />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <Button variant="outline" className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            <span>Details</span>
          </Button>
          
          {server.installed ? (
            <div className="flex items-center gap-2 text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Installed</span>
            </div>
          ) : (
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <Server className="h-4 w-4" />
              <span>Add Server</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServerCard;
