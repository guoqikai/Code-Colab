import { Navbar, Nav, Image, Dropdown, Spinner, ProgressBar } from "react-bootstrap";
import logo from "../common/assets/logo.png";
import defaultUserPic from "../common/assets/user.png";

const AppNavBar = ({isLogin, userProfilePic,  }) => {
  return (
    <Navbar bg="light">
      <Navbar.Brand className="py-2 px-3" href="/">
        <Image src={logo} height="32" />
      </Navbar.Brand>

      <Navbar.Collapse className="justify-content-end">
        {!isLogin ? (
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
                  <Dropdown.Item>
                    Stop Testing
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Recent Answers:</Dropdown.Header>
                  <Dropdown.Item>Another action</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link> Ask Question</Nav.Link>
            </Nav>

            <Dropdown className="px-3">
              <Dropdown.Toggle as={Nav.Link} bsPrefix="p-0">
                <Image
                  src={userProfilePic || defaultUserPic}
                  height="32"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight>
                <Dropdown.Header>User01</Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item>My Profile</Dropdown.Item>
                <Dropdown.Item>Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ) : (
          <Nav className="px-3">
            <Nav.Link to="/login">Log in/Sign Up</Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavBar;
