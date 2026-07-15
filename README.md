# Mini Postman

A lightweight API Testing Tool built using HTML, CSS, and JavaScript. This application allows users to send HTTP requests, view API responses, and store request history directly in the browser.

## Features

### HTTP Methods
- GET Requests
- POST Requests
- PUT Requests
- DELETE Requests

### Request Configuration
- Enter API endpoint URLs
- Send JSON request bodies
- Configure request method

### Response Viewer
- View API responses
- Display status codes
- Display response time
- Format JSON responses

### Request History
- Save request history
- Reuse previous requests
- Local Storage persistence

### User Interface
- Clean layout
- Responsive design
- Easy-to-use request panel
- Response display section

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- Local Storage API

## Project Structure

```text
Mini-Postman/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/Mini-Postman.git
```

2. Navigate to the project directory

```bash
cd Mini-Postman
```

3. Open `index.html` in your browser.

## How It Works

### Sending Requests

1. Select an HTTP method.
2. Enter the API URL.
3. Add a JSON request body (for POST/PUT requests).
4. Click the **Send Request** button.

### Viewing Responses

The application displays:

- Response Data
- HTTP Status Code
- Response Time

### Request History

- Every successful request is saved.
- Click a history item to load it again.
- History is stored in Local Storage.

## Example API

### GET Request

```http
GET https://jsonplaceholder.typicode.com/posts/1
```

### POST Request

```http
POST https://jsonplaceholder.typicode.com/posts
```

Request Body:

```json
{
  "title": "Hello",
  "body": "Testing API",
  "userId": 1
}
```

## Learning Outcomes

Through this project, I learned:

- Fetch API
- Async/Await
- HTTP Methods
- API Integration
- JSON Parsing
- DOM Manipulation
- Event Handling
- Local Storage
- Error Handling
- Responsive Web Design
- Git & GitHub Workflow

## Author

Vinayak S.