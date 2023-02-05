import { projects } from "../data/projects"
import hyphenateWords from "./hyphenateWords"

function findProject(str) {
  console.log("this is a string", str)
  const noSpaces = str.replace(" ", "")
  const foundProject = projects.find(project => {
    const thisTitle = hyphenateWords(project.title)
    console.log("this is thisTitle", thisTitle)
    return thisTitle === noSpaces
    

  
})
console.log("this is project title", foundProject)
return foundProject
}


export default findProject

