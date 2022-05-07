import React from "react"
import "./App.css"
import { Logo } from "./components/Icons"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css'
import { Sidebar, CloseSidebarMenu } from "./components/Sidebar"
import { ScrollContainer } from "./components/ScrollContainer"

function App() {
  return (
    <div className="body-app">
      <div className="top-header">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="logo">
          <Logo />
        </div>
        <input className="search" placeholder="Search" />
        <button className="button-search">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>search</title>
            <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
          </svg>
        </button>
      </div>
      <div className="left-container">
        <CloseSidebarMenu />
      </div>
      <div className="scroll-container">
        <ScrollContainer />
      </div>
    </div>
  )
}

export default App
