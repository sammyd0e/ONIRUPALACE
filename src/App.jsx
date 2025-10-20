import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Health } from "./pages/health";
import { HeritageHub } from "./pages/HERITAGEHUB.jsx";
import { Culture } from "./components/culture.jsx";
import { Empowerment } from "./components/empowerment.jsx";
import { ENviroment } from "./components/enviroment.jsx";
import Palace from "./components/palace.jsx";


function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/health" element={<Health />} />
          <Route path="/heritagehub" element={<HeritageHub />} />
          <Route path="/culture" element={<Culture/>} />
          <Route path="/empowerment" element={<Empowerment/>} />
          <Route path="/environment" element={<ENviroment/>} />  
          <Route path="/palace" element={<Palace/>} />      



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
