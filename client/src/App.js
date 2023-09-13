import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import Register from "./Components/Forms/Register";
import Navbar from "./Components/Navbar/Navbar";

import Login from "./Components/Forms/Login";
import AccountDashboard from "./Components/Dahboard/AccountDashboard";
import AccountDetails from "./Components/Dahboard/AccountDetails";
import AddAccount from "./Components/Forms/AddAccount";
import AddTransaction from "./Components/Forms/AddTransaction";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-transaction/:id" element={<AddTransaction />} />
        <Route path="/dashboard" element={<AccountDashboard />} />
        <Route
          path="/account-details/:accountID"
          element={<AccountDetails />}
        />
        <Route path="/dashboard/accounts/create" element={<AddAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
