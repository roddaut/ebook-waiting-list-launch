
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeVariation from "./pages/HomeVariation";
import HomeV21 from "./pages/HomeV2-1";
import HomeV3 from "./pages/HomeV3";
import HomeV4 from "./pages/HomeV4";
import HomeV5 from "./pages/HomeV5";
import HomeV6 from "./pages/HomeV6";
import HomeV7 from "./pages/HomeV7";
import WaitingList from "./pages/WaitingList";
import NotFound from "./pages/NotFound";
import Confirmation from "./pages/Confirmation";
import Download from "./pages/Download";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-v2" element={<HomeVariation />} />
          <Route path="/home-v2-1" element={<HomeV21 />} />
          <Route path="/home-v3" element={<HomeV3 />} />
          <Route path="/home-v4" element={<HomeV4 />} />
          <Route path="/home-v5" element={<HomeV5 />} />
          <Route path="/home-v6" element={<HomeV6 />} />
          <Route path="/home-v7" element={<HomeV7 />} />
          <Route path="/waiting-list" element={<WaitingList />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/download" element={<Download />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
