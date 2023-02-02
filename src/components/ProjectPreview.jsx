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
      <button><Link to="/projects/:hyphenateWords({props.title})">Learn More</Link> </button>
      </section>     
    </div>
  )
}
  
export default ProjectPreview