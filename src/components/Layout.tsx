
import { Outlet, useLocation, Link } from "react-router-dom";
import { Github, Linkedin, FileText, Home, User, Wrench, FolderClosed, Briefcase, GraduationCap, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  // Define the tabs for the VS Code interface
  const tabs = [
    { path: "/", label: "Home.js", icon: <Home size={16} /> },
    { path: "/about", label: "About.js", icon: <User size={16} /> },
    { path: "/skills", label: "Skills.js", icon: <Wrench size={16} /> },
    { path: "/projects", label: "Projects.js", icon: <FolderClosed size={16} /> },
    { path: "/experience", label: "Experience.js", icon: <Briefcase size={16} /> },
    { path: "/education", label: "Education.js", icon: <GraduationCap size={16} /> },
    { path: "/contact", label: "Contact.js", icon: <Mail size={16} /> },
  ];

  // Find the active tab
  const currentTab = tabs.find(tab => tab.path === location.pathname) || tabs[0];

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* VS Code Sidebar */}
      <aside className="vscode-sidebar">
        {/* Social links */}
        <div className="flex justify-center gap-3 py-3 border-b border-border">
          <a href="https://github.com/paritoshsawai" target="_blank" rel="noopener noreferrer" 
            className="text-sidebar-foreground hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/paritoshsawai" target="_blank" rel="noopener noreferrer"
            className="text-sidebar-foreground hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
        
        {/* Explorer section */}
        <div className="vscode-explorer-section">Explorer</div>
        
        {/* Navigation items */}
        <nav className="flex flex-col">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`vscode-sidebar-item ${location.pathname === tab.path ? 'active' : ''}`}
            >
              {tab.icon}
              {tab.label.replace('.js', '')}
            </Link>
          ))}
        </nav>
        
        {/* Spacer */}
        <div className="flex-1"></div>
        
        {/* Footer */}
        <div className="px-4 py-2 text-xs text-sidebar-foreground/70 border-t border-border">
          Paritosh Sawai © {new Date().getFullYear()}
        </div>
      </aside>
      
      {/* VS Code Tabs */}
      <div className="vscode-tabs">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`vscode-tab ${location.pathname === tab.path ? 'active' : ''}`}
          >
            {tab.icon}
            <span className="ml-2">{tab.label}</span>
          </Link>
        ))}
      </div>
      
      {/* Main content area */}
      <main className="vscode-content pb-[22px]">
        <div className="p-6 max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
      
      {/* Status bar */}
      <footer className="status-bar">
        <div className="flex items-center">
          <span className="mr-4">main</span>
          <span>Paritosh Sawai</span>
        </div>
        <div className="flex items-center">
          <span>JavaScript</span>
          <span className="mx-2">•</span>
          <span>UTF-8</span>
          <span className="mx-2">•</span>
          <span>Ln 1, Col 1</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
