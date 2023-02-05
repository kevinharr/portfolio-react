import hyphenateWords from "../utilities/hyphenateWords"
import { Link } from "react-router-dom"

const ProjectPreview = (props) => {
  const url = hyphenateWords(props.title)
  console.log("this is url", url)

  return (
    <div>
      <img
        src={props.image}
        alt={props.title}
      />
      <section>
        <h3>{props.title}</h3>
        <Link to={`/projects/${url}`}> 
        <button>
          Learn more
        </button>
        </Link>
      </section>     
    </div>
  )
}
  
export default ProjectPreview