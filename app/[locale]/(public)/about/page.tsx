import Content from "@/components/primitives/Content";
import PageHeroSection from "@/components/common/page-hero-section";
import MissionVisionSection from "@/components/(public)/a-propos/mission-vision-section";
import AboutSection from "@/components/(public)/a-propos/about-section";
import ExpertiseSection from "@/components/(public)/a-propos/expertise-section";
import TeamAboutSection from "@/components/(public)/a-propos/team-about-section";

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
			<AboutSection/>
			<MissionVisionSection/>
			<ExpertiseSection/>
			<TeamAboutSection/>
		</Content>
	);
}
