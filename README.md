# Real-Time Collaborative Document Editor

**Company**: CODTECH IT SOLUTIONS  
**Name**: RAHANE VAIBHAV KAILASH  
**Intern ID**: CT04WZ133  
**Domain**: Full Stack Web Development  
**Duration**: 4 Weeks  
**Mentor**: Neela Santosh  

## Project Description

The **Real-Time Collaborative Document Editor** is an innovative web application built using the latest technologies such as **React.js**, **Node.js**, **Express.js**, **MongoDB**, and **Socket.io**. The main objective of this project is to enable multiple users to edit a document simultaneously in real time, with each user’s changes being reflected immediately on the other users’ screens. This allows for a seamless collaboration experience, making it ideal for team-based writing, content creation, or educational projects where real-time feedback and teamwork are critical.

The application features a rich-text editor built with **Quill.js**, which provides extensive text formatting options and enhances the user experience. It also includes a theme switcher, allowing users to toggle between **light mode** and **dark mode**, ensuring comfort while editing at any time of the day.

### 🚀 Key Features

- **Real-time Collaboration**: 
  Users can edit a document together in real-time, with live synchronization across all connected users. Changes made by one user are instantly visible to others, fostering a seamless collaboration environment.
  
- **WebSockets with Socket.io**:
  **Socket.io** ensures continuous, real-time communication between the server and all connected clients. This allows document changes, user typing, and other events to be reflected instantly on all users' screens, without requiring page reloads.

- **MongoDB Integration**: 
  The application integrates **MongoDB** as the database for storing documents. The auto-save feature ensures that every change made to a document is periodically saved to the database, eliminating the risk of data loss due to unexpected disruptions.

- **Quill.js Rich Text Editor**: 
  The text editor utilizes **Quill.js**, an open-source rich-text editor that supports various text formatting options like bold, italics, underlining, lists, and even embedding media. Quill provides an intuitive interface for content creation.

- **Light/Dark Mode Toggle**: 
  Users can easily switch between light and dark themes to personalize their experience based on their preferences or environmental lighting conditions. This improves accessibility and overall user comfort.

- **Auto-save Feature**: 
  The editor automatically saves content to the **MongoDB** database at regular intervals, ensuring data integrity and consistency. Users never have to worry about losing unsaved changes during editing sessions.

### 🏗️ Tech Stack

- **Frontend**: 
  - **React.js**: The user interface is built using **React.js**, ensuring a dynamic and responsive experience. React’s component-based architecture promotes reusability and ease of maintenance.
  - **Vite**: A modern, high-speed build tool that enhances development efficiency and significantly reduces build times.
  - **Quill.js**: A powerful and flexible rich-text editor for handling text formatting, ensuring an enriched user experience.
  - **Socket.io-client**: The client-side library used to establish a real-time WebSocket connection with the backend, ensuring synchronization across all connected users.

- **Backend**:
  - **Node.js**: The server-side application is built using **Node.js**, which is designed for building scalable network applications.
  - **Express.js**: A lightweight framework for handling HTTP requests and WebSocket connections, offering simplicity and efficiency.
  - **MongoDB**: A NoSQL database that stores documents and their real-time changes. MongoDB’s flexibility allows the application to scale effectively.
  - **Mongoose**: An **ODM** (Object Data Modeling) library for MongoDB, used to model and query the data in a structured manner.
  - **Socket.io**: The backbone for real-time communication in this project. It allows two-way communication between the client and server.

- **Database**:
  - **MongoDB**: The document-oriented database for persistent storage of documents.

### 🛠️ Server Running on Port

- Backend: `http://localhost:5000`
- Frontend: `http://localhost:5173`

### 🎯 How It Works

1. **User Login**: 
   Users begin by either creating a new document or entering an existing document ID to join a shared workspace. Once they enter the editor, a WebSocket connection is established, linking the frontend to the backend.

2. **WebSocket Connection**: 
   As soon as a user opens the document editor, a WebSocket connection is made with the backend using **Socket.io**. This allows the server to broadcast changes to all users who are currently editing the same document.

3. **Editing in Real-Time**: 
   Users can make changes to the document using the **Quill.js** editor. These changes are sent to the server, which broadcasts the updates to all other users in real time. Every keystroke, formatting change, or insertion is reflected instantly.

4. **Auto-Save**: 
   Every few seconds, the document is automatically saved to the **MongoDB** database to ensure no data is lost. This auto-save functionality guarantees that all edits are preserved.

5. **Theme Toggle**: 
   Users can toggle between **light mode** and **dark mode** to enhance readability and reduce eye strain depending on their environment or preference.

### 🖼️ OUTPUT

Below are some screenshots of the **Real-Time Collaborative Document Editor** in action:

![Editor Screenshot 1](https://github.com/user-attachments/assets/f9a4b018-3aad-4b5d-bd66-9a04076428cb)

![Editor Screenshot 2](https://github.com/user-attachments/assets/69ebf979-de6a-495b-ae69-6bcb845bd430)

![Editor Screenshot 3](https://github.com/user-attachments/assets/c77d29bf-68e5-48de-a2a7-90909255c884)


### 📝 Future Improvements

- **Version Control**: Implement a version control system within the editor to track document changes and allow users to revert to previous versions.
- **Permission System**: Add user roles and permissions, such as read-only, editor, or admin, to control access to documents.
- **Offline Mode**: Add functionality that allows users to edit documents offline, syncing changes once the user is back online.
- **Additional Features**: Implement voice chat or video integration for enhanced team collaboration within the editor.

### 🏆 Conclusion

This **Real-Time Collaborative Document Editor** demonstrates key concepts in **full-stack web development**, including real-time communication, rich-text editing, and cloud storage integration. By combining **Socket.io** for real-time updates, **React.js** for an interactive front-end, and **MongoDB** for persistent storage, the application provides a robust solution for collaborative document editing. The project is a valuable learning experience, providing insight into building scalable web applications with modern technologies. Future improvements will continue to expand its functionality and enhance its performance, making it an even more versatile tool for users.

---

