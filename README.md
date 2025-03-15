# Real-Time Collaborative Document Editor

**Company**: CODTECH IT SOLUTIONS  
**Name**: RAHANE VAIBHAV KAILASH  
**Intern ID**: CT04WZ133  
**Domain**: Full Stack Web Development  
**Duration**: 4 Weeks  
**Mentor**: Neela Santosh  

## Project Description

The **Real-Time Collaborative Document Editor** is an advanced web application built using modern technologies like **React.js**, **Node.js**, **Express.js**, **MongoDB**, and **Socket.io**. This application allows multiple users to collaborate on editing a document in real-time, with changes instantly synchronized across all users. It provides a rich-text editor powered by **Quill.js**, enabling users to style and format their text with ease. The application is designed to be user-friendly, responsive, and scalable, catering to a wide range of use cases where collaborative document editing is needed, such as team collaboration, content creation, and academic work.

### 🚀 Features

- **Real-time Collaboration**: Multiple users can edit the document simultaneously. As one user makes changes, all connected users will see those changes instantly without needing to refresh the page.
  
- **WebSockets (Socket.io)**: This is the backbone of the real-time communication in the application. Socket.io ensures that updates made by one user are broadcasted to all other users, providing a seamless collaborative experience.

- **MongoDB Database**: The application integrates MongoDB for storing document data. Each document is auto-saved to the database at regular intervals, ensuring that no data is lost in case of a connection drop or browser crash.

- **Quill.js Editor**: The rich-text editor, **Quill.js**, is used for its simplicity, flexibility, and support for various text formatting options such as bold, italics, lists, and more. It gives users the freedom to format their documents easily.

- **Light/Dark Mode**: The editor provides a theme toggle, allowing users to switch between **light** and **dark** modes. This makes the application adaptable to different user preferences and environments, enhancing the overall user experience.

### 🏗️ Tech Stack

The project uses a variety of modern web development technologies to ensure its functionality, performance, and scalability.

#### **Frontend**:
- **React.js**: The frontend is built using React.js, ensuring a component-based architecture that is easy to maintain and scale.
- **Vite**: A modern, fast build tool that speeds up development time and ensures quick page loads.
- **Quill.js**: A powerful and customizable rich-text editor used for document formatting and text manipulation.
- **Socket.io-client**: The client-side library for establishing a WebSocket connection with the backend to enable real-time collaboration.

#### **Backend**:
- **Node.js**: The server is built using Node.js, which is efficient for handling I/O operations and real-time communication.
- **Express.js**: A minimalistic framework for Node.js used to handle API requests and WebSocket connections.
- **MongoDB**: NoSQL database used for storing documents and ensuring data persistence.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB, used to define models and interact with the database.
- **Socket.io**: The backend WebSocket library that enables real-time, bidirectional communication between the server and clients.

#### **Database**:
- **MongoDB**: A document-oriented database used for storing and retrieving user documents.

### 🛠️ Server Running on Port

- The backend runs on `http://localhost:5000`.
- The frontend runs on `http://localhost:5173`.

### 🎯 How It Works

1. **User Login**: The user accesses the document editor page, where they can either create a new document or join an existing one by providing a document ID.
   
2. **WebSocket Connection**: Upon entering the editor, a WebSocket connection is established with the backend using **Socket.io**. This allows the user to receive real-time updates whenever another user makes changes to the document.

3. **Editing the Document**: Users can edit the document using the rich-text editor powered by **Quill.js**. Text can be formatted, and real-time changes are instantly broadcasted to all other users connected to the same document.

4. **Auto-Save**: The document is automatically saved to **MongoDB** every few seconds, ensuring that all changes are preserved.

5. **Real-Time Syncing**: Changes made by any user are sent to the server and broadcasted to all other connected users in real time. Users can see the edits as they happen, providing a collaborative editing experience.

6. **Theme Toggle**: Users can switch between **light mode** and **dark mode** using the theme toggle button, which provides a better experience based on user preferences and lighting conditions.

### 🖼️ OUTPUT:

Below are some screenshots of the application in action:

![Editor Screenshot 1](https://github.com/user-attachments/assets/f9a4b018-3aad-4b5d-bd66-9a04076428cb)

![Editor Screenshot 2](https://github.com/user-attachments/assets/69ebf979-de6a-495b-ae69-6bcb845bd430)

![Editor Screenshot 3](https://github.com/user-attachments/assets/c77d29bf-68e5-48de-a2a7-90909255c884)
