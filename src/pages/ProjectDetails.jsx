
import { useParams } from "react-router-dom"
import findProject from "../utilities/findProject"

function ProjectDetails  () {
    const { projectDetails } = useParams()
    const projectData = findProject(projectDetails)
  return (
    <>
      <h1>{projectData.title}</h1>
      <p>{projectData.description}</p>
      <img 
      src={projectData.image} alt={projectData.title} />
      <button>
        <a
        href={projectData.repositoryLink}
        target="_blank"
        rel="noreferrer"
        className="link-buttons"
        >
          GitHub Repo
        </a>
        </button>
      <button>
        <a
        href={projectData.deploymentLink}
        target="_blank"
        rel="noreferrer"
        className="link-buttons"
        >
          Open App
        </a>
        </button>
    </>
  )
}

export default ProjectDetails