import Content from "@/components/primitives/Content";
import PageHeroSection from "@/components/common/page-hero-section";
import MissionVisionSection from "@/components/(public)/a-propos/mission-vision-section";
import AboutSection from "@/components/(public)/a-propos/about-section";
import ExpertiseSection from "@/components/(public)/a-propos/expertise-section";
import TeamAboutSection from "@/components/(public)/a-propos/team-about-section";
import PageDescription from "@/components/common/page-description";

export default async function AboutPage() {
	return (
		<Content fullWidth padding="none" className="!px-0">
			<PageHeroSection
				title={
					<>
						A propos de <span className="font-bold">Propilote</span>
					</>
				}
			/>
			<PageDescription
				title="Pionnier de la mobilité intelligente, nous combinons IoT, logiciels et services pour révolutionner la gestion
					de flotte et optimiser vos déplacements"
			/>
			<AboutSection/>
			<MissionVisionSection/>
			<ExpertiseSection/>
			<TeamAboutSection/>
		</Content>
	);
}
