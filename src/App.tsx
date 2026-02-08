import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { PerspectiveDetail } from './pages/PerspectiveDetail/PerspectiveDetail';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="perspective/:id" element={<PerspectiveDetail />} />
          <Route path="perspectives" element={<div className="p-6">Perspectives Page (Coming Soon)</div>} />
          <Route path="tasks" element={<div className="p-6">Tasks Page (Coming Soon)</div>} />
          <Route path="documents" element={<div className="p-6">Documents Page (Coming Soon)</div>} />
          <Route path="reports" element={<div className="p-6">Reports Page (Coming Soon)</div>} />
          <Route path="users" element={<div className="p-6">Users & Roles Page (Coming Soon)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;