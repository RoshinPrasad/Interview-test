# React + Vite

This project is built using Vite, pnpm, and Tailwind CSS.

Prerequisites
Make sure you have pnpm installed.

1) cd AUTHENTICATION SYSTEM
2) pnpm install
3) pnpm run dev


Project Setup and Documentation
---------------------------------
----------------------------------
This project is a React application for user authentication using Firebase, Google, and LinkedIn. Below are instructions for setting up and running the project.

Project Structure
The project structure is organized into components and follows a standard React structure. Here is an overview of key directories and files:

src/components/Login.js: This file contains the main Login component where users can log in using email/password, Google, or LinkedIn.

src/firebase/config.js: Firebase configuration file. Ensure to replace the placeholder values with your Firebase project credentials.

src/App.js: Main App component where routing is set up.

public/index.html: HTML entry point for the React application.

Setting Up Firebase
--------------------
Create a Firebase project on the Firebase Console.

Obtain your Firebase configuration object by navigating to Project Settings > General > Your Apps > Firebase SDK snippet > Config.

Replace the placeholder values in src/firebase/config.js with your Firebase configuration.

Setting Up Google Authentication
-----------------------------------
Create a project on the Google Developers Console.

Enable the "Google Identity Toolkit API" and create OAuth 2.0 credentials.

Replace "YOUR_GOOGLE_CLIENT_ID" in src/components/Login.js with your Google client ID.

Setting Up LinkedIn Authentication
-----------------------------------
Create a project on the LinkedIn Developer Console.

Create an application and obtain the client ID.

Replace "YOUR_LINKEDIN_CLIENT_ID" in src/components/Login.js with your LinkedIn client ID.