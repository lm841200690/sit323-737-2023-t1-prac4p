# sit323-737-2023-t1-prac4p

run server

```shell
node index.js
```

## test api

* addition
```shell
curl -X POST -H "Content-Type: application/json" -d '{"num1": 5, "num2": "4"}' http://localhost:3000/api/addition
```
* subtraction
```shell
curl -X POST -H "Content-Type: application/json" -d '{"num1": 5, "num2": "4"}' http://localhost:3000/api/subtraction
```
* multiplication
```shell
curl -X POST -H "Content-Type: application/json" -d '{"num1": 5, "num2": "4"}' http://localhost:3000/api/multiplication
```
* division
```shell
curl -X POST -H "Content-Type: application/json" -d '{"num1": 5, "num2": "4"}' http://localhost:3000/api/division
```

* error
```shell
curl -X POST -H "Content-Type: application/json" -d '{"num1": "error", "num2": "4"}' http://localhost:3000/api/division
```
