export default {	
	async sendQuery (query) {
		knowledge.clear();
		chatgpt.clear();
		await knowledge.run({query});
		// wait 0.5s to fix a bug when knowledge.data is not immediately available
		await new Promise((accept)=>setTimeout(accept, 500));
		await chatgpt.run({
			query,		
			context: dataFormat.contextForChatGPT(knowledge.data)
		})
	}
}