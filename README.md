
# Docker image for local development. 


## MongoDB Compass UI
#### https://www.mongodb.com/try/download/compass

## Help
#### https://docs.mongodb.com/manual/reference/mongo-shell/


#### Set credentials:
```
MONGO_INITDB_ROOT_USERNAME=
MONGO_INITDB_ROOT_PASSWORD=
```

#### Volumes:
```
./mongo-init
./mongo-data
```
#### Seeder:
```
mongo-init/mongo-init.js
```

## Shell

#### Exec and cli:
```
docker exec -it mongodb /bin/bash
mongo
```

#### Shell commands 
```
show dbs
use test
db.auth("user", "pass") --- ignore if user/pass not set
db.test.find().pretty()
```
