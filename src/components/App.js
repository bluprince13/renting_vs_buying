import React, { Component } from "react";
import ReactGA from "react-ga";
import styled from "styled-components";
import Intro from "./Intro";
import InputForm from "./InputForm";
import SimpleSlider from "./SimpleSlider";
import Header from "./Header";
import { media } from "../style";

const Layout = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	background-color: white;

	${media.tablet`
    height: 100%;
  `}
`;

// ${media.desktop`background: dodgerblue;`}
// ${media.tablet`background: mediumseagreen;`}
// ${media.phone`background: palevioletred;`}

const Content = styled.div`
	flex: 1;

	display: flex;
	align-items: stretch;

	${media.desktop`
    flex-direction: row;
  `}
	${media.tablet`
    flex-direction: column;
  `}
`;

const Sidebar = styled.div`
	${media.desktop`
    width: 30rem;
]`}

	${media.tablet`
    margin: auto
    width: 80%;
`}
`;

const Main = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;
	align-items: stretch;
`;

class App extends Component {
	componentDidMount() {
		ReactGA.initialize("UA-35322373-2");
		ReactGA.pageview("/");
	}

	render() {
		return (
			<Layout>
				<Intro />
				<Header />
				<Content>
					<Sidebar>
						<InputForm />
					</Sidebar>
					<Main>
						<SimpleSlider />
					</Main>
				</Content>
			</Layout>
		);
	}
}

export default App;
