import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { copyToClipboard } from "../functions/helpers";

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

const StyledButton = styled.button`
	position: absolute;
	top: 0;
    right: 0;
	font-size: 1.5rem;
	
	background-color: inherit
	color: white

	border: none

	padding: 0.5rem 1rem;

    &:hover {
        background-color: #006400;
	}
	
	&:focus {
        outline: none;
    }
`;

class Header extends Component {
	handleClick() {
		copyToClipboard(window.location.href)
	}

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
						<a href="www.vipinajayakumar.com/renting-vs-buying-a-house-in-the-uk.html">
							<i className="fas fa-book-reader fa-fw" /> Blog
						</a>
					</li>
					<li>
						<a href="www.github.com/bluprince13/renting_vs_buying">
							<i className="fab fa-github fa-fw" /> Github
						</a>
					</li>
				</StyledNavBar>
				<StyledButton
					className="copy"
					onClick={this.handleClick}
				>
					<i class="fas fa-copy" /> Copy URL
				</StyledButton>
			</StyledHeader>
		);
	}
}

export default Header;
