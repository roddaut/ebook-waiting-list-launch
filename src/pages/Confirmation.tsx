
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

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
            <p className="text-lg font-medium">Hi, you.</p>
            
            <p className="text-md">
              Thank you so much for deciding to get my ebook <span className="font-semibold">Profitable Playbooks for Writers</span>.
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
              You'll get an email in a few seconds asking you to confirm your interest in Profitable Playbooks for Writers.
            </p>
            
            <p className="text-md">
              I know it's a pain but I promise it'll be worth it.
            </p>
            
            <p className="text-md">
              So check your email now and click the confirm button. That way you'll be first in line to get the free ebook and learn all those juicy strategies for growing your business.
            </p>
            
            <div className="pt-6">
              <Button asChild className="bg-black-ebook hover:bg-gray-800">
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
