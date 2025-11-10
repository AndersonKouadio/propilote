import React from 'react';

export type TractionStatsProps = {
	stats:string
	title: string;
};

function TractionStats({stats, title}: TractionStatsProps) {
	return (
		<div className="flex flex-col justify-center items-center mt-8 text-center" role="group" aria-labelledby="stats-title">
			<h3 className="text-2xl md:text-4xl lg:text-6xl font-bold text-primary mb-2">
				{stats}
			</h3>
			<p className="text-sm text-black font-extralight">
				{title}
			</p>
		</div>
	);
}

export default TractionStats;