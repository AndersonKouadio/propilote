import React from 'react';
import Content from "@/components/primitives/Content";
import PageHeroSection from "@/components/common/page-hero-section";
import PageDescription from "@/components/common/page-description";
import Section from "@/components/primitives/Section";
import FormationCard from "@/components/(public)/formations/formation-card";
import PretACommencerSection from "@/components/common/pret-a-commencer-section";

function FormationsPage() {
	return (
		<Content fullWidth padding="none" className="!px-0">
			<PageHeroSection
				title={
					<>
						Formation <span className="font-bold">Propilote</span>
					</>
				}
			/>
			<PageDescription
				title="Pionnier de la mobilité intelligente, nous combinons IoT, logiciels et services pour révolutionner la gestion
					de flotte et optimiser vos déplacements"
			/>
			<Section padding="lg" className="bg-[#F3F7FF]">
				<ul className="container-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
					<FormationCard/>
					<FormationCard/>
					<FormationCard/>
					<FormationCard/>
					<FormationCard/>
				</ul>
			</Section>
			<PretACommencerSection/>
		</Content>
	);
}

export default FormationsPage;