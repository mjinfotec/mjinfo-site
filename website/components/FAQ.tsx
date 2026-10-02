"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/site";

export function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto max-w-4xl divide-y divide-midnight/10 rounded-lg border border-midnight/10 bg-white">
      {faqs.map((item, index) => (
        <div key={item.question}>
          <button
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            onClick={() => setActive(active === index ? -1 : index)}
          >
            <span className="text-base font-black text-midnight">{item.question}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-ocean transition ${active === index ? "rotate-180" : ""}`}
            />
          </button>
          {active === index && (
            <p className="px-6 pb-6 text-sm leading-7 text-graphite/74">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
