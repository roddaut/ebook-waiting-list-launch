
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Confirmation = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Avatar with Rodney's photo */}
          <div className="flex justify-center mb-6">
            <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
              <AvatarImage src="/lovable-uploads/e027d78c-6c7e-44e0-a6db-e81c35d9ef13.png" alt="Rodney Daut" />
              <AvatarFallback>RD</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Confirmation message */}
          <div className="space-y-4 text-left">
            <p className="text-lg font-medium">Hi,</p>
            
            <p className="text-md">
              Thank you so much for deciding to get my ebook <span className="font-semibold">Profitable Playbooks</span>.
            </p>
            
            <p className="text-md">
              You've made a wise choice if I do say so myself.🙂
            </p>
            
            <p className="text-md">
              There's just one thing left to do.
            </p>
            
            <p className="text-xl font-bold">
              Confirm.
            </p>
            
            <p className="text-md">
              You'll get an email in a few seconds asking you to confirm your interest in <span className="font-semibold">Profitable Playbooks</span>.
            </p>
            
            <p className="text-md">
              I know it's an extra step but I promise it'll be worth it.
            </p>
            
            <p className="text-md">
              So, check your email now and click the confirm button. I'll then send you your book right away.
            </p>

            <p className="text-md">
              Thanks in advance,
            </p>
            <p className="text-md">
              Rodney
            </p>
            <p className="text-md">
              Creator of <span className="font-semibold">Profitable Playbooks</span>
            </p>
            
            {/* PS message */}
            <p className="text-md pt-4 italic">
              PS: If you don't get the email for some reason, check your Promotions folder (if using Gmail) or check your Spam folder. Or email me at <a href="mailto:rodney@selfinfluence.net" className="text-blue-600 hover:underline">rodney@selfinfluence.net</a> and I'll get you all set up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
