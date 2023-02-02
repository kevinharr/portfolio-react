import { projects } from "../data/projects"
import ProjectList from "../components/ProjectList"

function Projects() {
	return (
    <>
      <ProjectList
      projects={projects}
      />
    </>
  )
}
  
export default Projects