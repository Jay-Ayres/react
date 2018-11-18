import React from 'react'
import ProjectSumary from './ProjectSummary'
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    console.log('na lista de projetos');
    console.log(projects);
    return(
        <div className="project-list section">
        { projects && projects.map(project => {
          return (
            <Link to={'/project/'+project.id}  key={project.id} >
              <ProjectSumary project={project}/>
            </Link>
          )
        })}  
      </div>
    )
}

export default ProjectList