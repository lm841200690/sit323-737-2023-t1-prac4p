# sit323-737-2023-t1-prac4p

## run server

```shell
node index.js
```
## Calculator Microservice

The calculator microservice is a small web application that provides simple arithmetic operations as REST APIs. The microservice is built using Node.js and Express, and is designed to be lightweight and easy to use.

### APIs

The calculator microservice provides the following REST APIs:

#### POST /api/:operation

This API performs an arithmetic operation (`addition`, `subtraction`, `multiplication`, or `division`) on two input numbers and returns the result in JSON format. The input numbers are passed in the request body as `num1` and `num2` parameters.

Example Request Body:

```json
{
  "num1": 3,
  "num2": 4
}
```

Example Response (success):

```json
{
  "success": true,
  "result": 7,
  "error": null
}
```

Example Response (error):

```json
{
  "success": false,
  "result": null,
  "error": "Invalid input parameters"
}
```

#### GET /ping

This API returns the string "pong" as a response. It can be used to check if the server is alive and responding.

Example Response:

```
pong
```

### JSON Result Format

The calculator microservice returns the operation result or error message in a standardized JSON format. The JSON result object contains the following properties:

- `success`: A boolean value that indicates whether the operation was successful or not.
- `result`: The result of the arithmetic operation, if `success` is `true`.
- `error`: The error message, if `success` is `false`.

Here's an example JSON result object for a successful arithmetic operation:

```json
{
  "success": true,
  "result": 7,
  "error": null
}
```

Here's an example JSON result object for an error:

```json
{
  "success": false,
  "result": null,
  "error": "Invalid input parameters"
}
```

By using a standardized JSON result format, the calculator microservice provides a clear and consistent way of communicating the operation status and results to the client, making it easier to parse and handle the response on the client side.
