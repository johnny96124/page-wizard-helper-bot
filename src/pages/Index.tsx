
import React, { useState } from 'react';
import { Search, Filter, Info, Server, Category } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ServerCard from '@/components/ServerCard';
import { servers } from '@/data/servers';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Available categories for filtering
const categories = [
  'All',
  'Cloud',
  'DevOps',
  'Infrastructure',
  'Containers',
  'Web',
  'Frontend',
  'Development',
  'UI/UX',
  'Backend',
  'Data'
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredServers = servers.filter(server => {
    // First filter by search term
    const matchesSearch = 
      server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      server.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Then filter by category if not "All"
    const matchesCategory = 
      selectedCategory === 'All' || 
      server.tags.some(tag => tag === selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Discovery</h1>
        <p className="text-gray-600 text-lg">Browse and install MCP server definitions</p>
      </div>
      
      <div className="flex items-center gap-4 mb-8 flex-col sm:flex-row">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input 
            type="text" 
            placeholder="Search servers..." 
            className="pl-10 h-12 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-auto">
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="h-12 min-w-[200px] flex items-center gap-2">
              <Category className="h-5 w-5 text-gray-500" />
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServers.map((server) => (
          <ServerCard key={server.id} server={server} />
        ))}
      </div>
    </div>
  );
};

export default Index;
