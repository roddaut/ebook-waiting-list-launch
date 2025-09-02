
import React from 'react';
import { CheckIcon } from "lucide-react";

const WhatYoullLearnSection = () => {
  const learningPoints = [
    "David McIlroy – The psychological reason why sharing your failures builds stronger audience loyalty than your successes.",
    "Mark Wils – The overlooked platform that consistently outperforms social media for sustainable audience growth.",
    "Niharikaa Sodhi – The surprising planning method that makes consistent writing possible—even with a day job.",
    "Ev Chapman – How combining voice input with AI frees your ideas from the keyboard and unlocks natural creativity.",
    "Rodney Daut (me) – Why simple text-based courses outperform flashy video productions—and are faster to build with writing alone.",
    "Matt Giaro – Why working within templates increases creativity—and helps you write faster and better.",
    "Tom Kueglar – The training method that makes AI think exactly like you do—scaling your expertise without losing your voice.",
    "Chris Stanley – How mini-books act as authority shortcuts that drive course sales and attract coaching clients.",
    "Jari Roomer – How short, outcome-specific mini courses convert better and create more loyal customers than mega-courses.",
    "Karen Cherry – The visual design element that instantly tells readers your content is premium and worth paying for.",
    "Landon Poburan – The \"invisible survey\" technique that reveals exactly what your audience is willing to pay for.",
    "Leo Quinn – How sending a pizza box in the mail became his highest-performing outreach campaign.",
    "Russell Nohelty – Why Kickstarter is still the best-kept secret for funding and validating your writing projects.",
    "Sinem Günel – How creators with tiny audiences use high-ticket coaching to generate five-figure months.",
    "Ana Calin – Why focusing on community needs (not content perfection) is the secret to building loyal readers.",
    "Kevon Cheung – How building in public creates pre-sold customers before you launch anything.",
    "Philip Hofmacher – Why community-first education beats courses and coaching for engagement and transformation.",
    "Ian Botes – The persuasive writing pattern that transforms skeptical readers into loyal customers.",
    "Claudia Faith – The simple mindset shift that helped her go from silent Substack to thriving writer in under 6 months.",
    "Josh Spector – The overlooked content source producing your best material—and how to turn it into evergreen assets.",
    "Kristina God – How a smart \"content flywheel\" across 2–3 platforms multiplies your reach without more effort.",
    "Michael Simmons – Why naming your ideas (like \"1000 True Fans\") makes them spread far beyond your audience.",
    "Robert Plank – The WWHW podcasting framework that creates binge-worthy content across platforms."
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black-ebook">What You'll Learn</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {learningPoints.map((item, index) => (
            <div key={index} className="flex items-start gap-2 mb-4">
              <CheckIcon className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearnSection;
