const fs = require('fs');
const path = require('path');

// Base HTML template
const createHTMLTemplate = (title, content, additionalHead = '') => `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8NQZT2640Z"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8NQZT2640Z');
    </script>
    
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="Learn how to earn from your writing from top writers" />
    <meta name="author" content="Rodney Daut" />
    
    <link rel="icon" href="/lovable-uploads/92871579-114e-4f5c-a37f-2ed5b2deb1ac.png" type="image/png" />

    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="Learn how to earn from your writing from top writers" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
    
    <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      :root {
        --background: 0 0% 100%;
        --foreground: 222.2 84% 4.9%;
        --card: 0 0% 100%;
        --card-foreground: 222.2 84% 4.9%;
        --popover: 0 0% 100%;
        --popover-foreground: 222.2 84% 4.9%;
        --primary: 222.2 47.4% 11.2%;
        --primary-foreground: 210 40% 98%;
        --secondary: 210 40% 96.1%;
        --secondary-foreground: 222.2 47.4% 11.2%;
        --muted: 210 40% 96.1%;
        --muted-foreground: 215.4 16.3% 46.9%;
        --accent: 210 40% 96.1%;
        --accent-foreground: 222.2 47.4% 11.2%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 210 40% 98%;
        --border: 214.3 31.8% 91.4%;
        --input: 214.3 31.8% 91.4%;
        --ring: 222.2 84% 4.9%;
        --radius: 0.5rem;
      }

      body {
        background-color: hsl(var(--background));
        color: hsl(var(--foreground));
      }

      .hero-gradient {
        background-color: #e6f2ff;
      }

      .formkit-form {
        width: 100%;
        max-width: 28rem;
        margin-left: auto;
        margin-right: auto;
        background-color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        padding: 1.5rem;
      }

      .formkit-fields[data-stacked="false"] {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      @media (min-width: 768px) {
        .formkit-fields[data-stacked="false"] {
          flex-direction: row;
        }
      }

      .formkit-fields[data-stacked="true"] {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .formkit-field {
        flex-grow: 1;
      }

      .formkit-input {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #d1d5db;
        border-radius: 0.375rem;
      }

      .formkit-input:focus {
        outline: none;
        border-color: #1A1F2C;
        box-shadow: 0 0 0 2px rgba(26, 31, 44, 0.1);
      }

      .formkit-submit {
        background-color: #1A1F2C;
        color: white;
        font-weight: bold;
        padding: 0.75rem 1.5rem;
        border-radius: 0.375rem;
        border: none;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .formkit-submit:hover {
        background-color: #374151;
      }

      .formkit-fields[data-stacked="true"] .formkit-submit {
        width: 100%;
      }
    </style>
    ${additionalHead}
</head>
<body>
    ${content}
</body>
</html>`;

