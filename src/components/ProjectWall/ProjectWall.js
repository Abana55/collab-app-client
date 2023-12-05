// components/ProjectWall.js
import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectWall.scss';

const ProjectWall = () => {
  const projects = [
    {
      id: 1,
      title: 'Creative Collaboration',
      description: 'A project combining photography, design, and carpentry.',
      creator: 'Alex Rivera',
      imageUrl: 'https://example.com/project1.jpg',
    },
    {
      id: 2,
      title: 'Innovative Business Venture',
      description: 'Collaboration between business professionals and artists.',
      creator: 'Jane Doe',
      imageUrl: 'https://example.com/project2.jpg',
    },
    {
      id: 3,
      title: 'Artistic Expressions',
      description: 'An art project exploring various forms of visual expression.',
      creator: 'Elena Rodriguez',
      imageUrl: 'https://example.com/project3.jpg',
    },
    {
      id: 4,
      title: 'Music Fusion',
      description: 'Collaboration between musicians and sound engineers for a unique sound experience.',
      creator: 'Carlos Martinez',
      imageUrl: 'https://example.com/project4.jpg',
    },
    {
      id: 5,
      title: 'Dance Collaboration',
      description: 'Project bringing together dancers from different genres for a spectacular performance.',
      creator: 'Sophia Johnson',
      imageUrl: 'https://example.com/project5.jpg',
    },
    {
      id: 6,
      title: 'Tech and Design Fusion',
      description: 'Creators merging technology and design in unique ways.',
      creator: 'John Smith',
      imageUrl: 'https://example.com/project4.jpg',
    },
    {
      id: 7,
      title: 'Abstract Art Exploration',
      description: 'Artists experimenting with abstract forms and colors.',
      creator: 'Elena Rodriguez',
      imageUrl: 'https://example.com/project3.jpg',
    },
    {
      id: 8,
      title: 'Woodcraft Masterpiece',
      description: 'A collaboration between a carpenter and a designer crafting unique wooden pieces.',
      creator: 'Michael Carpenter',
      imageUrl: 'https://example.com/project6.jpg',
    },
    {
      id: 9,
      title: 'Lens and Timber Fusion',
      description: 'Carpentry and photography blending to create stunning visual stories.',
      creator: 'Sophia Photographer',
      imageUrl: 'https://example.com/project7.jpg',
    },
    // Add more projects as needed
  ];

    return (
      <div className="project-wall">
        <h2 className="project-wall__title">Project Wall</h2>
        <div className="project-wall__container">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProjectWall;