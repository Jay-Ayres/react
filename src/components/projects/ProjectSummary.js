import React from 'react'

const ProjectSummary = ({project}) => {
    console.log("dentro do project summary");
    console.log(project);
    return (
        <div className="cad z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-tittle">{project.title}</span>
                <p>{project.authorLastName}</p>
                <p className="grey-text">{project.date}</p>
            </div>
        </div>
    )
}

export default ProjectSummary