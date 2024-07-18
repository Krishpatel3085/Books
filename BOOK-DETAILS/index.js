const express = require("express")
const mongoose = require("mongoose")
const Books = require("./Model")

const app = express()
app.use(express.json())

app.get("/", async (req, res) => {
    const data = await Books.find()
    res.json({ data: data })
})

app.post('/', (req, res) => {
    const req_body = req.body
    const title = req_body["title"]
    const author = req_body["author"]
    const publicationYear = req_body["publicationYear"]
    const description = req_body["description"]
    const BookNo = req_body["BookNo"]
    const language = req_body['language']
    Books.create({ title, author, publicationYear, description, BookNo, language })
    res.json({ Msg: "Post" })

})

app.put('/:id', async (req, res) => {
    const id = req.params['id']
    const req_body = req.body
    const title = req_body["title"]
    const author = req_body["author"]
    const publicationYear = req_body["publicationYear"]
    const description = req_body["description"]
    const BookNo = req_body["BookNo"]
    const language = req_body['language']
    await Books.findOneAndUpdate({ _id: id }, { title, author, publicationYear, description, BookNo, language })
    res.json({ Msg: "Put" })

})

app.delete('/',async (req, res) => {
    const id = req.params['id']
    await Books.deleteOne({ _id: id })
    res.json({ Msg: "Delete" })
})



app.listen(8085, async () => {
    await mongoose.connect("mongodb://localhost:27017/Books")
    console.log("Connected to MongoDB Succefully")
    console.log("server Started on http://localhost:8085/")
})