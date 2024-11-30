import { Route, Routes } from "react-router-dom"
import { HomePage, CarDetailsPage, HomePage2, HomePage3 } from "./Pages"
import HomePage4 from "./Pages/HomePage4"
import HomePage5 from "./Pages/HomePage5"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car-details" element={<CarDetailsPage />} />
        <Route path="/home2" element={<HomePage2 />} />
        <Route path="/home3" element={<HomePage3 />} />
        <Route path="/home4" element={<HomePage4 />} />
        <Route path="/home5" element={<HomePage5 />} />
      </Routes>
    </div>
  )
}

export default App
