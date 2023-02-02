import { projects } from "../data/projects"
import ProjectPreview from "./ProjectPreview/ProjectPreview"

const ProjectList = (props) => {
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
  
export default ProjectList

