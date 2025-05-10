
import { Outlet, useLocation, Link } from "react-router-dom";
import { Github, Linkedin, FileText, Home, User, Wrench, FolderClosed, Briefcase, GraduationCap, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/use-mobile";

const Layout = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
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

  // Function to handle navigation and close mobile menu
  const handleNavigate = () => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Mobile menu button - moved to top-left corner and only visible on mobile */}
      {isMobile && (
        <button 
          className="fixed top-2 left-3 z-30 p-2 bg-sidebar rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
        </button>
      )}
      
      {/* VS Code Sidebar - responsive */}
      <aside className={`vscode-sidebar transition-transform duration-300 ${isMobile && !mobileMenuOpen ? '-translate-x-full' : 'translate-x-0'}`}>
        {/* Social links */}
        <div className="flex justify-center gap-3 py-3 border-b border-border">
          <a href="https://github.com/paritoshsawai" target="_blank" rel="noopener noreferrer" 
            className="text-white hover:text-accent transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/paritoshsawai" target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:paritoshsawai@gmail.com" target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors">
            <Mail size={24} />
          </a>
        </div>
        
        {/* Explorer section */}
        <div className="vscode-explorer-section font-bold">Explorer</div>
        
        {/* Navigation items - Ensuring text is white */}
        <nav className="flex flex-col">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`vscode-sidebar-item ${location.pathname === tab.path ? 'active' : ''}`}
              onClick={handleNavigate}
            >
              {tab.icon}
              <span className="ml-2">{tab.label.replace('.js', '')}</span>
            </Link>
          ))}
        </nav>
        
        {/* Spacer */}
        <div className="flex-1"></div>
        
        {/* Footer */}
        <div className="px-4 py-2 text-xs text-white border-t border-border">
          Paritosh Sawai © {new Date().getFullYear()}
        </div>
      </aside>
      
      {/* Overlay to close sidebar on mobile when clicked outside */}
      {isMobile && mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-5"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* VS Code Tabs - adjusted for mobile with padding for sidebar button */}
      <div className={`vscode-tabs ${isMobile ? 'pl-14 pr-2' : 'pl-[240px]'} mt-0`}>
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`vscode-tab ${location.pathname === tab.path ? 'active' : ''}`}
          >
            {tab.icon}
            <span className="ml-2 truncate max-w-[80px] text-white">{tab.label}</span>
          </Link>
        ))}
      </div>
      
      {/* Main content area - adjusted for mobile and added top padding */}
      <main className={`vscode-content pb-[22px] pt-2 ${isMobile ? 'pl-0 mt-2' : 'pl-[240px]'}`}>
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
