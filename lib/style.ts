import type { CSSProperties } from 'react';

export const delayStyle = (delay?: string): CSSProperties | undefined =>
    delay ? ({ '--delay': delay } as CSSProperties) : undefined;

export const levelStyle = (level: number): CSSProperties =>
    ({ '--level': `${level}%` } as CSSProperties);
