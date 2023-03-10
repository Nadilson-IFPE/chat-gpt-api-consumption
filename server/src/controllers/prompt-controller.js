const InputPrompt = require("../model/input-model")
const openai = require("../config/openai")

module.exports = {
    async sendText(request, response) {

        const openAI = openai.configuration()
        const inputModel = new InputPrompt(request.body)

        try {
            const resposta = await openAI.createCompletion(
                openai.textCompletion(inputModel)
            )

            return response.status(200).json({
                success: true,
                data: resposta.data.choices[0].text
            })
        } catch (error) {

            return response.status(400).json({
                success: false,
                error: error.response ? error.response.data : "Erro no servidor da OpenAI."
            })

        }
    }
}