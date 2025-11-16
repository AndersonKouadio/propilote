import React from 'react';
import Image from "next/image";
import ImageSrc from "@/public/images-examples/formation/1.png";
import {Badge} from "@/components/ui/badge";
import {Link} from "@/i18n/navigation";

function FormationCard() {
	return (
		<li className="group">
			<Link
				href="/formations/adafruit-io-basics-analog-input"
				className="flex flex-col"
			>
				<div className="relative overflow-hidden rounded-3xl">
					<Image
						src={ImageSrc}
						alt="Formation Propilote"
						width={600}
						height={400}
						className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105"
					/>
				</div>
				<Badge className="rounded-full mt-4 bg-success text-white">
					Débutant
				</Badge>
				<h3 className="mt-4 text-xl text-[#151618] font-semibold line-clamp-2 group-hover:underline">
					Adafruit IO Basics: Analog Input
				</h3>
				<p className="mt-2 text-gray-600 line-clamp-2">
					Apprenez les bases de l'entrée analogique avec Adafruit IO
				</p>
			</Link>
		</li>
	);
}

export default FormationCard;