import React from 'react'
import ProjectSumary from './ProjectSummary'

const ProjectList = ({projects}) => {
    console.log('teste');
    console.log(projects);
    return(
        <div className="project-list section">
        { projects && projects.map(project => {
          return (
            <ProjectSumary project={project} key={project.id} />
          )
        })}  
      </div>
    )
}

export default ProjectList