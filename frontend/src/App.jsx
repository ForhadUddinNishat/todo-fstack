
import React from 'react'
import {Routes, Route} from "react-router"
import HomePage from "./pages/HomePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import NoteDetailPage from "./pages/NoteDetailPage.jsx"
import toast from "react-hot-toast"

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24
        [background:radial-gradient(105%_105%_at_40%_10%,#000_60%,#00FF9D40_100%)]"></div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/create" element={<CreatePage/>}></Route>
        <Route path="/note/:id" element={<NoteDetailPage/>}></Route>

      </Routes>
    </div>
  )
}

export default App