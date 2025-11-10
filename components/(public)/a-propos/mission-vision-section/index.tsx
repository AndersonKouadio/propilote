import React from 'react';
import Section from "@/components/primitives/Section";
import MissionVisionItem from "@/components/(public)/a-propos/mission-vision-section/mission-vision-item";

const missionVisionData = [
	{
		title: "Notre Mission",
		description: "Fournir des solutions innovantes de mobilité intelligente qui combinent IoT, logiciels et services pour optimiser la gestion de flotte et améliorer les déplacements."
	},
	{
		title: "Notre Vision",
		description: "Être le leader mondial de la mobilité intelligente, en révolutionnant la façon dont les entreprises gèrent leurs flottes et en contribuant à un avenir plus sûr, efficace et durable."
	},
	{
		title: "Nos Valeurs",
		description: "Innovation, Fiabilité, Service Client, Durabilité et Excellence Opérationnelle sont au cœur de tout ce que nous faisons."
	}
];

function MissionVisionSection() {
	return (
		<Section className="bg-[#F3F7FF] md:!py-18">
			<ul className="container-6xl grid grid-cols-1 md:grid-cols-3 gap-4">
				{missionVisionData.map((item, index) => {
					const isBlack = (index + 1) % 2 === 0;
					return (
						<MissionVisionItem
							key={index}
							idx={index + 1}
							title={item.title}
							description={item.description}
							black={isBlack}
						/>
					);
				})}
			</ul>
		</Section>
	);
}

export default MissionVisionSection;