import { projects } from "../data/projects"

function Projects() {
	return (
    <>
      <h1>Projects</h1>
      {projects.map(project =>
        <ul>
          <li key={project.id} >
            {project.title}
          </li>
        </ul>
      )}
    </>
  )
}
  
export default Projects