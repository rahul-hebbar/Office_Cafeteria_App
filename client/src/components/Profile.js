import { useEffect, useState } from "react";
import { Container, Label, Row, Col } from "reactstrap";
import Axios from "axios";

export default function Profile(props) {
	const [loading, isLoading] = useState(true);
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		if (props.emailid === null) window.location.href = "/menu";
		else{
		Axios.post('/api/profile', { emailid: props.emailid[1] })
			.then((resp) => {
				setProfile(resp.data.msg)
				isLoading(false)
			})
			.catch((err) => window.location.href="/menu");
		}
	}, [])

	return (
		<Container fluid={true} className="themed-container" style={{ padding:"30px" }}>
			<Container style={{ padding:"30px", background:'#F2AA4CFF'}}>
			{loading ? (<Label> Loading... </Label>) : (
				<Row>
					<Col sm={7}>
						<Label style={{ fontSize:"28px" }}>Full Name: {profile.fullname}</Label><br />
						<Label style={{ fontSize:"28px" }}>Organization Name: {profile.orgname}</Label><br />
						<Label style={{ fontSize:"28px" }}>Employment ID: {profile.empid}</Label><br />
						<Label style={{ fontSize:"28px" }}>Mobile Number: {profile.mobnum}</Label><br />
						<Label style={{ fontSize:"28px" }}>Email ID: {profile.emailid}</Label>
					</Col>
					<Col sm={5}>
						<img id="profpic" width="90%" height="auto" src={profile.photo} alt="profie_img" />
					</Col>
				</Row>
			)}
			</Container>
		</Container>
	);
}