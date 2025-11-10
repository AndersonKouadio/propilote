import React from 'react';
import Image from "next/image";

type TeamMemberProps = {
	imageSrc: string;
	name: string;
	role: string;
}

function TeamMember({imageSrc, name, role}: TeamMemberProps) {
	return (
		<li className="flex flex-col items-center text-center space-y-4">
			<Image
				src={imageSrc}
				alt="Team Member"
				height={500}
				width={200}
				className="w-auto min-h-[400px] lg:min-h-[500px] rounded-full object-cover"
			/>
			<div className="mt-10">
				<h3 className="text-xl font-light uppercase">
					{name}
				</h3>
				<p className="text-[#484848]">
					{role}
				</p>
			</div>
		</li>
	);
}

export default TeamMember;