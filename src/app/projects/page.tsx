'use client'

import projects from './projects.json';

import ProjectCard from './project-card';

export default function ProjectsPage() {
  return projects.map(project => (
    <ProjectCard data={project}/>
  ))
}