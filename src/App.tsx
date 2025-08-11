import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/base/reset.css';
import { NotificationSystem } from './components/system';
import { PageLoader } from './components/ui';

// Lazy loading das páginas
const Login = lazy(() => import('./pages/auth/Login'));
const EsqueceuSenha = lazy(() => import('./pages/auth/EsqueceuSenha'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Relatorios = lazy(() => import('./pages/dashboard/Relatorios'));
const Estatisticas = lazy(() => import('./pages/dashboard/Estatisticas'));
const Funcionarios = lazy(() => import('./pages/management/Funcionarios'));
const Maquinas = lazy(() => import('./pages/management/Maquinas'));
const Departamentos = lazy(() => import('./pages/management/Departamentos'));
const Perfil = lazy(() => import('./pages/management/Perfil'));
const LandingPage = lazy(() => import('./pages/public/LandingPage'));
const Sobre = lazy(() => import('./pages/public/Sobre'));
const Contato = lazy(() => import('./pages/public/Contato'));
const Diferenciais = lazy(() => import('./pages/public/Diferenciais'));

const App: React.FC = () => {
  return (
    <NotificationSystem>
      <Router>
        <div className="min-h-screen bg-white">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Diferenciais />} />
              <Route path="/login" element={<LandingPage />} />
              <Route path="/dashboard" element={<Login />} />
              <Route path="/estatisticas" element={<Dashboard />} />
              <Route path="/funcionarios" element={<Estatisticas />} />
              <Route path="/departamentos" element={<Funcionarios />} />
              <Route path="/maquinas" element={<Departamentos />} />
              <Route path="/perfil" element={<Maquinas />} />
              <Route path="/relatorios" element={<Relatorios />} />
              <Route path="/esqueceu-senha" element={<Perfil />} />
              <Route path="/diferenciais" element={<EsqueceuSenha />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </NotificationSystem>
  );
};

export default App;












