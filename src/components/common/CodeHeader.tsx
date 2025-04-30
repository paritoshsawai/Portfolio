
import React from 'react';

type CodeHeaderProps = {
  filename: string;
  language?: string;
};

const CodeHeader: React.FC<CodeHeaderProps> = ({ filename, language = 'TypeScript' }) => {
  return (
    <div className="flex items-center bg-sidebar/70 text-sidebar-foreground text-xs px-3 py-1 border-b border-border mb-4 rounded-t-md">
      <span className="mr-2">{filename}</span>
      <span className="ml-auto">{language}</span>
    </div>
  );
};

export default CodeHeader;
