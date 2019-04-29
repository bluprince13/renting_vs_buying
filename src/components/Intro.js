import React, { Component } from "react";
import Joyride from "react-joyride";

class Intro extends Component {
	state = {
		steps: [
			{
				target: ".header",
				content:
					"Click on the header at any time to reset all the inputs.",
				disableBeacon: true
			},
			{
				target: ".form",
				content:
					"Use the sliders or text fields of the sidebar to change the inputs.",
				disableBeacon: true
			},
			{
				target: ".slick-next",
				content: "Click to see more plots, tables etc.",
				disableBeacon: true
			},
			{
				target: ".header",
				content:
					"When you're done, copy the URL so that you can come back to it later or to share with friends.",
				disableBeacon: true
			},
			{
				target: ".navbar",
				content:
					"Check out the source code or the blog to find out more.",
				disableBeacon: true
			}
		]
	};

	render() {
		const { steps } = this.state;
		return <Joyride steps={steps} />;
	}
}

export default Intro;
