import React from 'react';
import TractionStats from "@/components/(public)/a-propos/traction-stats";

function StatList() {
	return (
		<div className="flex flex-wrap gap-4 justify-between items-center max-w-5xl w-full mx-auto">
			<TractionStats stats="500+" title="Véhicules Connectés" />
			<TractionStats stats="200K+" title="Kilomètres Parcourus" />
			<TractionStats stats="150+" title="Clients Satisfaits" />
			<TractionStats stats="99.9%" title="Disponibilité du Système" />
		</div>
	);
}

export default StatList;