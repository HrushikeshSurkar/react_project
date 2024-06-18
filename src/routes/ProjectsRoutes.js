import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HelloWorld from '../pages/project1/HelloWorld'

const ProjectsRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/hello_world" element={<HelloWorld />} />
      </Routes>
    </div>
  )
}

export default ProjectsRoutes
