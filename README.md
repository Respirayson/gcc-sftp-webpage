# A Simple Calculator

This repository contains a simple web application that performs basic arithmetic operations, such as addition and subtraction, through a simple interface.

## Table of Contents
- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

## Project Description

The application is split into two main components:

- **Frontend**: A single-page application that provides two input fields for numbers, an "Add" button, and a "Subtract" button.
- **Backend**: A REST API server that processes the addition and subtraction of the numbers received from the frontend.

### Frontend Features:

- Input fields for entering two numbers.
- An "Add" button for addition.
- A "Subtract" button for subtraction.
- Display the result of the calculation on the webpage.
- Empty input fields are treated as zero in calculations.

### Backend Features:

- An endpoint for adding two numbers and returning the result in JSON format.
- An endpoint for subtracting two numbers and returning the result in JSON format.
- No authentication required for simplicity.

## Installation

To set up the project on your local machine:

First, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Respirayson/gcc-sftp-webpage.git
cd gcc-sftp-webpage
```

### Backend Installation:

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

### Frontend Installation:
Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

## Usage
To run the backend server:

```bash
cd backend
npm run start
```

To launch the frontend application:
```bash
cd frontend
npm run dev
```


## Testing
To run the unit tests for the backend, execute the following command:

```bash
cd backend
npm run test
```
