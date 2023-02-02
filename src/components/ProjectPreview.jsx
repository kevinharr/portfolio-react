import hyphenateWords from "../utilities/hyphenateWords"
import { Link } from "react-router-dom"

const ProjectPreview = (props) => {
  return (
    <div>
      <img
        src={props.image}
        alt={props.title}
      />
      <section>
     <Link to="/projects/:({hyphenateWords(props.title)})"> <button>Learn More</button></Link> 
      </section>     
    </div>
  )
}
  
export default ProjectPreview