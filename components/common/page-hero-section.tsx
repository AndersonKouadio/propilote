import React from 'react';
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";

type PageHeroSectionProps = {
	title?: string | React.ReactNode;

}

function PageHeroSection({title}: PageHeroSectionProps) {
	return (
		<Section
			spacing={"none"}
			className="bg-[url('/assets/images/background-hero.jpg')] bg-cover bg-top text-white relative overflow-hidden flex items-center">
			<div className="absolute inset-0 bg-black/50"/>
			<div className="relative container-6xl text-center md:text-left">
				<Title className="text-white mb-4 font-extralight">
					{title}
				</Title>
			</div>
			<div
				role="img"
				aria-label="Boomerang"
				className="absolute inset-y-0 right-0 md:right-4 w-auto flex items-center justify-center overflow-visible"
			>
				<img
					src="/assets/illustrations/boomerang.svg"
					alt="Boomerang Illustration"
					className="h-[150%] w-auto opacity-30 md:opacity-40"
				/>
			</div>
		</Section>
	);
}

export default PageHeroSection;