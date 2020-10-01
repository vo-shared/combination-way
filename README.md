This is the demo project to prove the potential of micro frontend architecture. 

# Build the micro apps

Go to react-datatable-web-component and run

```sh
 npm install
```
After successfully installing dependencies we build the project
```sh
 npm run build-wc
```

Repeat above steps with react-inside-web-component, vue-inside-web-component, ember app-shell



# Run app

We simulate the way of micro frontends works, so we need Docker to create many nodes of FE. The Docker installed in your pc is required.

Create a docker network by running the command:

Mac OS
```sh
 docker network create nginx_network
```
Windows
```sh
 docker network create --driver nat nginx_network
```

Start the docker containers by run

```sh
 docker-compose up
```

Launch the browser navigate to [Localhost](http://localhost:8000/)
