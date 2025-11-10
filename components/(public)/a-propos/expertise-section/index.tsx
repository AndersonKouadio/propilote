import React from 'react';
import Section from "@/components/primitives/Section";
import SectionTitle from "@/components/common/section-title";
import ExpertiseCard from "@/components/(public)/a-propos/expertise-section/expertise-card";
import SectionSubtitle from "@/components/common/section-subtitle";

const expertisesData = [
	{
		imageSrc: '/assets/images/expertise-image.png',
		title: 'IoT et Connectivité',
		description: "Intégration de dispositifs IoT pour une gestion en temps réel des véhicules et des actifs."
	},
	{
		imageSrc: '/assets/images/expertise-image.png',
		title: 'Logiciels de Gestion de Flotte',
		description: "Solutions logicielles avancées pour optimiser les opérations de flotte et améliorer l'efficacité."
	},
	{
		imageSrc: '/assets/images/expertise-image.png',
		title: 'Analyse de Données',
		description: "Outils d'analyse pour extraire des insights précieux et prendre des décisions basées sur les données."
	},
	{
		imageSrc: '/assets/images/expertise-image.png',
		title: 'Mobilité Durable',
		description: "Solutions visant à réduire l'empreinte carbone et promouvoir des pratiques de mobilité écologiques."
	},
	{
		imageSrc: '/assets/images/expertise-image.png',
		title: 'Sécurité et Conformité',
		description: "Garantir la sécurité des données et la conformité aux réglementations en vigueur."
	},
	{
		imageSrc: '/assets/images/expertise-image.png',
		title: 'Consulting et Support',
		description: "Services de conseil pour aider les entreprises à adopter et optimiser leurs solutions de mobilité."
	},
]

function ExpertiseSection() {
	return (
		<Section padding="xl" className="relative container-6xl space-y-8">
			<SectionTitle>
				Expertises
			</SectionTitle>
			<SectionSubtitle
				subTitle="Nos domaines d'expertise couvrent l'ensemble des besoins en mobilité intelligente et gestion de flotte."
			/>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{expertisesData.map((expertise, index) => (
					<ExpertiseCard
						key={index}
						imageSrc={expertise.imageSrc}
						title={expertise.title}
						description={expertise.description}
					/>
				))}
			</div>
		</Section>
	);
}

export default ExpertiseSection;