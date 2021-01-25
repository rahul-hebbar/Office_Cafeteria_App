import { useRef, useState } from 'react';
import { Card, CardTitle, FormGroup, Form, Input, Button, Label, Alert } from 'reactstrap';
import Axios from "axios";

// Axios.defaults.baseURL = 'http://localhost:5000';

export default function LogCard(props) {
	const val = useRef(null);
	const [lab_text, setLabel] = useState("");

	const Submit = () => {
		const inp_val = val.current.value;
		if (inp_val !== "") {
			Axios.post("/api/login", { user_email: val.current.value })
				.then((resp) => {
					if (resp.data.status === "SUCCESS") props.setLogin([resp.data.user, resp.data.msg])
					else if (resp.data.status === "FAIL") setLabel(
						<Alert color='danger'>{resp.data.msg}</Alert>)
				}).catch((err) => {
					setLabel(<Alert color="danger">Connection Error! Try again Later</Alert>)
				})
		}
	}

	return (
		<Card body>
			<CardTitle tag="h5">Login</CardTitle>
			<Form>
				<FormGroup>
					<Input type="email" name={"email"} placeholder="Email" innerRef={val} />
				</FormGroup>
				<Button color="primary" onClick={Submit}>Login</Button>
				<div><Label style={{ padding: "10px" }} >{lab_text}</Label></div>
			</Form>
		</Card>
	);
}