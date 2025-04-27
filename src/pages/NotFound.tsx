
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <AlertTriangle size={48} className="text-accent mb-6" />
      
      <div className="code-block w-full max-w-2xl">
        <pre>
          <span className="code-keyword">throw new</span> <span className="code-function">Error</span>(<span className="code-string">"404 - Page not found"</span>);
          <br /><br />
          <span className="code-comment">// The page you are looking for doesn't exist or has been moved.</span>
          <br />
          <span className="code-comment">// Please check the URL or navigate back to the homepage.</span>
        </pre>
      </div>
      
      <div className="mt-8">
        <Link 
          to="/" 
          className="px-5 py-2 bg-accent hover:bg-accent-highlight text-white rounded transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
