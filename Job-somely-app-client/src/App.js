import "./custom.scss";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import JobsListPage from "./pages/JobsListPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import CompaniesListPage from "./pages/CompaniesList";
import CompanyDetailsPage from "./pages/CompanyDetails";
import CandidatesListPage from "./pages/CandidatesListPage";
import CandidateDetailsPage from "./pages/CandidateDetails";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AddEditCandidate from "./components/AddEditCandidate";
import AddEditCompany from "./components/AddEditCompany";
import AddJob from "./components/AddJob";
import EditJobPage from "./pages/EditJobPage";


function App() {

  return (
    <div className="App d-flex flex-column min-vh-100">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsListPage />} />
        <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
        <Route path="/companies" element={<CompaniesListPage />} />
        <Route path="/companies/:companyId" element={<CompanyDetailsPage />} />
        <Route path="/candidates" element={<CandidatesListPage />} />
        <Route path="/candidates/:candidateId" element={<CandidateDetailsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/myprofile" element={<AddEditCandidate />} />
        <Route path="/mycompany" element={<AddEditCompany />} />
        <Route path="/jobs/create" element={<AddJob />} />
        <Route path="/jobs/edit/:jobId" element={<EditJobPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;