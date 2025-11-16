import React from 'react';
import Title from "@/components/primitives/Title";
import Section from "@/components/primitives/Section";

type TitleProps = {
	title: string;
}

function PageDescription({title}: TitleProps) {
	return (
		<Section size={"sm"} className="container-6xl">
			<div className="relative">
				<div role={"img"} className="absolute top-0 -left-[5%] size-36 md:size-44 opacity-10">
					<img src="/assets/illustrations/stars.svg" alt="Etoiles Illustration" className="w-full h-full"/>
				</div>
				<Title level={2} className="block !text-center text-primary font-extralight text-2xl md:text-3xl lg:text-4xl">
					{title}
				</Title>
			</div>
		</Section>
	);
}

export default PageDescription;