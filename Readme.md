# To-Do Fullstack App

This is a fullstack **To-Do** application built with **Node.js** on the backend and **React** on the frontend. The project is dockerized for easier development and deployment.

## Project Structure

The project is organized as follows:

- The **backend** is located in the `/backend` directory.
- The **frontend** is located in the `/frontend` directory.
- The root directory contains the `docker-compose.yml` file to run both services together.

## Ports

- **Backend**: The Node.js API server runs on **port 5000**.
- **Frontend**: The React application runs on **port 3000**.

## Prerequisites

Before getting started, make sure you have the following installed:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)


Additionally, you will need access to a **MongoDB** instance to store the To-Do items.

## MongoDB Setup

For the app to work, you need to create a MongoDB database called `tododb` and a collection called `todos`. Follow these steps:

1. **Create the `tododb` database and `todos` collection**:
    - If you're running MongoDB locally or using a cloud service (e.g., MongoDB Atlas), create a new database named `tododb`.
    - Inside the `tododb` database, create a collection called `todos`. This collection will store the To-Do items.

2. **MongoDB Connection String**:
    - You will need to provide the **MongoDB connection string** for the app to connect to the database. Update your environment variable in the backend to include this connection string.

    - **Example MongoDB URI**:
      - If you're using a local MongoDB instance, the connection string will look like this: `mongodb://localhost:27017/tododb`.
      - If you're using MongoDB Atlas, you will get the connection string from the Atlas dashboard. It will look something like this:

    **Important**: Make sure to replace `<your_mongo_connection_string>` with your actual connection string in the `.env` file.

    Example for local MongoDB:
    ```bash
    MONGO_URI=mongodb://localhost:27017/tododb
    ```

    Example for MongoDB Atlas:
    ```bash
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/tododb?retryWrites=true&w=majority
    ```

3. **Create the `.env` file**:
    - In the root directory, create a `.env` file and add the connection string.

    Example `.env` file:
    ```env
    MONGO_URI=mongodb://localhost:27017/tododb
    PORT=5000
    ```

    - Replace the `MONGO_URI` with your actual connection string.

Once you've set up your database and connection string, the app will be able to connect to MongoDB and store the To-Do items.

## Getting Started

To get this To-Do app running locally, follow these steps:

### 1. Clone the repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/alberto-arce/todo-docker.git
cd todo-docker
```

### 2. Run the application using Docker Compose

In the root of the project, use docker-compose to build and start the backend and frontend services in containers.
To run the containers in detached mode:

```bash
docker-compose up -d
```

### 3. Running Services Separately (Without Docker)

#### Backend (Node.js)

Navigate to the /backend directory:

```bash
cd backend
```

Install the backend dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm start
```

### Frontend (React)

Navigate to the /frontend directory:

```bash
cd frontend
```

Install the frontend dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm start
```

The application will be available at http://localhost:3000.