// Create directories
const createDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Shared components HTML
const createHeroSection = () => `
<section class="hero-gradient py-12 md:py-20">
  <div class="container mx-auto px-4">
    <div class="text-center mb-8">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-black mb-4 mx-auto max-w-5xl">
        They Turned Content Into Income. So Can You.
      </h1>
      <p class="text-xl text-gray-800 max-w-2xl mx-auto">
        Inside this free ebook, real coaches and creators share how they grew their audience and their income—one piece of content at a time.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 items-start">
      <div>
        <p class="text-lg text-gray-800 mb-4">
          Don't waste time with generic advice.
        </p>
        <p class="text-lg text-gray-800 mb-4">
          This free ebook gives you real-world strategies from creators using content to build income online—right now.
        </p>
        <p class="text-lg text-gray-800 mb-4">
          Each chapter is a 10-minute mini-masterclass packed with practical insights from coaches, consultants, and creators who turn content into clients and followers into freedom.
        </p>
        
        <div class="mb-6">
          <p class="text-lg text-gray-800 mb-3 font-medium">
            For example, you'll discover:
          </p>
          <ul class="space-y-2">
            <li class="text-gray-700 flex items-start gap-2">
              <span class="text-blue-600 font-bold">•</span>
              <span><strong>Kristina God</strong> - How the content triangle transforms one idea into multiple engagement formats</span>
            </li>
            <li class="text-gray-700 flex items-start gap-2">
              <span class="text-blue-600 font-bold">•</span>
              <span><strong>Niharikaa Sodhi</strong> - The outlining hack that eliminates writer's block</span>
            </li>
            <li class="text-gray-700 flex items-start gap-2">
              <span class="text-blue-600 font-bold">•</span>
              <span><strong>Tom Kueglar</strong> - How to get AI to give you instant feedback to improve your writing</span>
            </li>
            <li class="text-gray-700 flex items-start gap-2">
              <span class="text-blue-600 font-bold">•</span>
              <span><strong>Josh Spector</strong> - The inbox mining technique that reveals endless content opportunities</span>
            </li>
          </ul>
          
          <p class="text-lg text-gray-800 mt-4">
            And even more described below ...
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-[90%] mt-8">
          <h3 class="text-xl font-bold text-center mb-4">Get Your Free eBook</h3>
          <script async data-uid="bdcb6ba9da" src="https://creative-writer-8680.ck.page/bdcb6ba9da/index.js"></script>
          <p class="text-center text-sm text-gray-500 mt-3">We respect your email privacy. Unsubscribe anytime.</p>
        </div>
      </div>
      
      <div class="flex justify-center items-center">
        <div class="w-full max-w-[380px]">
          <div class="relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg">
            <img src="/lovable-uploads/e027d78c-6c7e-44e0-a6db-e81c35d9ef13.png" alt="Profitable Playbooks for Writers eBook Cover" class="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;

console.log('Building HTML files...');

// Create dist directory
createDir('dist');
createDir('dist/experts');

// Build main pages
const pages = [
  { path: '', file: 'index.html', title: 'Profitable Playbooks for Writers' },
  { path: 'home-v1', file: 'home-v1.html', title: 'Profitable Playbooks for Writers - V1' },
  { path: 'home-v2', file: 'home-v2.html', title: 'Profitable Playbooks for Writers - V2' },
  { path: 'home-v2-1', file: 'home-v2-1.html', title: 'Profitable Playbooks for Writers - V2.1' },
  { path: 'home-v3', file: 'home-v3.html', title: 'Profitable Playbooks for Writers - V3' },
  { path: 'home-v4', file: 'home-v4.html', title: 'Profitable Playbooks for Writers - V4' },
  { path: 'home-v5', file: 'home-v5.html', title: 'Profitable Playbooks for Writers - V5' },
  { path: 'home-v6', file: 'home-v6.html', title: 'Profitable Playbooks for Writers - V6' },
  { path: 'home-v7', file: 'home-v7.html', title: 'Profitable Playbooks for Writers - V7' },
  { path: 'waiting-list', file: 'waiting-list.html', title: 'Waiting List - Profitable Playbooks' },
  { path: 'confirmation', file: 'confirmation.html', title: 'Thank You - Profitable Playbooks' },
  { path: 'download', file: 'download.html', title: 'Download - Profitable Playbooks' }
];

// Expert data
const experts = [
  { slug: 'template', name: 'Template Expert', photo: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face', bullets: ['The experimental approach that transforms your content strategy completely', 'Why testing new layouts creates better user engagement and conversions', 'How to implement changes systematically without breaking existing functionality'] },
  { slug: 'matt-giaro', name: 'Matt Giaro', photo: '', bullets: ['The counterintuitive productivity secret that makes work feel effortless', 'The surprising way constraints unlock your most original thinking', 'How combining templates with AI dramatically increases productivity while maintaining your unique perspective'] },
  { slug: 'tom-kuegler', name: 'Tom Kuegler', photo: '/lovable-uploads/50807cc7-a8a6-448e-b076-8f4b773adbc1.png', bullets: ['The training method that allows AI to think exactly like you do', 'Why getting 70% of your expertise automated creates exponential impact', 'The "magic trick" effect that makes clients instantly value your expertise'] },
  { slug: 'sinem-gunel', name: 'Sinem Günel', photo: '/lovable-uploads/8a277013-7588-484e-8b8e-e43d87927bde.png', bullets: ['The counterintuitive pricing strategy that removes sales anxiety while maximizing revenue', 'The unexpected customer journey that leads to the highest coaching conversions', 'The simple question that transforms discovery calls into sales conversations'] },
  { slug: 'david-mcilroy', name: 'David McIlroy', photo: '/lovable-uploads/dc1cc9c5-9476-4222-8dc7-5894034df020.png', bullets: ['The counterintuitive business model that makes selling feel natural and authentic', 'Why the "expert trap" keeps most consultants stuck at low rates', 'The positioning shift that transforms you from vendor to strategic partner'] },
  // Add all other experts here with their data...
];

console.log('HTML build complete!');