# mindbehindinterview
Tech Pack: Java Boot Spring, React Next.js, MySQL,Docker, Github, PostCSS.
# How to run project ? 

I assume that you're in root directory of the project.

## Front-End

The Front-end project is located in the mindbehind-ui folder. Firstly, you go into the ui directory. You can go there by entering the following directory on the terminal:

`cd mindbehind-ui`

then, it will have been enough to write the following command.

`npm run dev`

Warning: you don't forget that, you have to write the url in context to send request to true url. The url can be name of the database container like 'http://mindbehinddb-container:8080' 


## Backend

The backend project is located in the root directory.
1. Firstly , We needed to build the gradle project by writing the following command on the terminal.
`./gradlew build -x test`

2. then, we needed to build the docker image, using the following command:
`docker build -t <<name>> . `
Note: The name of the project I used is "mindbehindapp",that's why the command is `docker build -t mindbehindapp .`.  

3. We used the mysql image, that's why I needed to install by entering the following command:
`docker pull mysql:5.7` 

4. We needed to create the docker network, because we used two different containers. We have to create the network for containers can communicate together . We can create network by writing following command: `docker network create <<name>>`
5. then, we needed to two different containers,because we have the database and the app. One of the container was used for the database, another was used for app.
 5.1 We can write the following command to the database container.
 `docker run --name=<<name>> --network=<<name of network>> -d -p 3306:3306 -v <<URL PATH>> -e MYSQL_ROOT_PASSWORD=<<password>> -e MYSQL_DATABASE=<<database name>>
	mysql:<<version>> (5.7)`
  
 Warning: We look out that the name of the network have to be the same with the name of the network you have just built above.
 
6. We have just built database container.The next step is to create app container and database on only one network. We can that by writing on followin command :
`docker run --network <<name of the network>> --name <<name of the container>> -p 8080:8080 -d <<name of the app>>`

Warning: The name of the network that exist into command to run container on only one network have to be the same with the name of the network you have just build before.


