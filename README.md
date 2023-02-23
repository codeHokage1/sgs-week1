# SGS Backend Dev Bootcamp - Week 1
For week 1, the task is to build a simple REST API and deploy on Render.

The project contains a mock database of courses and allows the performance of all CRUD operations.

Link to deployed api :link: : https://github.com/

## Valid routes
```
# GET / - Homepage
# GET /api/courses - Get all courses
# GET /api/courses/:id - Get course with id <id>
# POST /api/courses - Create a new course
{   //request body
    "name": "How to speak Yoruba"
}

# PUT /api/courses/:id - Update course with id <id>
{   // request body
    "name": "How to speak Yoruba Language"
}

# DELETE /api/courses/:id - Delete a course with id <id>

```

## How to use:
- Using Postman (or any other API Testing client), send a request to any of the above routes; using JSON request formats where necessary

## Tech used:
- Express
- Joi
- Nodemon