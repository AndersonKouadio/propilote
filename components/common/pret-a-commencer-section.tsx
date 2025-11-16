import React from 'react';
import Section from "@/components/primitives/Section";
import SectionTitle from "@/components/common/section-title";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import imageSrc from "@/public/assets/images/pret-a-commencer.png"

function PretACommencerSection() {
	return (
		<Section spacing={"xl"} className="container-6xl">
			<SectionTitle>
				Prêt à commencer ?
			</SectionTitle>
			<div className="flex flex-col items-center">
				<p className="my-7">
					Discutons de la manière dont nos services professionnels peuvent accélérer votre réussite
				</p>
				<Button variant={"outline"} size={"lg"} className="text-primary border-primary rounded-full font-light">
					Planifier une consultation
				</Button>
				<Image
					src={imageSrc}
					alt={"Prêt à commencer"}
					className="mt-8 rounded-4xl"
					width={1500}
					height={626}
				/>
			</div>
		</Section>
	);
}

export default PretACommencerSection;