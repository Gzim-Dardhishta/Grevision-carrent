import { Route, Routes } from "react-router-dom"
import { HomePage, CarDetailsPage, HomePage2, HomePage3, HomePage4, HomePage5, HomePage6, CarListingPage } from "./Pages"
import SignUpPage from "./Pages/SignUpPage"

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car-details" element={<CarDetailsPage />} />
        <Route path="/home2" element={<HomePage2 />} />
        <Route path="/home3" element={<HomePage3 />} />
        <Route path="/home4" element={<HomePage4 />} />
        <Route path="/home5" element={<HomePage5 />} />
        <Route path="/home6" element={<HomePage6 />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/car-list" element={<CarListingPage />} />
      </Routes>
    </div>
  )
}

export default App
