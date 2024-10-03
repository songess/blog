import { Input } from "@/components/ui/input"
import { Button } from "./ui/button";
import SearchSVG from "@public/svg/search.svg"
import { Sun } from "lucide-react";

export default function BlogHeader() {
  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-2xl cursor-pointer">🎃</span>
          <nav>
            <ul className="flex">
              <li><Button className="font-medium text-base" variant="ghost">About</Button></li>
              <li><Button className="font-medium text-base" variant="ghost">Blog</Button></li>
              <li><Button className="font-medium text-base" variant="ghost">Snippets</Button></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input type="search" placeholder="Search..." className="pl-8 pr-4" />
            <SearchSVG className="h-4 w-4 absolute left-2.5 top-3 text-gray-500" />
          </div>
          <Button variant="ghost" size="icon">
            <Sun className="h-5 w-5" />
          </Button>
        </div>
      </header>
  )
}
