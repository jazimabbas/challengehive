import { createStore } from "zustand";
import { devtools } from "zustand/middleware";

type Panel = "summary" | "editor" | "terminal";

export type ResizableStateConfig = {
  summaryPanelSize: number;
  editorPanelSize: number;
  terminalPanelSize: number;
};

export type ResizableActionsConfig = {
  onResizePanel: (panel: Panel, size: number) => void;
  onResizePanelByAction: (panel: Panel, action: "fold" | "maximize") => void;
};

export type ResizableStore = ResizableStateConfig & ResizableActionsConfig;

const initialState: ResizableStateConfig = {
  summaryPanelSize: 50,
  editorPanelSize: 50,
  terminalPanelSize: 50,
};

const middlewares = (f: (...args: any) => ResizableStore) =>
  devtools(f, { name: "ResizablePanelStore" });

export const createResizableStore = () => {
  return createStore<ResizableStore>()(
    middlewares((_set) => ({
      ...initialState,
      onResizePanel(_panel, _size) {},
      onResizePanelByAction(_panel, _action) {},
    })),
  );
};
