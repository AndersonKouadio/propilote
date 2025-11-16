import React from 'react';
import {IconTopologyRing2} from "@tabler/icons-react";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {cn} from "@/lib/utils";

type ServiceListSectionProps = {
	title: string;
	description: string;
	features: string[];
	icon: typeof IconTopologyRing2;
	className?: string;
}

function ServiceCard({title, description, features, icon: Icon, className}: ServiceListSectionProps) {
	return (
		<li
			className={cn(
				"relative group p-6 rounded-2xl transition-transform bg-primary flex flex-col items-center text-white px-10 min-h-[500px]",
				className
			)}
		>
			<Icon size={54} className="mb-3.5" stroke={1}/>
			<h3 className="uppercase text-base text-center">
				{title}
			</h3>
			<p className="mt-4 text-center text-sm mb-6">
				{description}
			</p>
			<ul className="text-sm mb-6 w-full list-disc font-bold">
				{features.map((feature) => (
					<li key={feature} className="pl-4 mb-2">
						{feature}
					</li>
				))}
			</ul>
			<Button
				size="icon"
				className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#1F2126] hover:bg-[#1F2126]"
			>
				<ArrowRight
					className="group-hover:-rotate-45 transition-transform duration-150 text-white"
				/>
			</Button>
		</li>
	);
}

export default ServiceCard;