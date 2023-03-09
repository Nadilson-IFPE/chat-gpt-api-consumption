module.exports = {
    async sendText(request, response) {
        return response.status(200).json({
            message: "Nadilson está consumindo a API da OpenAI num app"
        })
    }
}