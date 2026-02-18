import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocsLayout from "@/components/DocsLayout";
import IntroductionPage from "./pages/IntroductionPage";
import ProblemStatementPage from "./pages/ProblemStatementPage";
import IVGBiologicalPage from "./pages/ivg/IVGBiologicalPage";
import IVGTechnicalPage from "./pages/ivg/IVGTechnicalPage";
import IVFBiologicalPage from "./pages/ivf/IVFBiologicalPage";
import IVFTechnicalPage from "./pages/ivf/IVFTechnicalPage";
import WombsBiologicalPage from "./pages/wombs/WombsBiologicalPage";
import WombsTechnicalPage from "./pages/wombs/WombsTechnicalPage";
import PipelinePage from "./pages/PipelinePage";
import SafetyPage from "./pages/SafetyPage";
import ImpactPage from "./pages/ImpactPage";
import TimelinePage from "./pages/TimelinePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <DocsLayout>
          <Routes>
            <Route path="/" element={<IntroductionPage />} />
            <Route path="/problem-statement" element={<ProblemStatementPage />} />
            <Route path="/ivg/biological" element={<IVGBiologicalPage />} />
            <Route path="/ivg/technical" element={<IVGTechnicalPage />} />
            <Route path="/ivf/biological" element={<IVFBiologicalPage />} />
            <Route path="/ivf/technical" element={<IVFTechnicalPage />} />
            <Route path="/artificial-wombs/biological" element={<WombsBiologicalPage />} />
            <Route path="/artificial-wombs/technical" element={<WombsTechnicalPage />} />
            <Route path="/pipeline" element={<PipelinePage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DocsLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
