
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Aswin from "./pages/Home";
import Academics from "./pages/Academics";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import PersonalInfo from "./pages/PersonalInfo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="*" element={<Aswin />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            {/* <Route path="/certificates" element={<Certificates />} /> */}
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/NotFound" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
