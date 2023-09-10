export default {
	
	answer (data) {
		return data?.choices[0]?.message?.content ?? "";
	},
	
	sourceRank(source, ranks) {
		for (let rank of ranks) {
			if (source.includes(rank.link)) {
				return rank.rating;
			}
		}
		return "";
	},
	
	contextForChatGPT(data) {
		const sources = this.sources(data);		
		
		return "CONTEXT:\n```" + sources.map((item, i) => item.title + "\n" + item.abs).join("\n\n") + "```";
	},
	
	sources(data, ranks) {
		const maxSources = 5;
		const sources = data?.data?.summaryInsights[0]?.data.answers[0]?.document ?? [];
		
		return sources.slice(0, maxSources);
	}
	
}