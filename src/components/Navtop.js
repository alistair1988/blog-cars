import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

function Navtop() {
    return(
<Navbar>
<Navbar.Brand href="#home">Navbar with text</Navbar .Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
</Navbar.Collapse>

</Navbar>
    )
}

export default Navtop;