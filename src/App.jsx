import React from 'react';
import AddProject from "./components/AddProject";
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div>
      <h1>Gestion de Projets</h1>
      <AddProject />
      <ProjectList />
    </div>
  );
}

export default App;