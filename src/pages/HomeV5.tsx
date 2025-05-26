import React from 'react';
import EbookCover from '../components/EbookCover';
import SignupForm from '../components/SignupForm';
import { CheckIcon } from "lucide-react";
import { Link } from 'react-router-dom';

const HomeV5 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with two-column layout */}
      <section className="hero-gradient py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-black-ebook mb-4 mx-auto max-w-5xl">
              Why most online entrepreneurs struggle—and what these 20 did differently
            </h1>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Stop guessing how to grow online. Discover how real creators turned their words into wealth—with practical strategies you can copy today.
            </p>
          </div>
          
          {/* Two-column layout: Text content, Signup Form + Book Cover */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left column: Main text content */}
            <div>
              <p className="text-lg text-gray-800 mb-4">
                You're tired of posting into the void.
              </p>
              <p className="text-lg text-gray-800 mb-4">
                You're a writer, coach, or professional who knows your words can create income—but you're stuck spinning your wheels, drowning in vague advice and hollow growth hacks.
              </p>
              <p className="text-lg text-gray-800 mb-4">
                This free ebook changes that.
              </p>
              <p className="text-lg text-gray-800 mb-4">
                Inside Profitable Playbooks, Rodney Daut curates strategies from 20+ successful online creators who turned their skills into scalable income—without selling out or selling fluff.
              </p>
              <p className="text-lg text-gray-800 mb-4">
                You'll discover the exact systems, workflows, and mindset shifts that helped them grow newsletters, launch products, sell courses, land high-ticket clients, and build communities from scratch.
              </p>
              
              {/* Small link to toggle between versions */}
              <div className="mb-8 text-sm text-gray-500">
                <Link to="/home-v4" className="hover:underline">View previous layout</Link>
              </div>
              
              {/* Signup form positioned under text on mobile */}
              <div className="md:hidden bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-center mb-4">Get Your Free eBook</h3>
                <SignupForm isDarkBackground={false} verticalLayout={true} />
                <p className="text-center text-sm text-gray-500 mt-3">We respect your email privacy. Unsubscribe anytime.</p>
              </div>
            </div>
            
            {/* Right column: Signup form and book cover side by side */}
            <div className="hidden md:flex gap-6 items-start">
              {/* Signup form on the left side of right column */}
              <div className="bg-white p-6 rounded-lg shadow-md flex-shrink-0" style={{ minWidth: '300px' }}>
                <h3 className="text-xl font-bold text-center mb-4">Get Your Free eBook</h3>
                <SignupForm isDarkBackground={false} verticalLayout={true} />
                <p className="text-center text-sm text-gray-500 mt-3">We respect your email privacy. Unsubscribe anytime.</p>
              </div>
              
              {/* Book cover on the right side of right column */}
              <div className="w-full max-w-[250px] flex-shrink-0">
                <EbookCover />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What You'll Learn Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black-ebook">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
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
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2 mb-4">
                <CheckIcon className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Standalone Sign-up Section */}
      <section className="py-16" style={{ backgroundColor: "#e6f2ff" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-center mb-4">Get Your Free eBook</h3>
            <SignupForm isDarkBackground={false} />
            <p className="text-center text-sm text-gray-500 mt-3">We respect your email privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
      
      {/* What Makes This Different */}
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
      
      {/* Final CTA */}
      <section className="py-16 bg-black-ebook text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Download Profitable Playbooks Now – It&apos;s $0</h2>
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            Get the ebook 5,000+ creators wish they had when they started.
          </p>
          <p className="text-xl mb-8 font-bold">👉 Grab Your Copy for $0</p>
          
          <div className="max-w-md mx-auto">
            <SignupForm isDarkBackground={true} />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-6 bg-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Rodney Daut. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeV5;
