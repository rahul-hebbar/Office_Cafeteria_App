import Axios from "axios";
import { useEffect, useState } from "react"
import { Container, Table } from "reactstrap";

export default function Dashboard(props) {
	const [datadb, setDatadb] = useState(null);
	const [loading, isLoading] = useState(true);

	useEffect(() => {
		if (props.login === null) window.location.href = "/menu";
		else {Axios.get('/api/dashboard')
			.then((resp) => {
				setDatadb(resp.data.msg);
				isLoading(false);
			}).catch((err) => console.log(err));
		}
	}, [])

	const DataTable = () => {
		return(
			<>
				{datadb.map(element => {
					if (element.fullname !== "Admin"){
						return(
							<tr>
								<th scope='row'>{element._id}</th>
								<td>{element.fullname}</td>
								<td>{element.orgname}</td>
								<td>{element.empid}</td>
								<td>{element.mobnum}</td>
								<td>{element.emailid}</td>
							</tr>
						);
					}
				})}
			</>
		)
	}

	return (
		<Container className="themed-container" fluid={true}
			style={{ background: '#F2AA4CFF', padding: "20px" }}>
				<Table bordered style={{ background:"white"}}>
					<thead>
						<tr>
							<th>Registration ID</th>
							<th>Full Name</th>
							<th>Organisation Name</th>
							<th>Employee ID</th>
							<th>Mobile Number</th>
							<th>Email ID</th>
						</tr>
					</thead>
					<tbody>
						{loading ? null : <DataTable />}
					</tbody>
				</Table>
		</Container>
	);
}