import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import ViewTheProcess from "./pages/ViewTheProcess";
import React, { useState, useEffect } from "react";
import LoadingOverlay from "./components/custom/LoadingOverlay";
import ApplyNow from "./pages/ApplyNow";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Simulate loading time
    };

    handleRouteChange();
  }, [location]);

  return (
    <>
      {loading && <LoadingOverlay />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/apply" element={<ApplyNow />} />
        <Route path="/view-the-process" element={<ViewTheProcess />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}
export default App;
