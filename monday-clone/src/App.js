import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import TicketPage from "./pages/TicketPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/ticket/:id" element={<TicketPage editMode={true}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
