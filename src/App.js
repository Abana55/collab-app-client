// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Connections from './pages/Connections/Connections';
import ProjectWall from './components/ProjectWall/ProjectWall';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Footer from './components/Footer/Footer'
// import Navbar from './components/Navbar/NavBar.js';
// import Login from './components/Login';
import { dummyProjects } from './components/dummyData'; // Import dummy data

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState('demo'); // Simulated authentication
  const [projects, setProjects] = useState(dummyProjects);

  const handleLogin = (username) => {
    setAuthenticatedUser(username);
  };

  const handleLogout = () => {
    setAuthenticatedUser(null);
  };

  const handleAddProject = (newProject) => {
    // In a real application, you might want to generate a unique ID for the new project
    setProjects((prevProjects) => [...prevProjects, { ...newProject, id: Date.now() }]);
  };

  const handleEditProject = (editedProject) => {
    // Find the project in the array and update its details
    // const updatedProjects = projects.map((project) =>
    //   project.id === editedProject.id ? editedProject : project
    // );
    // setProjects(updatedProjects);
  };

  const handleDeleteProject = (projectId) => {
    // Filter out the project with the specified ID
    // const updatedProjects = projects.filter((project) => project.id !== projectId);
    // setProjects(updatedProjects);
  };

  // const PrivateRoute = ({ component: Component, ...rest }) => (
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       authenticatedUser ? (
  //         <Component {...props} />
  //       ) : (
  //         <Redirect to="/login" />
  //       )
  //     }
  //   />
  // );

  return (
      <Router>
        <Routes>
        {/* {authenticatedUser && <Navbar onLogout={handleLogout} />} */}
        <Route path="/login">
          {/* {authenticatedUser ? <Redirect to="/" /> : <Login onLogin={handleLogin} />} */}
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connections" component={Connections} />
        <Route
          path="/projects"
          exact
          // component={() => <ProjectWall projects={projects} onAddProject={handleAddProject} />}
        />
        <Route
          path="/projects/:id"
          component={(props) => (
            <ProjectDetails
              {...props}
              // project={projects.find(
              //   (project) => project.id === parseInt(props.match.params.id)
              // )}
              onEditProject={handleEditProject}
              onDeleteProject={handleDeleteProject}
            />
          )}
        />
        </Routes>
        <Footer/>
    </Router>
    
  );
}

export default App;
