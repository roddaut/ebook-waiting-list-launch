
import React from 'react';
import { CheckIcon } from "lucide-react";

const WhatMakesDifferentSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black-ebook">What Makes This Different</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-lg font-medium flex items-center gap-2">
                <span className="text-red-500 text-2xl">🚫</span>
                <span>No vague &quot;just be consistent&quot; advice</span>
              </p>
              <p className="text-lg font-medium flex items-center gap-2">
                <span className="text-red-500 text-2xl">🚫</span>
                <span>No cookie-cutter growth hacks</span>
              </p>
              <p className="text-lg font-medium flex items-center gap-2">
                <span className="text-red-500 text-2xl">🚫</span>
                <span>No guru fluff or motivational filler</span>
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-lg font-medium flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Real systems from real writers earning real income</span>
              </p>
              <p className="text-lg font-medium flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Learn what&apos;s working right now in 2025</span>
              </p>
              <p className="text-lg font-medium flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>All in one book. At no cost.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferentSection;
