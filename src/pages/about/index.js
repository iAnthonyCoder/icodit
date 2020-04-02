import React from 'react';
import Section1 from "../../components/section1";
import Section2 from "../../components/section2";
import Section3 from "../../components/section3";
import Section4 from "../../components/section5";
import Section5 from "../../components/section4";
import Section6 from "../../components/section6";

export default function Home (props) {

	const propss = props;

    return (
		<main className="no-theme">
		<Section1 props={propss} />
		<Section2 props={propss} />
		<Section3 props={propss} />
		<Section5 props={propss} />
		<Section4 props={propss} />
		<Section6 props={propss} />
		</main>
    );
}