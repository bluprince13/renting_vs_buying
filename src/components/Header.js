import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
	position: relative;

	padding: 1rem 3rem;
	text-align: left;
	background: green;
	font-size: 3rem;
`;

const StyledNavBar = styled.ul`
	position: absolute;
	bottom: 0;
    right: 0;
    font-size: 1.5rem;

	& > li {
		list-style-type: none;
		margin: 0;
        padding: 0;
        display: inline;
        float: right;

        & > a {
            display: block;
            color: white
            padding: 0.5rem 1rem;
            text-decoration: none;

            &:hover {
                background-color: #006400;
        }
	}
`;

class Header extends Component {
	render() {
		return (
			<StyledHeader>
				<Link
					onClick={this.forceUpdate}
					to="/"
                    style={{ textDecoration: "none", color: "white" }}
                    className="header"
				>
					Renting vs. buying a house
				</Link>
				<StyledNavBar className="navbar">
					<li>
						<a href="www.vipinajayakumar.com/renting-vs-buying-a-house-in-the-uk.html"><i className="fas fa-book-reader fa-fw"></i>  Blog</a>
					</li>
					<li>
						<a href="www.github.com/bluprince13/renting_vs_buying"><i className="fab fa-github fa-fw"></i> Github</a>
					</li>
				</StyledNavBar>
			</StyledHeader>
		);
	}
}

export default Header;
