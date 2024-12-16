# Node.js Server Crashing with Large Requests

This repository demonstrates a Node.js server that crashes when receiving large requests. The bug is caused by not handling large request bodies correctly.  The solution shows how to address this issue by setting limits for the request body size.

## Bug

The server crashes without error handling when a large request body is received.  This is a common issue in production environments that can lead to unexpected outages.

## Solution

The solution uses the `body-parser` middleware to limit the request body size and handle potential errors gracefully.  This prevents the server from crashing and provides more robust error handling.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `node bug.js`.
4. Send a large POST request to `http://localhost:8080`.  You can use tools like Postman for this.

## How to fix

1. Run `node bugSolution.js`
2. Send a large POST request to `http://localhost:8080`