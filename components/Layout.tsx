import { useState } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

type LayoutProps = {
    children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Next Layout Demo</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/profile">Profile</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            {children}
        </>
    );
}

export default Layout
