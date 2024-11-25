"use client";

import { PropsWithChildren } from "react";

import { useResizableSelector } from "./ResizableProvider";

import { ResizablePanel } from "@/components/ui/resizable";

type Props = Required<PropsWithChildren>;

export const SummaryPanel = ({ children }: Props) => {
  const summaryPanelSize = useResizableSelector((s) => s.summaryPanelSize);

  return <ResizablePanel defaultSize={summaryPanelSize}>{children}</ResizablePanel>;
};

export const EditorPanel = ({ children }: Props) => {
  const editorPanelSize = useResizableSelector((s) => s.editorPanelSize);

  return <ResizablePanel defaultSize={editorPanelSize}>{children}</ResizablePanel>;
};

export const TerminalPanel = ({ children }: Props) => {
  const terminalPanelSize = useResizableSelector((s) => s.terminalPanelSize);

  return <ResizablePanel defaultSize={terminalPanelSize}>{children}</ResizablePanel>;
};
