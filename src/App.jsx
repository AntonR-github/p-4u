import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatWeDoPage from "./pages/WhatWeDoPage";
import OurStoryPage from "./pages/OurStoryPage";
import BoardPage from "./pages/BoardPage";
import ContactUsPage from "./pages/ContactUsPage";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourStory" element={<OurStoryPage />} />
          <Route path="/whatWeDo" element={<WhatWeDoPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
