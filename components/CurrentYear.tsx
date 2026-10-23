'use client';

import { useEffect, useState } from 'react';

export default function CurrentYear({ initial }: { initial: number }) {
    const [year, setYear] = useState(initial);

    useEffect(() => {
        const now = new Date().getFullYear();

        if (now !== initial) {
            setYear(now);
        }
    }, [initial]);

    return <span id="year">{year}</span>;
}
