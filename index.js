
require(`dotenv`).config()

const Discord = require("discord.js")
const {Client} = require("discord.js")
const client = new Client ({intents: 53608447})

client.on("ready", () => {
    console.log(`Encendido como: ${client.user.tag}`)
})

client.login(process.env.DISC_TOKN)