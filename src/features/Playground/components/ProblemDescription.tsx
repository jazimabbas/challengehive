import {
  ChevronLeftIcon,
  FileIcon,
  FireExtinguisherIcon,
  LightbulbIcon,
  MaximizeIcon,
  TagIcon,
} from "lucide-react";

import { Difficulty } from "@/components/Difficulty";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ProblemDescription = () => {
  return (
    <div className="relative flex h-full flex-col rounded-lg border bg-tabset">
      <Tabbar />

      <div
        className="relative top-9 flex flex-col gap-5 overflow-auto px-4 py-5"
        style={{ height: "calc(100% - 40px)" }}
      >
        <p className="text-xl font-bold">1. Two Sum</p>
        <Badges />
        <SummaryContent />
        <AccordianItems />
      </div>
    </div>
  );
};

const Tabbar = () => {
  return (
    <div className="absolute flex h-[40px] w-full flex-nowrap overflow-x-auto bg-tabset-header p-1">
      <Button size="sm" variant="ghost">
        <FileIcon className="text-blue-500" /> Description
      </Button>
      <Button size="sm" variant="ghost">
        <FireExtinguisherIcon className="text-blue-500" /> Solution
      </Button>
      <div className="absolute right-0 bg-tabset-header/50">
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

const SummaryContent = () => {
  return (
    <div className="text-sm playground-summary-content">
      <p>
        Given an array of integers <code>nums</code> and an integer <code>target</code>, return
        indices of the two numbers such that they add up to <code>target</code>.
      </p>
      <p>
        You may assume that each input would have exactly one solution, and you may not use the same
        element twice.
      </p>
      <p>You can return the answer in any order.</p>

      <p>​</p>

      <p>
        <strong>Example 1:</strong>
      </p>
      <pre>
        <p>
          <strong>Input:</strong> <span>nums = [2,7,11,15], target = 9</span>
        </p>
        <p>
          <strong>Output:</strong> <span>[0,1]</span>
        </p>
        <p>
          <strong>Input:</strong> nums = [2,7,11,15], target = 9
        </p>
      </pre>

      <p>​</p>

      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>{"2 <= nums.length <= 10^4"}</code>
        </li>
        <li>
          <code>{"2 <= nums.length <= 10^4"}</code>
        </li>
        <li>
          <code>{"2 <= nums.length <= 10^4"}</code>
        </li>
        <li>Only one valid answer exists.</li>
      </ul>

      <p>​</p>

      <p>
        <strong>Follow-up</strong>: Can you come up with an algorithm that is less than O(n2) time
        complexity?
      </p>
    </div>
  );
};

const AccordianItems = () => {
  return (
    <Accordion type="multiple">
      <Topics />
      <Hints />
    </Accordion>
  );
};

const Topics = () => {
  return (
    <AccordionItem value="topics">
      <AccordionTrigger>
        <TriggerContent icon={TagIcon} label="Topics" />
      </AccordionTrigger>
      <AccordionContent className="flex gap-2">
        <Badge>Array</Badge>
        <Badge>Hash Table</Badge>
      </AccordionContent>
    </AccordionItem>
  );
};

const Hints = () => {
  return (
    <>
      <AccordionItem value="hint1">
        <AccordionTrigger>
          <TriggerContent icon={LightbulbIcon} label="Hint 1" />
        </AccordionTrigger>
        <AccordionContent>
          A really brute force way would be to search for all possible pairs of numbers but that
          would be too slow. Again, its best to try out brute force solutions for just for
          completeness. It is from these brute force solutions that you can come up with
          optimizations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="hint2">
        <AccordionTrigger>
          <TriggerContent icon={LightbulbIcon} label="Hint 2" />
        </AccordionTrigger>
        <AccordionContent>
          A really brute force way would be to search for all possible pairs of numbers but that
          would be too slow. Again, its best to try out brute force solutions for just for
          completeness. It is from these brute force solutions that you can come up with
          optimizations.
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

const TriggerContent = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-2">
    <Icon size={15} /> {label}
  </div>
);
