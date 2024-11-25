"use client";

import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { useStore } from "zustand";

import { createResizableStore, ResizableStore } from "./store";

type ResizableStoreApi = ReturnType<typeof createResizableStore>;

const ResizableContext = createContext<ResizableStoreApi>(undefined as any);

export const ResizableProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<ResizableStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createResizableStore();
  }

  return <ResizableContext.Provider value={storeRef.current}>{children}</ResizableContext.Provider>;
};

export const useResizableSelector = <T,>(selector: (store: ResizableStore) => T): T => {
  const resizableStoreContext = useContext(ResizableContext);

  if (!resizableStoreContext) {
    throw new Error(`useResizableSelector must be used within ResizableProvider`);
  }

  return useStore(resizableStoreContext, selector);
};
