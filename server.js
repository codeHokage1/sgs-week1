const express = require('express');
const Joi = require('joi');
const app = express();

// middleware to access the request values
app.use(express.json());

// mock array of courses
let courses = [
    {
        id: 1,
        name: 'Course 1'
    },
    {
        id: 2,
        name: 'Course 2'
    },
    {
        id: 3,
        name: 'Course 3'
    }
];

// function to validate input
const validateInput = (value) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return result = schema.validate(value);
};

// route 1 - home page
app.get('/', (req, res) => {
    res.send('Hello there!')
});

// route 2 - get all courses
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// route 3 - get a single course by id
app.get('/api/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const foundCourse = courses.find(course => course.id === id);
    if (!foundCourse) {
        return res.status(404).send(`Could not find a course with id ${id}`)
    }
    res.send(foundCourse);
});

// route 4 - create new course
app.post('/api/courses', (req, res) => {
    const result = validateInput(req.body);
    if (result.error) {
        return res.status(400).send(result.error.message);
    };

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.status(201).send(course)
});

// route 5 - update an existing course
app.put('/api/courses/:id', (req, res) => {
    // find the course
    const foundCourse = courses.find(course => course.id === parseInt(req.params.id));
    if (!foundCourse) {
        return res.status(404).send(`Could not find a course with id ${id}`)
    }

    // validate the update
    const result = validateInput(req.body);
    if (result.error) {
        return res.status(400).send(result.error.message);
    };

    // update the course
    foundCourse.name = req.body.name;
    res.status(201).send(foundCourse);
});

// route 6 - delete an existing course
app.delete('/api/courses/:id', (req, res) => {
    // find the course
    const foundCourse = courses.find(course => course.id === parseInt(req.params.id));
    if (!foundCourse) {
        return res.status(404).send(`Could not find a course with id ${req.params.id}`)
    }

    courses = courses.filter(course => course !== foundCourse);
    res.send('Course Deleted successfully')
})

// port
const PORT = process.env.PORT || 3000;

// start listening to port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});