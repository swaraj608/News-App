import { useState } from "react"
import Navbar from "./components/Navbar"
import Newsarea from "./components/Newsarea"  

const App = () => {
  const [category,setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsarea category={category}/>
    </div>
  )
}

export default App
