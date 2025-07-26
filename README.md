# Simple Node.js Docker App

This is a basic Express.js application connected to MongoDB, containerized using Docker.



Build the image
```
docker build -t docker-exp .
```


Run the container
```
docker run -p 3000:3000 --env-file .env docker-exp
