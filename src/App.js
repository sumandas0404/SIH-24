import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MyProfilePage from './pages/MyProfilePage';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyDashboard from './pages/MyDashboard'; // Import the new page
import Home from './pages/Home';
import CostCalculate from './pages/CostCalculator';
import TrackingParcel from './pages/TrackingParcel';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyProfilePage />} /> {/* Default page */}
          <Route path="my-profile" element={<MyProfilePage />} />
          <Route path="settings" element={<Settings />} />
          <Route path="my-dashboard" element={<MyDashboard />} /> {/* New page */}
          <Route path="cost-calculate" element={<CostCalculate />} /> {/* New page */}
          <Route path="/dashboard/tracking-parcel" element={<TrackingParcel />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
