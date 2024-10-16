# Assignment 1

# Rule Engine with Abstract Syntax Tree (AST)

## Overview
This project implements a simple 3-tier Rule Engine application that determines user eligibility based on attributes such as age, department, income, and experience. The engine utilizes an Abstract Syntax Tree (AST) to represent conditional rules, allowing for dynamic creation, modification, and combination of these rules.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Data Structure](#data-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Test Cases](#test-cases)
- [Bonus Features](#bonus-features)
- [License](#license)

## Features
- **Dynamic Rule Creation**: Create and manage rules using a natural syntax.
- **Rule Combination**: Combine multiple rules into a single AST for evaluation.
- **Eligibility Evaluation**: Evaluate rules against user attributes to determine eligibility.
- **Error Handling**: Handle invalid rule formats and data inputs gracefully.

## Technologies Used
- **Programming Language**: JavaScript (Node.js)
- **Database**: MongoDB
- **Data Structure**: Abstract Syntax Tree (AST)

## Data Structure
The AST is represented using a `Node` class with the following structure:
```javascript
class Node {
    constructor(type, left = null, right = null, value = null) {
        this.type = type;        // "operator" or "operand"
        this.left = left;        // Reference to the left child
        this.right = right;      // Reference to the right child
        this.value = value;      // Optional value for operand nodes
    }
}
```
Database Schema
The database schema for storing rules and application metadata is defined as follows:


```
javascript
Copy code
const ruleSchema = new mongoose.Schema({
    ruleString: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
Sample Rules
Rule 1: ((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)
Rule 2: ((age > 30 AND department = 'Marketing')) AND (salary > 20000 OR experience > 5)
```
# Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/rule-engine.git
cd rule-engine
Install the required dependencies:
bash
Copy code
npm install
Set up the MongoDB database:
Ensure MongoDB is installed and running locally, or configure your connection to a cloud-based MongoDB service.
Usage
Start the Node.js server:
bash
Copy code
node app.js
Open your web browser and navigate to http://localhost:3000, or use tools like Postman to interact with the API.
API Endpoints
1. Create Rule
Endpoint: /create_rule
Method: POST
Request Body:
json
Copy code
{
  "rule_string": "((age > 30 AND department = 'Sales'))"
}
Response: Returns the AST representation of the created rule.
2. Combine Rules
Endpoint: /combine_rules
Method: POST
Request Body:
json
Copy code
{
  "rules": [
    "((age > 30 AND department = 'Sales'))",
    "((age < 25 AND department = 'Marketing'))"
  ]
}
Response: Returns the combined AST.
# 4. Evaluate Rule
Endpoint: /evaluate_rule
Method: POST
Request Body:
json
Copy code
{
  "ast": {
    // JSON representation of the AST
  },
  "data": {
    "age": 35,
    "department": "Sales",
    "salary": 60000,
    "experience": 3
  }
}
# Response: Returns true or false indicating eligibility based on the provided attributes.
Test Cases
Create individual rules from the provided examples and verify their AST representation using the create_rule endpoint.
Combine example rules using the combine_rules endpoint and ensure the resulting AST reflects the combined logic.
Implement sample JSON data and test evaluate_rule for different scenarios.
Explore combining additional rules and test the functionality.
Bonus Features
Error handling for invalid rule strings or data formats (e.g., missing operators, invalid comparisons).
Validations for attributes to ensure they are part of a catalog.
Allow modification of existing rules using additional functionalities within create_rule or separate functions.
License
This project is open-source and available under the MIT License.

sql
Copy code

### Steps to Add the README to Your GitHub Repository

1. **Create the README.md File**:
   - In your project folder, create a new file named `README.md`.

2. **Copy the Content**:
   - Copy the above content into your `README.md` file, replacing `yourusername` in the clone URL with your actual GitHub username.

3. **Commit Changes**:
   - Use the following commands to commit and push the changes to your GitHub repository:
   ```bash
   git add README.md
   git commit -m "Add README for Rule Engine with AST"
   git push origin main  # Replace 'main' with your branch name if different
View on GitHub:
Navigate to your GitHub repository, and you should see the README displayed on the main page.



# Assignment 2


```markdown
# Weather Application

A simple weather application built with Node.js, Express, and vanilla JavaScript that fetches weather data from the OpenWeatherMap API based on user input for a city.

## Features

- Users can enter a city name to retrieve current weather information.
- Displays temperature and weather description.
- Responsive and simple user interface with basic styling.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime
- **Express**: Web application framework for Node.js
- **JavaScript**: For front-end functionality
- **HTML/CSS**: For structuring and styling the webpage
- **OpenWeatherMap API**: To fetch weather data

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- A valid API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. **Clone the repository** or download the source code:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**:

   ```bash
   npm install express
   ```

3. **Obtain an API Key**:

   Sign up at [OpenWeatherMap](https://openweathermap.org/api) to get your API key.

4. **Set up your API key**:

   Replace `YOUR_API_KEY` in the `script.js` file with your actual API key:

   ```javascript
   const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
   ```

### Running the Application

1. Start the server:

   ```bash
   node server.js
   ```

2. Open your web browser and navigate to `http://localhost:3000`.

3. Enter a city name in the input field and click the "Get Weather" button to see the current weather information.

## Usage

- **Input**: Enter the name of the city you want to check the weather for.
- **Output**: The application will display the current temperature and weather conditions.

## CSS Styling

The application includes basic CSS styling to improve the visual presentation. You can customize the styles in the `styles.css` file.

## Troubleshooting

- If you encounter the message "City not found", ensure that the city name is spelled correctly and try again.
- Check your browser console for any JavaScript errors if the application does not behave as expected.

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/api) for providing the weather data API.
```

### Instructions for the README

- **Replace** `yourusername` in the clone URL with your GitHub username or the correct URL for your project repository.
- Update any other details as necessary based on your project structure or additional features you might have added.

This README provides a clear overview of the project, how to set it up, and how to use it, making it easier for others (or future you) to understand and work with your code.



