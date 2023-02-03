import hyphenateWords from "../utilities/hyphenateWords"
import { Link } from "react-router-dom"

const ProjectPreview = (props) => {
  const url = hyphenateWords(props.title)

  return (
    <div>
      <img
        src={props.image}
        alt={props.title}
      />
      <section>
        <Link to={`/${url}`}> 
        <button>
          Learn more
        </button>
        </Link>
      </section>     
    </div>
  )
}
  
export default ProjectPreview