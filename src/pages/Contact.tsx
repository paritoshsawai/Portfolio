
import React from 'react';
import CodeHeader from '../components/common/CodeHeader';
import ContactInfo from '../components/contact/ContactInfo';
import { useIsMobile } from '../hooks/use-mobile';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger
} from "@/components/ui/drawer";

const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <div className="py-8">
      {/* VS Code-like file header */}
      <CodeHeader filename="Contact.tsx" />
      
      <h1 className="text-3xl font-bold mb-8">
        <span className="code-keyword">async function</span> <span className="code-function">contactMe</span>() {'{'}
      </h1>
      
      <div className="flex justify-center">
        {/* Contact info - responsive */}
        {isMobile ? (
          <Drawer>
            <DrawerTrigger className="bg-sidebar mb-6 px-4 py-2 rounded-md flex items-center justify-center w-full">
              <span>View Contact Information</span>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                <ContactInfo />
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          <div className="max-w-xl w-full">
            <ContactInfo />
          </div>
        )}
      </div>
      
      <div className="mt-8">
        <span className="code-keyword">{'}'}</span>;
      </div>
      
      <div className="active-line pl-2 mt-6">
        <span className="code-comment">// I look forward to connecting with you!</span>
      </div>
    </div>
  );
};

export default Contact;
