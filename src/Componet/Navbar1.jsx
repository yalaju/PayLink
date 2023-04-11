// import React from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "../Style/Navbar.css";
// import logo from "../Images/PayLink Logo.jpg";

// import NavDropdown from "react-bootstrap/NavDropdown";

// const Navbar1 = () => {

//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separatedlink
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets">Moredeets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Dankmemes
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Navbar1;

//.........................................

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Images/PayLink Logo.jpg";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
// import logo from '../Images/paylogo2.jpg'

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{
        // backgroundColor:"rgb(50,10,255)"
        // backgroundColor:"rgb(0,255,0)"
        // backgroundColor: "green",
        backgroundColor: "rgb(70, 233, 70)",
        // backgroundColor: "blue",
        // backgroundColor:"white"
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img
              src={logo}
              alt=""
              style={{
                width: "130px",
                // width: "20%",
                // paddingRight: "1%",
                borderRadius: "40px",
              }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <div> */}
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">
              {" "}
              <span style={{ color: "white" }}>Personal</span>{" "}
            </Nav.Link> */}
            {/* <NavDropdown
              id="collasible-nav-dropdown"
              className="NavDropdown"
              title="Personal"
            >
              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.1">
                investments
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.2">spend </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.3">audit</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.3"> save </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown> */}

            <div className="my-nav-flex">
              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  style={{
                    border: "none",
                    color: " #000099",
                    fontSize: "20px",
                    paddingLeft: "5px",
                    paddingTop: "2px",
                    paddingRight: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <b>Personal</b>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/investment">investments</Dropdown.Item>
                  <Dropdown.Item href="/spend">spend</Dropdown.Item>
                  <Dropdown.Item href="/aduit">audit</Dropdown.Item>
                  <Dropdown.Item href="/save">save</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  style={{
                    border: "none",
                    color: " #000099",
                    fontSize: "20px",
                    paddingLeft: "5px",
                    paddingTop: "2px",
                    backgroundColor: "transparent",
                  }}
                >
                  {" "}
                  <b>Company</b>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/about">About Us</Dropdown.Item>
                  <Dropdown.Item href="/contact">Contact Us</Dropdown.Item>
                  {/* <Dropdown.Item href="#/action-2">spend</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">audit</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">save</Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>

              {/* <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  style={{
                    border: "none",
                    color: " #000099",
                    fontSize: "20px",
                    paddingLeft: "5px",
                    paddingTop: "2px",
                    backgroundColor: "transparent",
                  }}
                >
                  {" "}
                  FAQs
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/investment">investments</Dropdown.Item>
                  <Dropdown.Item href="/spend">spend</Dropdown.Item>
                  <Dropdown.Item href="/aduit">audit</Dropdown.Item>
                  <Dropdown.Item href="/save">save</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <NavDropdown.Item
                href="#action/3.2"
                style={{
                  border: "none",
                  color: " #000099",
                  fontSize: "20px",
                  paddingLeft: "5px",
                  paddingTop: "2px",
                  backgroundColor: "transparent",
                }}
              >
                <b>FAQs</b>
              </NavDropdown.Item>
            </div>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <Link to="/login" className="nav4">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup" className="nav3">
                Signup
              </Link>
            </Nav.Link>
          </Nav>
          {/* </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

//.............................................................................................

// <Navbar className="navbar1" style={style} expand="lg">
//   <Container>
//     <Navbar.Brand href="#home">
// <Link to="/">
//   <img
//     src={logo}
//     alt=""
//     style={{
//       width: "20%",
//       // paddingRight: "1%",
//       borderRadius: "30px"
//     }}
//   />
// </Link>
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="me-auto">
//         <Link to="/forget" className="nav1">
//           {" "}
//           forggot_passwod{" "}
//         </Link>

//         {/* <Link className="nav2"> learn</Link> */}

//         <Link to="/signup" className="nav3">
//           {" "}
//           Signup{" "}
//         </Link>

//         <Link to="/login" className="nav4">
//           {" "}
//           Login{" "}
//         </Link>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>

//.................................................................................

// <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Container>
//     <Navbar.Brand href="#home">
//       <img
//         src={logo}
//         alt=""
//         style={{
//           width: "20%",
//           // paddingRight: "1%",
//           borderRadius: "30px",
//         }}
//       />
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//     <Navbar.Collapse id="responsive-navbar-nav">
//       <Nav className="me-auto">
//         <Nav.Link href="#features">Features</Nav.Link>
//         <Nav.Link href="#pricing">Pricing</Nav.Link>
//         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.2">
//             Another action
//           </NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/3.4">
//             Separated link
//           </NavDropdown.Item>
//         </NavDropdown>
//       </Nav>
//       <Nav>
//         <Nav.Link href="#deets">More deets</Nav.Link>
//         <Nav.Link eventKey={2} href="#memes">
//           Dank memes
//         </Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar> k;/7
