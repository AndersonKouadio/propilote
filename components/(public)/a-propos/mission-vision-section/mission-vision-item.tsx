import React from 'react';
import {cn} from "@/lib/utils";

type MissionVisionItemProps = {
	title: string;
	description: string;
	idx: number;
	black?: boolean;
};

function MissionVisionItem({title, description, idx, black = false}: MissionVisionItemProps) {
	return (
		<li className={cn(
			"bg-white rounded-3xl flex flex-col items-start",
			black && "bg-black text-white",
		)}>
			<div className="rounded-full bg-secondary text-white size-12 flex items-center justify-center font-bold text-xl ml-6 mt-6">
				{idx}
			</div>
			<h3 className={cn(
				"px-6 text-lg font-semibold text-primary mt-10",
			)}>
				{title}
			</h3>
			<p className={cn(
				"mt-2 mb-6 px-6 text-base leading-7 text-justify",
				black ? "text-[#E5E9FF]" : "text-[#7B818E]"
			)}>
				{description}
			</p>
		</li>
	);
}

export default MissionVisionItem;