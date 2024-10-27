import { Routes, Route } from 'react-router-dom';
import './App.css';
import PrincipalLayout from './pages/PagesLayouts/PrincipalLayout';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import DepartmentPage from './pages/DepartmentPage/DepartmentPage';
import EventsPage from './pages/EventsPage/EventsPage';
import Error404 from './pages/Error404/Error404';
import FAQ from './components/FAQ/FAQ';
import ContactUs from './components/ContactUs/ContactUs';
function App() {
  return (
    <Routes>
      <Route path="/" element={<PrincipalLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="department" element={<DepartmentPage />} />
        <Route path="events" element={<EventsPage />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
