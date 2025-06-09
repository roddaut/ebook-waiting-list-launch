
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ExpertData } from "@/types/expert";

interface ExpertTemplateProps {
  expert: ExpertData;
}

const ExpertTemplate: React.FC<ExpertTemplateProps> = ({ expert }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Ebook
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <Avatar className="h-32 w-32 mx-auto mb-6 border-4 border-white shadow-lg">
              <AvatarImage src={expert.photo} alt={expert.name} />
              <AvatarFallback className="text-2xl">
                {expert.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold mb-4">{expert.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{expert.title}</p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              {expert.socialLinks.website && (
                <a 
                  href={expert.socialLinks.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Website
                </a>
              )}
              {expert.socialLinks.twitter && (
                <a 
                  href={expert.socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Twitter
                </a>
              )}
              {expert.socialLinks.linkedin && (
                <a 
                  href={expert.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">About {expert.name.split(' ')[0]}</h2>
              <p className="text-gray-700 leading-relaxed">{expert.bio}</p>
            </CardContent>
          </Card>

          {/* Expertise Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Expertise</h2>
              <div className="space-y-3">
                {expert.expertise.map((skill, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contribution Section */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Contribution to Profitable Playbooks</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{expert.contribution}</p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Want to learn more from {expert.name.split(' ')[0]}?</h3>
          <p className="text-gray-600 mb-6">
            This insight is just one of many valuable strategies in our complete ebook.
          </p>
          <Link to="/download">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Download the Complete Ebook
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpertTemplate;
