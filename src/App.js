import LoginAdmin from "./admin/login/Login";
import CompanyLogin from "./company/Login"
import Home from "./user/home/Home";
// import Add_Company from "./admin/company/Add_Company";
// import Add_Question from "./admin/question/Add_Question"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Path from "./user/path/Path"
import Navbar from "./user/home/Navbar";
import Watchlist from "./user/watchlist/Watchlist"
import Exam from "./user/exam/Exam"
import Certification from "./user/certification/Certification"
import Login from "./user/login/Login";
import Register from "./user/login/Register";
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/path" element={<Path />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/certicate" element={<Certification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/campany/login" element={<CompanyLogin />} />
          {/* <Route path="/" element={<Login />} />
          
          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/admin/add_company" element={<Add_Company />} />
          <Route path="/admin/add_question" element={<Add_Question />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;