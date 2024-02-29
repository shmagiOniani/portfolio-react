import React from 'react'
import { Col, Row } from 'antd'

// import fb from "../../assets/images/facebook-bright.png"
// import github from "../../assets/images/github-bright.png"
import "./header.scss"

function Header() {

  return (
    <header>
        <nav>
            <Row>
                <Col xs={2}>logo</Col>
                <Col xs={8}>body</Col>
                <Col xs={2}></Col>
            </Row>
        </nav>
    </header>
  )
}

export default Header