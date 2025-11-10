import React from 'react';

function SectionSubtitle({subTitle}: {subTitle?: string}) {
	if (!subTitle) return null;
	return (
		<p className="text-base text-center leading-7 text-[#7B818E]">
			{subTitle}
		</p>
	);
}

export default SectionSubtitle;