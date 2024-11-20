import { Route, Routes } from "react-router-dom"
import { HomePage } from "./Pages"
import CarDetailsPage from "./Pages/CarDetailsPage"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car-details" element={<CarDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
