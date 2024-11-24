import { ChevronLeftIcon, FileIcon, FireExtinguisherIcon, MaximizeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ProblemDescription = () => {
  return (
    <div className="h-full overflow-auto bg-tabset rounded-lg border">
      <Tabbar />
    </div>
  );
};

const Tabbar = () => {
  return (
    <div className="bg-tabset-header flex p-1">
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
