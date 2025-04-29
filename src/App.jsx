import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Training } from "./components";
import Summer from "./components/summer";
import Layout from "./Layout";
import Resume from "./components/Resume";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
