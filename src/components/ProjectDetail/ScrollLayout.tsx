'use client';

import React, { useRef, useEffect } from 'react';
import styles from './ProjectDetail.module.css';

interface ScrollLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export default function ScrollLayout({
  left,
  right,
}: ScrollLayoutProps): React.JSX.Element {
  const leftScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftEl = leftScrollRef.current;
    if (!leftEl) return;

    const onWheel = (e: WheelEvent): void => {
      const max = leftEl.scrollHeight - leftEl.clientHeight;
      if (max <= 0) return;

      if (e.deltaY > 0) {
        if (leftEl.scrollTop < max - 0.5) {
          leftEl.scrollTop = Math.min(max, leftEl.scrollTop + e.deltaY);
          e.preventDefault();
        }
      } else if (e.deltaY < 0) {
        if (window.scrollY <= 0 && leftEl.scrollTop > 0) {
          leftEl.scrollTop = Math.max(0, leftEl.scrollTop + e.deltaY);
          e.preventDefault();
        }
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div ref={leftScrollRef} className={styles.leftScroll}>
          <div className={styles.leftInner}>{left}</div>
        </div>
      </div>
      <div className={styles.right}>{right}</div>
    </div>
  );
}
