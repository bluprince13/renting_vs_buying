import React, { Component } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import InputForm from './InputForm';
import SimpleSlider from './SimpleSlider';
import { media } from '../style';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${media.tablet`
    height: 100%;
  `}
`

const Header = styled.div`
  padding: 1rem;
  text-align: center;
  background: green;
  font-size: 3rem;
`
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
`

const Sidebar = styled.div`
  ${media.desktop`
    width: 30rem;
]`}

  ${media.tablet`
    margin: auto
    width: 80%;
`}
`

const Main = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const Carousel = styled.div`
  width: 90%;
  margin: auto;
`

class App extends Component {
  componentDidMount()  {
    ReactGA.initialize('UA-35322373-2');
    ReactGA.pageview('/');
  }

	render() {
		return (
			<Layout>
        <Header>
			    <Link onClick={this.forceUpdate} to='/' style={{ textDecoration: 'none', color: "white"}}>Renting vs. buying a house</Link>
        </Header>
        <Content>
          <Sidebar>
            <InputForm />
          </Sidebar>
          <Main>
            <Carousel>
              <SimpleSlider />
            </Carousel>
          </Main>
        </Content>
			</Layout>
		);
	}
}

export default App;
