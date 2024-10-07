import React, { useEffect, useState } from 'react';
import { Outlet, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { InfoBeneficiario } from '../components/infoBeneficiario/InfoBeneficiario';
import { Drawer } from '../components/drawer/Drawer';
import { useHistory } from '../hooks/useHistory';

export const Home = () => {
  const navigate = useNavigate();
  const navigateHistory = useHistory();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();

  const id = searchParams.get('id');
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (path, index) => {
    // navigate(path);
    navigateHistory(path);
    setActiveTab(index);
  };

  const tabs = [
    {
      label: 'Reembolsos',
      path: '/',
    },
    {
      label: 'Previas',
      path: '/previas',
    },
  ];

  useEffect(() => {
    if (id && pathname === '/previas') {
      setActiveTab(1);
    }
  }, [id]);

  return (
    <div className="modulo-historico-reembolso-container d-flex flex-column">
      <Header />
      <div className="container-un-tabs">
        {tabs.map(({ label, path }, index) => (
          <div
            className={`btn-tab ${index === activeTab && 'active'}`}
            id={`btn-tab-${index}`}
            key={label}
            onClick={() => handleClick(path, index)}
          >
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="d-flex flex-column gap-8 historico-reembolso-content">
        <Outlet />
      </div>
    </div>
  );
};
