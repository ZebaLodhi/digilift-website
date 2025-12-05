'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  limit?: number;
}

export default function FAQ({ items, limit }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const displayItems = limit ? items.slice(0, limit) : items;

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {displayItems.map((item, index) => (
        <div key={index} className="card">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center text-left"
            aria-expanded={openIndex === index}
          >
            <h3 className="text-xl font-bold text-dark pr-8">{item.question}</h3>
            <svg
              className={`w-6 h-6 text-accent flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="mt-4 text-dark/70 animate-fade-in">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
