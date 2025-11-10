import React from 'react';
import Section from "@/components/primitives/Section";
import SectionTitle from "@/components/common/section-title";
import SectionSubtitle from "@/components/common/section-subtitle";
import TeamMember from "@/components/(public)/a-propos/team-about-section/team-member";

const teamMembers = [
	{
		imageSrc: "/assets/images/team/team-image.jpg",
		name: "Lo pere Franck",
		role: "CEO & Co-fondateur"
	},
	{
		imageSrc: "/assets/images/team/team-image.jpg",
		name: "Doe Jane",
		role: "CTO & Co-fondatrice"
	},
	{
		imageSrc: "/assets/images/team/team-image.jpg",
		name: "Smith John",
		role: "CFO"
	}
];

function TeamAboutSection() {
	return (
		<Section className="container-6xl space-y-12">
			<SectionTitle>
				Équipe Propilote
			</SectionTitle>
			<SectionSubtitle
				subTitle="Notre équipe d'experts combine une connaissance approfondie de l'automobile avec une expertise technologique de pointe pour livrer des solutions innovantes."
			/>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{teamMembers.map((member, index) => (
					<TeamMember
						key={index}
						imageSrc={member.imageSrc}
						name={member.name}
						role={member.role}
					/>
				))}
			</ul>
		</Section>
	);
}

export default TeamAboutSection;