
import React from 'react';
import { Info, Server, Check, Tag, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServerType } from '@/data/servers';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ServerCardProps {
  server: ServerType;
}

const ServerCard: React.FC<ServerCardProps> = ({ server }) => {
  // Limit tags to display max 3
  const displayTags = server.tags.slice(0, 3);
  const hasMoreTags = server.tags.length > 3;
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow transition-shadow duration-200 h-full flex flex-col">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">{server.name}</h2>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className={`text-xs font-medium px-2 py-1 rounded ${
                server.type === 'STDIO' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {server.type}
              </span>
              {server.isOfficial && (
                <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-green-100 text-green-800">
                  <Check className="h-3 w-3 mr-1" />
                  Official
                </span>
              )}
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{server.description}</p>
        
        <div className="mb-4 flex items-start gap-6">
          <div>
            <p className="text-gray-700 font-medium text-sm mb-1">Author</p>
            <p className="text-gray-600">{server.author}</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium text-sm mb-1">Version</p>
            <p className="text-gray-600">{server.version}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {displayTags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-gray-100">
                {tag}
              </Badge>
            ))}
            {hasMoreTags && (
              <Badge variant="outline" className="bg-gray-100">
                +{server.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span>Details</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">
                  {server.name}
                </DialogTitle>
                <DialogDescription>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className={`text-xs font-medium px-2 py-1 rounded inline-block ${
                      server.type === 'STDIO' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {server.type}
                    </span>
                    {server.isOfficial && (
                      <span className="inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-green-100 text-green-800">
                        <Check className="h-3 w-3 mr-1" />
                        Official
                      </span>
                    )}
                  </div>
                </DialogDescription>
              </DialogHeader>
              
              <div className="py-4">
                <h3 className="font-medium text-sm text-gray-500 mb-1">Description</h3>
                <p className="text-gray-800">{server.description}</p>
                
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-sm text-gray-500 mb-1">Author</h3>
                    <p className="text-gray-800">{server.author}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-500 mb-1">Version</h3>
                    <p className="text-gray-800">{server.version}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium text-sm text-gray-500 mb-1">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {server.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium text-sm text-gray-500 mb-1">Features</h3>
                  <ul className="list-disc pl-5 text-gray-800 space-y-1">
                    <li>Supports TypeScript development</li>
                    <li>Auto-imports and code completion</li>
                    <li>Real-time error checking</li>
                    <li>Integrated debugging</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium text-sm text-gray-500 mb-1">Repository</h3>
                  <a 
                    href={`https://github.com/${server.author}/${server.name.toLowerCase()}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <div className="bg-gray-100 p-3 rounded font-mono text-sm flex items-center">
                      github.com/{server.author}/{server.name.toLowerCase()}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="flex justify-end mt-2">
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
            </DialogContent>
          </Dialog>
          
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
