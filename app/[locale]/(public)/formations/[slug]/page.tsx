import React from 'react';
import Content from "@/components/primitives/Content";
import Section from "@/components/primitives/Section";
import Image from "next/image";
import ImageSrc from "@/public/images-examples/formation/1.png";


async function FormationDetailsPage({params}: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	return (
		<Content fullWidth padding="none" className="!px-0">
			<Section spacing="none" size="sm" className="bg-[#F3F7FF] flex items-center justify-center">
				<h1 className="font-extralight text-[#151618] text-4xl sm:text-5xl lg:text-6xl text-center">
					{slug}
				</h1>
			</Section>
			<div className="relative w-full h-[600px] overflow-hidden">
				<Image
					src={ImageSrc}
					alt="Formation Propilote"
					width={1920}
					height={622}
					className="w-full h-auto object-cover object-center"
				/>
			</div>
			<Section className="container-6xl">
				<article>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
					</p>
				</article>
			</Section>
		</Content>
	);
}

export default FormationDetailsPage;