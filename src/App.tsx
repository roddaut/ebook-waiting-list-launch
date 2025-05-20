
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeVariation from "./pages/HomeVariation";
import HomeV3 from "./pages/HomeV3";
import WaitingList from "./pages/WaitingList";
import NotFound from "./pages/NotFound";
import Confirmation from "./pages/Confirmation";
import Download from "./pages/Download";
import GoogleAnalytics from "./components/GoogleAnalytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GoogleAnalytics />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-v2" element={<HomeVariation />} />
          <Route path="/home-v3" element={<HomeV3 />} />
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
