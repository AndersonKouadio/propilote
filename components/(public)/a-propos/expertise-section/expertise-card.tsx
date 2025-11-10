import React from 'react';
import {Card, CardFooter} from "@/components/ui/card";
import Image from "next/image";

type ExpertiseCardProps = {
	imageSrc: string;
	title: string;
	description: string;
}

function ExpertiseCard({imageSrc, title, description}: ExpertiseCardProps) {
	return (
		<Card className="py-0 overflow-hidden rounded-2xl relative">
			<Image
				alt="Woman listing to music"
				className="object-cover"
				height={450}
				width={400}
				src={imageSrc}
			/>
			<CardFooter
				className="bottom-0 min-h-44 flex-col text-white bg-[#0F53F380] backdrop-blur-md overflow-hidden py-1 absolute w-full z-10 px-6 m-0">
				<h3 className="text-lg font-light leading-tight text-center my-3">
					{title}
				</h3>
				<p className="text-justify text-sm">
					{description}
				</p>
			</CardFooter>
		</Card>
	);
}

export default ExpertiseCard;