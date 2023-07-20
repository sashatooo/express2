import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

const jsonBodyMiddleWare = express.json()
app.use(jsonBodyMiddleWare)

const db = {
	courses: [
		{id:1, title:"front-end"},
		{id:2, title:"back-end"},
		{id:2, title:"automation qa"},
		{id:3, title:"devops"}
	]
}

const HTTP_STATUSES = {
	OK_200: 200,
	CREATED_201: 201,
	NO_CONTENT_204: 204,

	BAD_REQUEST_400: 400,
	NOT_FOUND_404: 404,
}


app.get('/', (req, res) => {
		// const foundCorses = db.courses.filter(c => c.title.indexOf(req.query.title as string) > -1 )
		res.json("foundCorses")
	})
// app.get('/courses/:id', (req, res) => {
// 	const foundCorses = db.courses.filter(c => c.title.indexOf(req.query.title as string) > -1 )
// 	res.json(foundCorses)
// })
app.post('/courses', (req, res) => {
	const createdCourse = {
		id: +(new Date()),
		title: req.body.title
	}
	db.courses.push(createdCourse)
	res.json(createdCourse)
})




app.listen(3000, () => console.log(`Server started on port ${PORT}`))


// fetch('localhost:3000/courses', {method: 'POST', body: JSON.stringify({title: 'dba'})})
// 	.then(res=>res.json())
// 	.then(json => console.log(json))
