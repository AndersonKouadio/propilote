import React from 'react';
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import Image from "next/image";
import StatList from "@/components/(public)/a-propos/stat-list";

function AboutSection() {
	return (
		<Section className="relative container-6xl">
			<div role={"img"} className="absolute top-0 -left-[5%] size-36 md:size-44 opacity-10">
				<img src="/assets/illustrations/stars.svg" alt="Etoiles Illustration" className="w-full h-full"/>
			</div>
			<Title level={2} className="block !text-center text-primary font-extralight">
				Pionnier de la mobilité intelligente, nous combinons IoT, logiciels et services pour révolutionner la gestion
				de flotte et optimiser vos déplacements
			</Title>
			<div className="w-full mt-10 relative overflow-hidden h-[400px] md:h-[500px] rounded-lg shadow-lg">
				<Image
					src="/assets/images/about-image.png"
					alt="About Propilote"
					width={1548}
					height={572}
					className="w-full h-full object-cover object-center"
				/>
			</div>
			<p className="mt-8 text-base leading-7 text-[#484848]">
				Propilote a été fondée en 2018 avec la vision d'accélérer l'adoption de la mobilité intelligente. Notre équipe
				d'ingénieurs et de chercheurs a reconnu que l'avenir du transport nécessitait une approche intégrée combinant
				IoT, logiciels avancés et services personnalisés.
				<br/><br/>
				En commençant par des systèmes de géolocalisation avancés, nous avons élargi notre portfolio pour inclure des
				solutions complètes de gestion de flotte, d'analyse comportementale et de services connectés. Nos solutions
				alimentent tout, des systèmes de suivi basiques aux plateformes de mobilité intelligente de demain.
				<br/><br/>
				Aujourd'hui, nous accompagnons des entreprises du monde entier, fournissant l'intelligence connectée qui rend
				la mobilité plus sûre, plus efficace et plus durable. Chaque solution que nous développons est testée selon
				les standards les plus élevés et conçue pour performer dans les conditions les plus exigeantes
			</p>
			<StatList/>
		</Section>
	);
}

export default AboutSection;