import { useSelector } from "react-redux";
import {
  Navbar,
  Nav,
  Image,
  Dropdown,
  Spinner,
  ProgressBar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import defaultUserPic from "../assets/user.png";
import { userSelectors } from "../redux/selectors";

const AppNavBar = () => {
  const isLoggedIn = useSelector(userSelectors.selectLoggedIn);
  const username = useSelector(userSelectors.selectName);
  const profilePic = useSelector(userSelectors.selectProfilePic);
  return (
    <Navbar bg="light" sticky="top" className="py-1">
      <Navbar.Brand className="py-2 px-3">
        <Link to="/">
          <Image src={logo} height="30" />
        </Link>
      </Navbar.Brand>

      <Navbar.Collapse className="justify-content-end">
        {isLoggedIn ? (
          <>
            <Nav>
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link}>
                  My Editor{" "}
                  <Spinner animation="border" size="sm" aria-hidden="true" />
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                  <Dropdown.Header>Testing "sss"...</Dropdown.Header>
                  <Dropdown.ItemText>
                    <ProgressBar animated now={45} />
                  </Dropdown.ItemText>
                  <Dropdown.Item>Stop Testing</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Recent Answers:</Dropdown.Header>
                  <Dropdown.Item>Another action</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link> Ask Question</Nav.Link>
            </Nav>

            <Dropdown className="px-3">
              <Dropdown.Toggle as={Nav.Link} bsPrefix="p-0">
                <Image src={profilePic || defaultUserPic} height="30" />
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight>
                <Dropdown.Header>{username}</Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item>My Profile</Dropdown.Item>
                <Dropdown.Item>Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ) : (
          <Nav className="px-3">
            <Nav.Link as={Link} to="/login">Log in/Sign Up</Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavBar;
