# mindbehindinterview

# How to run project ? 

I assume that you're in root directory of the project.

## Front-End

Front-end project is located in the mindbehind-ui folder. Firstly, you go into the ui directory. You can go there by entering the following directory on terminal:

`cd mindbehind-ui`

then, it will have been enough to write following command.

`npm run dev`


## Backend

Backend project is located in the root directory.
1. Firstly , We need to build gradle project by writing following comand on terminal.
`./gradlew build -x test`

2. then, we need to build docker image, using following command:
`docker build -t <<name>> . `
Note: The name of the project I used is "mindbehindapp",that'S why the command is `docker build -t mindbehindapp .`.  

3. We will use mysql image, that's why I need to install by enterin following command:
`docker pull mysql:5.7` 

4. We need to create docker network, because we will use two different containers. We have to create network for containers can communicate together . We can create network by writing following command: `docker network create <<name>>`
5. then, we need to two different containers,because we have database and apps. One of the container was used for app, another was used for app.
 5.1 We can write following command to database container.
 `docker run --name=<<name>> --network=<<name of network>> -d -p 3306:3306 -v <<URL PATH>> -e MYSQL_ROOT_PASSWORD=<<password>> -e MYSQL_DATABASE=<<database name>>
	mysql:<<version>> (5.7)`
  
 Warning: We look out that The name of the network have to be the same with the name of the network you have just built above.
 
6. We have just built database container.The next step is to create app container and database on only one network. We can that by writing on followin command :
`docker run --network <<name of the network>> --name <<name of the container>> -p 8080:8080 -d mindbehindapp`

Warning:
