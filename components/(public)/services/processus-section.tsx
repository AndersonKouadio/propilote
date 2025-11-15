import React from 'react';
import Section from "@/components/primitives/Section";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title";
import ProcessusItem from "@/components/(public)/services/processus-item";
import ImageSrc from "@/public/assets/images/services/processus.png"

const processusData = [
	{
		title: "Découverte",
		description: "Comprendre vos besoins et vos objectifs"
	},
	{
		title: "Planification",
		description: "Création d'une feuille de route détaillée du projet"
	},
	{
		title: "Mise en œuvre",
		description: "Exécution avec précision et soin"
	},
	{
		title: "Soutien",
		description: "Optimisation et maintenance continues"
	}
];

function ProcessusSection() {
	return (
		<Section padding={"none"} spacing={"none"} className="flex flex-col items-center">
			<Image
				src={ImageSrc}
				loading={"lazy"}
				alt="processus image"
				width={300}
				height={390}
			/>
			<SectionTitle className="text-center mt-14">
				Notre processus de service
			</SectionTitle>
			<p className="text-center text-[#282A2F] mt-14">
				Une méthodologie éprouvée qui garantit la réussite du projet et son succès à long terme.
			</p>
			<div className="container-6xl grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
				{processusData.map((item) => (
					<ProcessusItem
						key={item.title}
						title={item.title}
						description={item.description}
					/>
				))}
			</div>
		</Section>
	);
}

export default ProcessusSection;