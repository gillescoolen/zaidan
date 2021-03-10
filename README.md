## *Zaidan*

### Warning!
The current repository only includes a development setup.
The production build will include a mongo-alpine image without open ports. 
In addition, I'll include a couple of other optimisations. Stay tuned.

### Required software
1. Node & NPM
2. Docker & Docker Compose

### Running in debug mode
1. Open a terminal at the project root.
2. Run `docker-compose up`
3. Debug with Visual Studio Code using the provided launch configuration.

*Did you add or remove a package? Run the compose command like this:* `docker-compose up --build -V`

### API Documentation
You can find the Swagger documentation at `/docs`.

### To-do
I plan to implement the following things:

- [x] User Authentication
- [ ] Role-based Authorization
- [ ] A Production Docker Setup
