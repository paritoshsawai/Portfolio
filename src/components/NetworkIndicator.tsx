
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NetworkIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [requestInfo, setRequestInfo] = useState({
    method: 'GET',
    path: '',
    status: '200 OK',
    time: '200ms'
  });
  const location = useLocation();

  useEffect(() => {
    // Simulate network request on route change
    setIsVisible(true);
    
    // Get the current page name from the path
    const pageName = location.pathname === '/' 
      ? 'home'
      : location.pathname.substring(1);
    
    setRequestInfo({
      method: 'GET',
      path: `/portfolio/${pageName}`,
      status: '200 OK',
      time: '200ms'
    });
    
    // Hide after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [location]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-sidebar/80 rounded-md border border-border shadow-lg px-3 py-2 text-xs font-mono">
      <div className="flex items-center gap-3">
        <span className="text-green-500">{requestInfo.method}</span>
        <span>{requestInfo.path}</span>
        <span className="text-green-500">{requestInfo.status}</span>
        <span className="text-sidebar-foreground/70">{requestInfo.time}</span>
      </div>
    </div>
  );
};

export default NetworkIndicator;
