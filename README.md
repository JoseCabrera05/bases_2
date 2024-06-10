### Por problemas con Windows se decicicio utilizar docker para correr mongodb. Se empleó el siguiente comando: 

```
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest
```
Referencia del commando: [link](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/)

Se uso git para tener control del codigo se agrego un .gitignore donde se ignoran los node_modules  porque ocupan mucho espacio

Se añadio una agregacion de ´$addFields´ en donde al objeto usuario se le agrego un nuevo campo de edad