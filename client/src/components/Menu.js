import { Card, CardBody, CardSubtitle, CardTitle, Container, CardImg, CardColumns } from "reactstrap";

export default function Menu(props) {
	const MenuList = () => {
		if (props.loading) {
			return (
				<div>....Loading</div>
			)
		}
		else {
				return (
					<span>
						{props.menu.map(element => (
								<Card>
								<CardImg width="100%" height="100%" src={element.picurl} alt={element.item} />
								<CardBody>
									<CardTitle tag="h5">{element.item}</CardTitle>
									<CardSubtitle>{element.category}</CardSubtitle>
								</CardBody>
								</Card>
						))}
					</span>
				)
		}
	};

	return (
		<Container className="themed-container" fluid={true} 
		style={{ background:'#F2AA4CFF', paddingTop:"20px" }}>
				<CardColumns>
					<MenuList />
				</CardColumns>
		</Container>
	);
}