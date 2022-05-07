import { Button } from "react-bootstrap"
import ListGroup from "react-bootstrap/ListGroup"
import "./ScrollContainer.css"

export const ScrollContainer = () => {
  return (
    <div className="body-list">
      <ListGroup horizontal>
        <Button variant="secondary" className="btn-form">SMB OST</Button>
        <Button variant="secondary" className="btn-form">Chill Loffi</Button>
        <Button variant="secondary" className="btn-form">Rock Mix</Button>
        <Button variant="secondary" className="btn-form">Rock 80</Button>
        <Button variant="secondary" className="btn-form">Metal Mix</Button>
        <Button variant="secondary" className="btn-form">MOV001</Button>
        <Button variant="secondary" className="btn-form">DSCM00042</Button>
        <Button variant="secondary" className="btn-form">VID052</Button>
      </ListGroup>
    </div>
  )
}
