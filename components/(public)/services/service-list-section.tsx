import React from 'react';
import {IconBrandLine, IconRosette, IconTopologyRing2} from "@tabler/icons-react";
import Section from "@/components/primitives/Section";
import ServiceCard from "@/components/(public)/services/service-card";

const services = [
	{
		title: "Assistance et formation",
		description:
			"Des programmes complets de soutien et de formation pour garantir que votre équipe puisse maximiser la valeur de nos solutions.",
		features: [
			"Support technique 24/7",
			"Formations personnalisées",
			"Documentation complète",
		],
		icon: IconTopologyRing2,
	},
	{
		title: "Mise en œuvre et intégration",
		description: "Services de mise en œuvre de bout en bout pour déployer, configurer et intégrer nos solutions à vos systèmes existants.",
		features: [
			"Planification de projet",
			"Configuration personnalisée",
			"Intégration système",
		],
		icon: IconRosette,
	},
	{
		title: "Conseil stratégique",
		description: "Conseils d'experts pour définir votre stratégie IoT, évaluer les exigences techniques et créer une feuille de route vers le succès.",
		features: [
			"Évaluation des besoins",
			"Analyse de rentabilisation",
			"Feuille de route technologique",
		],
		icon: IconBrandLine,
	}
];

function ServiceListSection() {
	return (
		<Section spacing={"none"} className="bg-[#1F2126] rounded-b-4xl lg:rounded-b-[100px] py-8 lg:py-20">
			<ul className="container-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service, index) => (
					<ServiceCard
						key={index}
						title={service.title}
						description={service.description}
						features={service.features}
						icon={service.icon}
						className={index === 1 ? "bg-secondary text-black" : ""}
					/>
				))}
			</ul>
		</Section>
	);
}

export default ServiceListSection;