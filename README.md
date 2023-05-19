# Dockerfile for Node.js Application

This Dockerfile is used to build a Docker image for a Node.js application. It sets up the necessary environment, installs dependencies, and prepares the application for running in a containerized environment.

1. Clone the repository to your local machine.
2. Open terminal and Run the following command:
3. Build the Docker image:
   Open a terminal, navigate to the directory containing the extracted source code and the `Dockerfile.frontend`, and run the following command to build the Docker image:
   
   $ docker build -t frontend-image:v1 -f Dockerfile.frontend .
 
   This command builds the Docker image and tags it with the name `frontend-image:v1`.

4. Run the Docker container:
   Once the Docker image is built, you can run a container based on it using the following command:
   
   $ docker run -p 3000:3000 frontend-image:v1

   This command starts a container based on the `frontend-image:v1` image and maps port `3000` from the container to port `3000` on the host. This allows you to access the running Node.js app  from your local system.

   The app should now be accessible at `http://localhost:3000` in your web browser.
   
   
   # File Structure

    Dockerfile: Contains the instructions to build the Docker image.
    app.js: Node.js application entry point.
    package.json and package-lock.json: Application dependencies.
