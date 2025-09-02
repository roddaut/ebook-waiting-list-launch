
import React from 'react';
import SignupForm from './SignupForm';

const SignupSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#e6f2ff" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-center mb-4">Get Your Free eBook</h3>
          <SignupForm isDarkBackground={false} />
          <p className="text-center text-sm text-gray-500 mt-3">We respect your email privacy. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
