import ProjectPreview from "./ProjectPreview"

const ProjectList = (props) => {
  return (
		<>
		<h1>Projects</h1>
		{props.projects.map(project =>
			<ul>
				<li  >
					<ProjectPreview 
					key={project.id} 
					title={project.title}
					image={project.image}
					/>	
				</li>
			</ul>
		)}
	</>
  )
}
  
export default ProjectList

