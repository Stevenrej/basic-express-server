# LAB - Class 01

## Project: Basic Express Server

### Author: Steven Rejdukowski

### Problem Domain

Create a web server using CI and CD

### Links and Resources

- [ci/cd](https://github.com/Stevenrej/server-deployment-practice/actions) (GitHub Actions)
- [prod deployment](https://server-practice-prod.onrender.com/)
- [dev deployment](https://server-practice-dev.onrender.com/)

### Setup

#### `.env` requirements (where applicable)

see `.env.sample`

- PORT: 3001


#### How to initialize/run your application (where applicable)

- nodemon

#### Features / Routes

- Feature One: Deploy to Dev
- GET : `/`
- GET : `/bad`
- Feature Two: Deploy to Prod
- GET : `/hello`
- GET : `/bad`



#### Tests

- How do you run tests?
npm test
- Any tests of note?
- handles root path
- handles invalid requests
- hanldes errors

#### UML

![UML](./class1lab.jpeg)
