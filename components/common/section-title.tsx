import React from 'react';
import Title from "@/components/primitives/Title";
import {cn} from "@/lib/utils";

function SectionTitle({children, className}: {children: React.ReactNode, className?: string}) {
	return (
		<>
			<div className={cn("relative", className)}>
				<Title level={2} className="text-primary font-extralight">
					{children}
				</Title>
				<div role={"img"} className="absolute top-1/2 -translate-y-1/2 -left-[7%] size-36 md:size-44 opacity-20">
					<img src="/assets/illustrations/stars.svg" alt="Etoiles Illustration" className="w-full h-full"/>
				</div>
			</div>
		</>
	);
}

export default SectionTitle;