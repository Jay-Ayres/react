import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div>
      <div className="container section project-details">
         <div className="card-content">
            <span className="card-tittle">Project Title - {id} </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
         </div>
         <div className="card-action gret lighten-4 grey-text">
            <div>Posted by The Net Ninja</div>
            <div>today</div>
         </div>        
      </div>
    </div>
  )
}

export default ProjectDetails
