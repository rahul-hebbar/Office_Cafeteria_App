import { useState } from "react";
import {
	Navbar,
	NavbarBrand,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Col,
	Row,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Label
} from 'reactstrap';
import RegCard from "./RegCard";
import LogCard from "./LogCard";
import { BoxArrowRight, PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function NavComponent(props) {

	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	const logout = () => {
		props.setLogin(null)
		window.location.href = "/menu";
	}

	const Regmodal = () => {
		if (props.login === null) {
			return (
				<>
					<Button color="primary" onClick={toggle}>Login/SignUp</Button>
					<Modal isOpen={modal} toggle={toggle} size="xl" className="text-center"
						centered={true} unmountOnClose={false}>
						<ModalHeader toggle={toggle}>Registration/Login Page</ModalHeader>
						<ModalBody>
							<Row>
								<Col sm="7">
									<RegCard />
								</Col>
								<Col sm="5">
									<LogCard setLogin={props.setLogin} />
								</Col>
							</Row>
						</ModalBody>
					</Modal>
				</>
			)
		}
		else if (props.login[0] === "Admin") {
			return (
				<UncontrolledDropdown>
					<DropdownToggle><PersonCircle size={28} />
						<Label style={{ marginLeft: "10px" }}>Hi {props.login[0]}</Label>
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem>
							<Link to="/admin/dashboard">
								<Label> Dashboard </Label>
							</Link>
						</DropdownItem>
						<DropdownItem divider />
						<DropdownItem onClick={logout}>
							<BoxArrowRight size={28} />
							<Label style={{ marginLeft: "10px" }}>Logout</Label>
						</DropdownItem>
					</DropdownMenu>
				</UncontrolledDropdown>
			);
		}
		else {
			return (
				<UncontrolledDropdown>
					<DropdownToggle><PersonCircle size={28} />
						<Label style={{ marginLeft: "10px" }}>Hi {props.login[0]}</Label>
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem>
							<Link to="/profile">
								<Label> Profile </Label>
							</Link>
						</DropdownItem>
						<DropdownItem divider />
						<DropdownItem onClick={logout}><BoxArrowRight size={28} />
							<Label style={{ marginLeft: "10px" }}>Logout</Label>
						</DropdownItem>
					</DropdownMenu>
				</UncontrolledDropdown>
			)
		}
	}

	return (
		<Navbar light className="bar" style={{ backgroundColor: '#101820FF' }}>
			<NavbarBrand>
				<Link to='/menu'>
					<Label className="text-white">
						<h4>Office Cafeteria</h4>
					</Label>
				</Link>
			</NavbarBrand>
			<Regmodal />
		</Navbar>
	);
}