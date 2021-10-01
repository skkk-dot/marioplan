import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div>
      <div className="container section project-detail">
        <div className="card z-depth-0">
          <div className="card-contain">
            <span className="card-title">Project Title-{id}</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              quidem doloribus repellat expedita asperiores veritatis esse
              voluptate, autem, cum rerum molestias nobis laboriosam quasi optio
              explicabo illum reiciendis distinctio blanditiis!
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            Posted By Me
            <div>1st October, 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
