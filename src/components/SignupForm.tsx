
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SignupFormProps {
  isDarkBackground?: boolean;
}

const SignupForm: React.FC<SignupFormProps> = ({ isDarkBackground = false }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <form 
        action="https://app.kit.com/forms/7946937/subscriptions" 
        className="seva-form formkit-form" 
        method="post" 
        data-sv-form="7946937" 
        data-uid="c8f30abd0d" 
        data-format="inline" 
        data-version="5"
      >
        <div data-style="clean">
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
          <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields flex flex-col gap-3">
            <div className="formkit-field">
              <Input 
                name="email_address" 
                aria-label="Email Address" 
                placeholder="Your email address" 
                required 
                type="email"
                className={`w-full py-3 ${isDarkBackground ? "bg-white text-gray-800" : ""}`}
              />
            </div>
            <Button 
              data-element="submit" 
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold"
            >
              GET YOUR FREE EBOOK
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
