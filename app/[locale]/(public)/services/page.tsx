import React from 'react';
import PageDescription from "@/components/common/page-description";
import Content from "@/components/primitives/Content";
import PageHeroSection from "@/components/common/page-hero-section";
import ServiceListSection from "@/components/(public)/services/service-list-section";
import ProcessusSection from "@/components/(public)/services/processus-section";
import PretACommencerSection from "@/components/common/pret-a-commencer-section";

function ServicesPage() {
	return (
		<Content fullWidth padding="none" className="!px-0">
			<PageHeroSection
				title={
					<>
						Services de <span className="font-bold">Propilote</span>
					</>
				}
			/>
			<PageDescription
				title="Services de conseil, de mise en œuvre et d'assistance d'experts pour accélérer votre parcours de transformation numérique en toute confiance."
			/>
			<ServiceListSection/>
			<ProcessusSection/>
			<PretACommencerSection/>
		</Content>
	);
}

export default ServicesPage;