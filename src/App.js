import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Context from "./pages/Context";
import Ref from "./pages/Ref";
import Reducer from "./pages/Reducer";
import Callback from "./pages/Callback";
import Memo from "./pages/Memo";
import NoPage from "./pages/NoPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="context" element={<Context />} />
          <Route path="ref" element={<Ref />} />
          <Route path="reducer" element={<Reducer />} />
          <Route path="callback" element={<Callback />} />
          <Route path="memo" element={<Memo />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
