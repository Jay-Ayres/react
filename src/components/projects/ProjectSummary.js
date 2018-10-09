import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="cad z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-tittle">{project.tittle}</span>
                <p>Posted by the Net Ninja</p>
                <p className="grey-text">today</p>
            </div>
        </div>
    )
}

export default ProjectSummary