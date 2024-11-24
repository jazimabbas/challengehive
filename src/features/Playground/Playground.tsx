import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudUploadIcon,
  LogsIcon,
  PlayIcon,
  SettingsIcon,
} from "lucide-react";

import { CodeEditor } from "./components/CodeEditor";
import { ProblemDescription } from "./components/ProblemDescription";
import { Result } from "./components/Result";

import { Hint } from "@/components/Hint";
import { Button } from "@/components/ui/button";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export const Playground = () => {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <Header />

      <div className="p-2 pt-0" style={{ height: "calc(100% - 48px)" }}>
        <ResizableSection />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="relative flex h-[48px] items-center justify-between px-5">
      <div className="flex">
        <Button className="font-bold" size="sm" variant="ghost">
          <LogsIcon /> Problem List
        </Button>
        <Hint label="Prev Question">
          <Button size="sm" variant="ghost">
            <ChevronLeftIcon />
          </Button>
        </Hint>
        <Hint label="Next Question">
          <Button size="sm" variant="ghost">
            <ChevronRightIcon />
          </Button>
        </Hint>
      </div>
      <div className="absolute left-1/2 flex -translate-x-1/2">
        <Hint label="Run the Test Cases">
          <Button className="font-bold" size="sm" variant="ghost">
            <PlayIcon /> Run
          </Button>
        </Hint>
        <Hint label="Submit the Code">
          <Button
            className={`
              font-bold text-green-500
              hover:text-green-500
            `}
            size="sm"
            variant="ghost"
          >
            <CloudUploadIcon /> Submit
          </Button>
        </Hint>
      </div>
      <div className="flex">
        <Hint label="Settings">
          <Button size="sm" variant="ghost">
            <SettingsIcon />
          </Button>
        </Hint>
      </div>
    </header>
  );
};

const ResizableSection = () => {
  return (
    <ResizablePanelGroup className="h-full" direction="horizontal">
      <ResizablePanel defaultSize={50}>
        <ProblemDescription />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <CodeEditor />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <Result />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
