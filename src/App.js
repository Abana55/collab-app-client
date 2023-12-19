// App.js
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Connections from './pages/Connections/Connections';
import ProjectWall from './components/ProjectWall/ProjectWall';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/NavBar.js';
import SignupPage from './pages/SignupPage/SignupPage';
import Login from './pages/LoginPage/LoginPage'; // Assuming you have a Login page component
import { dummyProjects } from './components/dummyData';

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
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
  // Private Route Component
  const PrivateRoute = ({ children }) => {
    return authenticatedUser ? children : <Navigate to="/signup" />;
  };

  return (
    <Router>
      <Navbar onLogout={() => setAuthenticatedUser(null)} isAuthenticated={authenticatedUser !== null} />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login onLogin={setAuthenticatedUser} />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path="/connections" element={
          <PrivateRoute>
            <Connections />
          </PrivateRoute>
        } />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
