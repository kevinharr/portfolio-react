

const ProjectPreview = (props) => {
  return (
    <>
      <h1>Projects</h1>
     <li>
       {props.project.title}
     </li>      
    </>
  )
}
  
export default ProjectPreview