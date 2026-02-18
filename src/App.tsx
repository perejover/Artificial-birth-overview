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
import IVGCurrentPage from "./pages/ivg/IVGCurrentPage";
import IVGTechnologiesPage from "./pages/ivg/IVGTechnologiesPage";
import IVGRegulationsPage from "./pages/ivg/IVGRegulationsPage";
import IVFBiologicalPage from "./pages/ivf/IVFBiologicalPage";
import IVFTechnicalPage from "./pages/ivf/IVFTechnicalPage";
import IVFCurrentPage from "./pages/ivf/IVFCurrentPage";
import IVFTechnologiesPage from "./pages/ivf/IVFTechnologiesPage";
import IVFRegulationsPage from "./pages/ivf/IVFRegulationsPage";
import WombsBiologicalPage from "./pages/wombs/WombsBiologicalPage";
import WombsTechnicalPage from "./pages/wombs/WombsTechnicalPage";
import WombsCurrentPage from "./pages/wombs/WombsCurrentPage";
import WombsTechnologiesPage from "./pages/wombs/WombsTechnologiesPage";
import WombsRegulationsPage from "./pages/wombs/WombsRegulationsPage";
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
      <BrowserRouter>
        <DocsLayout>
          <Routes>
            <Route path="/" element={<IntroductionPage />} />
            <Route path="/problem-statement" element={<ProblemStatementPage />} />
            <Route path="/ivg/biological" element={<IVGBiologicalPage />} />
            <Route path="/ivg/technical" element={<IVGTechnicalPage />} />
            <Route path="/ivg/current" element={<IVGCurrentPage />} />
            <Route path="/ivg/technologies" element={<IVGTechnologiesPage />} />
            <Route path="/ivg/regulations" element={<IVGRegulationsPage />} />
            <Route path="/ivf/biological" element={<IVFBiologicalPage />} />
            <Route path="/ivf/technical" element={<IVFTechnicalPage />} />
            <Route path="/ivf/current" element={<IVFCurrentPage />} />
            <Route path="/ivf/technologies" element={<IVFTechnologiesPage />} />
            <Route path="/ivf/regulations" element={<IVFRegulationsPage />} />
            <Route path="/artificial-wombs/biological" element={<WombsBiologicalPage />} />
            <Route path="/artificial-wombs/technical" element={<WombsTechnicalPage />} />
            <Route path="/artificial-wombs/current" element={<WombsCurrentPage />} />
            <Route path="/artificial-wombs/technologies" element={<WombsTechnologiesPage />} />
            <Route path="/artificial-wombs/regulations" element={<WombsRegulationsPage />} />
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
