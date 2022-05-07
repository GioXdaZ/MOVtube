import React, { useState } from "react"
import {
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasTitle,
  OffcanvasBody,
} from "react-bootstrap"
import { Logo, HomeIcon, MenuIcon, ExploreIcon, ShortsIcon, SubsIcon } from "./Icons"
import "./Sidebar.css"

export function Sidebar() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button className="button-menu" variant="dark" onClick={handleShow}>
        <MenuIcon />
      </Button>

      <Offcanvas className="background-menu" show={show} onHide={handleClose}>
        <div className="head-menu">
          <Button
            className="button-menu-open"
            variant="dark"
            onClick={handleClose}
          >
            <MenuIcon />
          </Button>
          <div className="logo-menu">
            <Logo />
          </div>
        </div>
        <div className="container-sidebar">
          <Button className="home-button">
            <HomeIcon />
            Principal
          </Button>
          <Button className="home-button">
            <ExploreIcon />
            Explorar
          </Button>
          <Button className="home-button">
            <ShortsIcon />
            Shrots
          </Button>
          <Button className="home-button">
            <SubsIcon />
            Suscripciones
          </Button>
        </div>
      </Offcanvas>
    </>
  )
}
