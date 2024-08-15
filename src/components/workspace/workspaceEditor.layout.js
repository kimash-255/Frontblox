import React from 'react';

const WorkspaceEditorLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-xl font-bold">Workspace Editor</h1>
      </header>
      <main className="flex-1 p-5">
        {children}
      </main>
    </div>
  );
};

export default WorkspaceEditorLayout;
