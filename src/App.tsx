import './App.css'
import Box from './components/Box.js'

function App() {

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
      {Array.from({length: 5}).map((_, index)=>(
        <Box key={index}/>
    ))}
      </div>
    </div>
  )
}

export default App
