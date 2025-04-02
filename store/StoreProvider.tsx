'use client';

import { ReactNode, useRef } from 'react';
import { AppStore, makeStore } from './index';
import { Provider } from 'react-redux';

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
