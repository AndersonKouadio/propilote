import React from 'react';

function ProcessusItem(
	{title, description}: { title: string; description: string }
) {
	return (
		<div className="flex flex-col items-center">
			<h3 className="font-semibold text-lg text-[#131517]">{title}</h3>
			<p className="text-center mt-1.5 text-[#282A2F] text-sm">
				{description}
			</p>
		</div>
	);
}

export default ProcessusItem;