
## Algorithm
1. search wisecube for top5 articles
2. from these articles is built the context for ChatGPT
3. send request to chatGPT (using chatgpt-3.5-turbo) with instructions to summarize articles to answer the user question
4. display answer and sources

## Ideas for future:
1. replace ChatGPT with a llama2 model finetuned on medical data like https://huggingface.co/augtoma/qCammel-13
2. scalability is possible if we  use a quantized version so that it will have <10GB to be able to deploy it with AWS Lambda as a docker container, e.g. https://huggingface.co/spaces/vasilee/vicuna-7b-1.5/tree/main
