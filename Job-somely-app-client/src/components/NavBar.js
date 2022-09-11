import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"
import { Container, Navbar, Nav, Image } from "react-bootstrap";


function NavBar() {
    let location = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    const logOutAndNavigate = () => {
        logOutUser();
        navigate("/");
    }



    return (
        <Navbar className="fw-bold bg-success" collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container >
                <Nav.Link href="/">
                    <Image src="/logo" height="30" className=" rounded d-inline-block align-text-top" alt="logo" />
                </Nav.Link>
                <Navbar.Brand href="/">Jobsomely</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey={location.pathname} className="me-auto">
                        <Nav.Link className="fw-bold" href="/jobs" >Jobs</Nav.Link>
                        <Nav.Link className="fw-bold" href="/companies" >Companies</Nav.Link>
                        <Nav.Link className="fw-bold" href="/candidates" >Candidates</Nav.Link>
                    </Nav>
                    <Nav>
                        {isLoggedIn && (
                            <>
                                {user.userType === "candidate" && (
                                    <Nav.Link href="/myprofile" >My Profile</Nav.Link>
                                )}
                                {user.userType === "company" && (
                                    <Nav.Link href="/mycompany" >My Company</Nav.Link>
                                )}
                                <div className="text-white my-2 mx-2 px-2">{user && user.name}</div>
                                <Nav.Link onClick={logOutAndNavigate}>Logout</Nav.Link>
                            </>
                        )}


                        {!isLoggedIn && (
                            <>
                                <Nav.Link href="/signup">Sign Up</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;





