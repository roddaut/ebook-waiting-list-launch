
import React from 'react';
import EbookCover from '../components/EbookCover';
import SignupForm from '../components/SignupForm';
import { CheckIcon } from "lucide-react";

const Alternative = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-red-500 mb-2 mx-auto max-w-4xl">
              Why Most Online Entrepreneurs Struggle—And What These 20 Did Differently
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thank you for your interest in the Profitable Playbooks ebook
            </p>
          </div>
        </div>
      </section>
      
      {/* Book Cover and Introduction */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 flex justify-center">
              <EbookCover />
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Inside this FREE ebook, you'll discover:
              </h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">How to build a loyal audience that actually buys from you</p>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">The exact systems used by successful online creators who turned their skills into scalable income</p>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Practical strategies to grow newsletters, launch products, and build communities from scratch</p>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">How to escape the content creation hamster wheel and create systems that work for you</p>
                </li>
              </ul>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-center mb-4">Get Your Free eBook</h3>
                <SignupForm isDarkBackground={false} />
                <p className="text-center text-sm text-gray-500 mt-3">We respect your email privacy. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What You'll Learn Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">For example, you'll discover:</h2>
          <div className="grid md:grid-cols-2 gap-y-3 gap-x-6 max-w-4xl mx-auto">
            {[
              "<strong>David McIlroy</strong> – The psychological reason why sharing your failures builds stronger audience loyalty than your successes.",
              "<strong>Mark Wils</strong> – The overlooked platform that consistently outperforms social media for sustainable audience growth.",
              "<strong>Niharikaa Sodhi</strong> – The surprising planning method that makes consistent writing possible—even with a day job.",
              "<strong>Ev Chapman</strong> – How combining voice input with AI frees your ideas from the keyboard and unlocks natural creativity.",
              "<strong>Rodney Daut</strong> – Why simple text-based courses outperform flashy video productions—and are faster to build with writing alone.",
              "<strong>Matt Giaro</strong> – Why working within templates increases creativity—and helps you write faster and better.",
              "<strong>Tom Kueglar</strong> – The training method that makes AI think exactly like you do—scaling your expertise without losing your voice.",
              "<strong>Chris Stanley</strong> – How mini-books act as authority shortcuts that drive course sales and attract coaching clients.",
              "<strong>Jari Roomer</strong> – How short, outcome-specific mini courses convert better and create more loyal customers."
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="h-5 w-5 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: item }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What Else You'll Discover */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">What else you'll discover inside...</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "The visual design element that instantly tells readers your content is premium and worth paying for",
              "The \"invisible survey\" technique that reveals exactly what your audience is willing to pay for",
              "How creators with tiny audiences use high-ticket coaching to generate five-figure months",
              "Why focusing on community needs (not content perfection) is the secret to building loyal readers",
              "How building in public creates pre-sold customers before you launch anything"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="h-6 w-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mt-1 flex-shrink-0 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What Makes This Different */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">What Makes This Different</h2>
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
                  <CheckIcon className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span>Real systems from real writers earning real income</span>
                </p>
                <p className="text-lg font-medium flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span>Learn what&apos;s working right now in 2025</span>
                </p>
                <p className="text-lg font-medium flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span>All in one book. At no cost.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Download Profitable Playbooks Now – It&apos;s $0</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto text-gray-600">
            Get the ebook 5,000+ creators wish they had when they started.
          </p>
          
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Get Your Free eBook</h3>
            <SignupForm isDarkBackground={false} />
            <p className="text-center text-sm text-gray-500 mt-3">We respect your email privacy. Unsubscribe anytime.</p>
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

export default Alternative;
