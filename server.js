import express from 'express';
import uploadRouter from './routes/upload.js'

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/', uploadRouter);

const PORT = 3000

app.listen(PORT, () => {
    console.log(`server started on ${PORT} port`)
})