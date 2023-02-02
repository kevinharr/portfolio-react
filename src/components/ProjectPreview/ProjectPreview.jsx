import projects from "../../pages/Projects"

const ProjectPreview = (props) => {
  return (
    <>
      <h1>Projects</h1>
      {props.projects.map(project =>
        <ul>
          <li key={project.id} >
            {project.title}
          </li>
        </ul>
      )}
    </>
  )
}
  
export default ProjectPreview