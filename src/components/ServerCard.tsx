
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
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ServerCardProps {
  server: ServerType;
}

const ServerCard: React.FC<ServerCardProps> = ({ server }) => {
  // Limit tags to display max 3
  const displayTags = server.tags.slice(0, 3);
  const hasMoreTags = server.tags.length > 3;
  
  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 h-full flex flex-col border-gray-200">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">{server.name}</h2>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                server.type === 'STDIO' 
                  ? 'bg-purple-100 text-purple-800 border border-purple-200' 
                  : 'bg-blue-100 text-blue-800 border border-blue-200'
              }`}>
                {server.type}
              </span>
              {server.isOfficial && (
                <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                  <Check className="h-3 w-3 mr-1" />
                  Official
                </span>
              )}
            </div>
          </div>
          {/* 去掉了右侧小图标 */}
        </div>
      </CardHeader>
      
      <CardContent className="pt-2 pb-4">
        <p className="text-gray-600 mb-4 line-clamp-2">{server.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-gray-500 text-xs mb-1">Author</p>
            <p className="text-gray-800 font-medium truncate">{server.author}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-gray-500 text-xs mb-1">Version</p>
            <p className="text-gray-800 font-medium">{server.version}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-500 text-xs mb-2">Categories</p>
          <div className="flex flex-wrap gap-2">
            {displayTags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-gray-50 border-gray-200 text-gray-700">
                {tag}
              </Badge>
            ))}
            {hasMoreTags && (
              <Badge variant="outline" className="bg-gray-50 border-gray-200 text-gray-700">
                +{server.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 mt-auto border-t border-gray-100">
        <div className="flex items-center justify-between w-full">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span>Details</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[640px]">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold flex items-center gap-3">
                  {server.name}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      server.type === 'STDIO' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {server.type}
                    </span>
                    {server.isOfficial && (
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800">
                        <Check className="h-3 w-3 mr-1" />
                        Official
                      </span>
                    )}
                  </div>
                </DialogTitle>
                {/* 去掉了标题下的那行字 */}
              </DialogHeader>
              
              <div className="py-4">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium text-sm text-gray-500 mb-2">Description</h3>
                  <p className="text-gray-800">{server.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-sm text-gray-500 mb-2">Author</h3>
                    <p className="text-gray-800 font-medium">{server.author}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-sm text-gray-500 mb-2">Version</h3>
                    <p className="text-gray-800 font-medium">{server.version}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium text-sm text-gray-500 mb-2">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {server.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-white border-gray-200 text-gray-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium text-sm text-gray-500 mb-2">Features</h3>
                  <ul className="list-disc pl-5 text-gray-800 space-y-1">
                    <li>Supports TypeScript development</li>
                    <li>Auto-imports and code completion</li>
                    <li>Real-time error checking</li>
                    <li>Integrated debugging</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-sm text-gray-500 mb-2">Repository</h3>
                  <a 
                    href={`https://github.com/${server.author}/${server.name.toLowerCase()}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <div className="bg-white p-3 rounded-lg font-mono text-sm flex items-center w-full">
                      github.com/{server.author}/{server.name.toLowerCase()}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="flex justify-end mt-2">
                {server.installed ? (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                    <Check className="h-5 w-5" />
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
            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-2 rounded-lg">
              <Check className="h-5 w-5" />
              <span>Installed</span>
            </div>
          ) : (
            <Button size="sm" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <Server className="h-4 w-4" />
              <span>Add Server</span>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServerCard;
