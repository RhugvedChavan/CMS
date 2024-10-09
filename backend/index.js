import e from "express";
import connectToDb from "./db/db.js";
import studentRoutes from './routes/student.routes.js'

const app = e()

app.use(e.static('public'))
app.use(e.json())
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(e.urlencoded({ extended: true }));

app.use('/', studentRoutes)

connectToDb()

app.listen((8000), () => {
    console.log(`App is listening at http://localhost:8000`);
})