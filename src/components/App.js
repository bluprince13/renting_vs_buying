import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import InputForm from './InputForm';
import SimpleSlider from './SimpleSlider';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`

const Header = styled.div`
  height: 10%;

  padding: 1rem;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 3rem;

  margin-bottom: 2rem;
`

const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: stretch;
`

const Sidebar = styled.div`
  flex: 4;
`

const Main = styled.div`
  flex: 10;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const Carousel = styled.div`
  width: 90%;
  margin: auto;
`

class App extends Component {
	render() {
		return (
			<Layout>
        <Header>
			    <Link onClick={this.forceUpdate} to='/' style={{ textDecoration: 'none' }}>Renting vs. buying a house</Link>
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
