import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeV1 from "./pages/HomeV1";
import HomeVariation from "./pages/HomeVariation";
import HomeV21 from "./pages/HomeV2-1";
import HomeV3 from "./pages/HomeV3";
import HomeV4 from "./pages/HomeV4";
import HomeV5 from "./pages/HomeV5";
import HomeV6 from "./pages/HomeV6";
import HomeV7 from "./pages/HomeV7";
import NotFound from "./pages/NotFound";

// Expert pages
import MattGiaro from "./pages/experts/MattGiaro";
import TomKuegler from "./pages/experts/TomKuegler";
import SinemGunel from "./pages/experts/SinemGunel";
import DavidMcIlroy from "./pages/experts/DavidMcIlroy";
import MarkWils from "./pages/experts/MarkWils";
import NiharikaaSodhi from "./pages/experts/NiharikaaSodhi";
import EvChapman from "./pages/experts/EvChapman";
import ChrisStanley from "./pages/experts/ChrisStanley";
import RodneyDaut from "./pages/experts/RodneyDaut";
import JariRoomer from "./pages/experts/JariRoomer";
import KarenCherry from "./pages/experts/KarenCherry";
import LandonPoburan from "./pages/experts/LandonPoburan";
import LeoQuinn from "./pages/experts/LeoQuinn";
import RussellNohelty from "./pages/experts/RussellNohelty";
import AnaCalin from "./pages/experts/AnaCalin";
import KevonCheung from "./pages/experts/KevonCheung";
import PhilipHofmacher from "./pages/experts/PhilipHofmacher";
import IanBotes from "./pages/experts/IanBotes";
import ClaudiaFaith from "./pages/experts/ClaudiaFaith";
import JoshSpector from "./pages/experts/JoshSpector";
import KristinaGod from "./pages/experts/KristinaGod";
import MichaelSimmons from "./pages/experts/MichaelSimmons";
import RobertPlank from "./pages/experts/RobertPlank";
import TemplateExpert from "./pages/experts/TemplateExpert";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/home-v1" element={<HomeV1 />} />
          <Route path="/home-v2" element={<HomeVariation />} />
          <Route path="/home-v2-1" element={<HomeV21 />} />
          <Route path="/home-v3" element={<HomeV3 />} />
          <Route path="/home-v4" element={<HomeV4 />} />
          <Route path="/home-v5" element={<HomeV5 />} />
          <Route path="/home-v6" element={<HomeV6 />} />
          <Route path="/home-v7" element={<HomeV7 />} />
          
          {/* Expert pages with new routing structure */}
          <Route path="/experts/template" element={<TemplateExpert />} />
          <Route path="/experts/matt-giaro" element={<MattGiaro />} />
          <Route path="/experts/tom-kuegler" element={<TomKuegler />} />
          {/* Redirect for alternate spelling */}
          <Route path="/experts/tom-kueglar" element={<Navigate to="/experts/tom-kuegler" replace />} />
          <Route path="/experts/sinem-gunel" element={<SinemGunel />} />
          <Route path="/experts/david-mcilroy" element={<DavidMcIlroy />} />
          <Route path="/experts/mark-wils" element={<MarkWils />} />
          <Route path="/experts/niharikaa-sodhi" element={<NiharikaaSodhi />} />
          <Route path="/experts/ev-chapman" element={<EvChapman />} />
          <Route path="/experts/chris-stanley" element={<ChrisStanley />} />
          <Route path="/experts/rodney-daut" element={<RodneyDaut />} />
          <Route path="/experts/jari-roomer" element={<JariRoomer />} />
          <Route path="/experts/karen-cherry" element={<KarenCherry />} />
          <Route path="/experts/landon-poburan" element={<LandonPoburan />} />
          <Route path="/experts/leo-quinn" element={<LeoQuinn />} />
          <Route path="/experts/russell-nohelty" element={<RussellNohelty />} />
          <Route path="/experts/ana-calin" element={<AnaCalin />} />
          <Route path="/experts/kevon-cheung" element={<KevonCheung />} />
          <Route path="/experts/philip-hofmacher" element={<PhilipHofmacher />} />
          <Route path="/experts/ian-botes" element={<IanBotes />} />
          <Route path="/experts/claudia-faith" element={<ClaudiaFaith />} />
          <Route path="/experts/josh-spector" element={<JoshSpector />} />
          <Route path="/experts/kristina-god" element={<KristinaGod />} />
          <Route path="/experts/michael-simmons" element={<MichaelSimmons />} />
          <Route path="/experts/robert-plank" element={<RobertPlank />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
