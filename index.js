const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

function performOperation(operation, num1, num2) {
  if (!isNaN(num1)) {
    num1 = Number(num1);
  }

  if (!isNaN(num2)) {
    num2 = Number(num2);
  }

  if (isNaN(num1) || isNaN(num2)) {
    return {
      success: false,
      result: null,
      error: 'Invalid input parameters'
    };
  }

  let result;
  switch (operation) {
    case 'addition':
      result = num1 + num2;
      break;
    case 'subtraction':
      result = num1 - num2;
      break;
    case 'multiplication':
      result = num1 * num2;
      break;
    case 'division':
      if (num2 === 0) {
        return {
          success: false,
          result: null,
          error: 'Cannot divide by zero'
        };
      }
      result = num1 / num2;
      break;
    default:
      return {
        success: false,
        result: null,
        error: 'Unsupported operation'
      };
  }

  return {
    success: true,
    result,
    error: null
  };
}

app.post('/api/:operation', (req, res) => {
  const operation = req.params.operation;
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  const result = performOperation(operation, num1, num2);
  res.json(result);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    result: null,
    error: 'Internal server error'
  });
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(3000, () => {
  console.log('Calculator microservice running on port 3000');
});

