# LeakProject Demo

A demonstration project to test the GitLeaks action on GitHub. This project shows how to work with authentication tokens and API requests.

## Overview

This project demonstrates:
- JWT token generation and usage
- Making API requests with authentication tokens
- Environment variable management for secure credentials

## Project Structure

- `index.js` - Main JavaScript file for making authenticated API requests
- `token.py` - Python utility for generating JWT tokens
- `package.json` - Project metadata and dependencies

## Setup

1. Clone the repository
2. Set up required environment variables:
   ```
   export AWS_ACCESS_KEY_ID=your_access_key
   export AWS_SECRET_ACCESS_KEY=your_secret_key
   ```
3. Run the application with `node index.js`

## Token Generation

The project includes a Python script (`token.py`) that can generate JWT tokens with the following structure:
- Header: `{"alg": "HS256", "typ": "JWT"}`
- Payload: `{"sub": "1234567890", "name": "John Doe", "admin": true}`

## Security Note

This project is intended as a demonstration of GitLeaks for detecting sensitive information in code. The hardcoded tokens and credentials in the code should never be used in production environments.

## License

MIT

## Author

Carlos Guajardo