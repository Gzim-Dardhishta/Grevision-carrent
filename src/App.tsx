import { Route, Routes } from "react-router-dom"
import { HomePage, CarDetailsPage, HomePage2, HomePage3 } from "./Pages"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car-details" element={<CarDetailsPage />} />
        <Route path="/home2" element={<HomePage2 />} />
        <Route path="/home3" element={<HomePage3 />} />
      </Routes>
    </div>
  )
}

export default App
