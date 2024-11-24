import {
  ChevronLeftIcon,
  FileIcon,
  FireExtinguisherIcon,
  LightbulbIcon,
  MaximizeIcon,
  TagIcon,
} from "lucide-react";

import { Difficulty } from "@/components/Difficulty";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ProblemDescription = () => {
  return (
    <div className="h-full overflow-auto rounded-lg border bg-tabset">
      <Tabbar />

      <div className="flex flex-col gap-5 px-4 py-5">
        <p className="text-xl font-bold">1. Two Sum</p>
        <Badges />
      </div>
    </div>
  );
};

const Tabbar = () => {
  return (
    <div className="flex bg-tabset-header p-1">
      <Button size="sm" variant="ghost">
        <FileIcon className="text-blue-500" /> Description
      </Button>
      <Button size="sm" variant="ghost">
        <FireExtinguisherIcon className="text-blue-500" /> Solution
      </Button>
      <div className="ml-auto">
        <Button size="sm" variant="ghost">
          <MaximizeIcon />
        </Button>
        <Button size="sm" variant="ghost">
          <ChevronLeftIcon />
        </Button>
      </div>
    </div>
  );
};

const Badges = () => {
  return (
    <div className="flex gap-2">
      <Difficulty type="easy">Easy</Difficulty>
      <Badge className="cursor-pointer" variant="default">
        <TagIcon size={12} /> Topics
      </Badge>
      <Badge className="cursor-pointer" variant="default">
        <LightbulbIcon size={12} /> Hints
      </Badge>
    </div>
  );
};
