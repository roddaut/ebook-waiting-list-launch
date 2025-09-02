
import React from 'react';
import { Pencil, BookText, BookOpen } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-yellow-ebook">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-yellow-ebook/20 rounded-full">
            <BookText className="h-8 w-8 text-black-ebook" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-center">Tested Strategies</h3>
        <p className="text-gray-600 text-center">
          Discover proven monetization strategies from successful writers who have generated real income from their craft.
        </p>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-yellow-ebook">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-yellow-ebook/20 rounded-full">
            <Pencil className="h-8 w-8 text-black-ebook" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-center">Practical Advice</h3>
        <p className="text-gray-600 text-center">
          Get actionable tips you can implement immediately to start earning from your writing skills, regardless of your niche.
        </p>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-yellow-ebook">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-yellow-ebook/20 rounded-full">
            <BookOpen className="h-8 w-8 text-black-ebook" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-center">Real Examples</h3>
        <p className="text-gray-600 text-center">
          Learn from case studies of writers who successfully transformed their passion into a sustainable income source.
        </p>
      </div>
    </div>
  );
};

export default Features;
