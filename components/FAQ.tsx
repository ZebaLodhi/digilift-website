'use client';

import { useState } from 'react';

type Item = { question: string; answer: string };

export default function FAQ({ items, limit }: { items: Item[]; limit?: number }) {
  const [open, setOpen] = useState<number | null>(null);
  const shown = limit ? items.slice(0, limit) : items;

  return (
    <div>
      {shown.map((item, i) => (
        <div className={open === i ? 'qa open' : 'qa'} key={item.question}>
          <button
            className="q"
            type="button"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.question}
            <span aria-hidden="true">+</span>
          </button>
          <div className="a">
            <div>
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
