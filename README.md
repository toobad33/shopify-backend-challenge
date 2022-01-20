#### Shopify Technical Challenge
```
1- clone the project
2- directly in project root: $npm install

```
Important!

You need to have an active cluster that is up in MongoDB. See https://www.mongodb.com/basics/clusters/mongodb-cluster-setup

You will need to create a config.env file and place it in the project root

File contains:
  PORT={yourPort} ex:3000
  MONGO_URI={yourURI} ex:mongodb+srv://<username>:<password>@<clustername>.seash.mongodb.net/users?retryWrites=true&w=majority

```
Once the configuration has been complete, run in the project root: $npm start
```
Open browser to localhost:PORT