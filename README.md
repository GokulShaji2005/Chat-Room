  # 💬 ChatApp
A real-time chat application built with React and Firebase, enabling users to authenticate, join specific chat rooms, and chat instantly with others in the room.

🚀 Features
🔐 Firebase Authentication (Google Sign-In)

🏠 Room-based chat (Create or join specific rooms)

📡 Real-time messaging with Firebase Firestore

🎨 Tailwind CSS for responsive, modern UI

⚛️ Built with React

🛠️ Tech Stack
Frontend: React (Functional Components + Hooks)

Styling: Tailwind CSS

Authentication: Firebase Authentication

Database: Firebase Firestore

Routing: React Router DOM

📁 Project Structure
bash
Copy
Edit
src/
├── Components/
│   ├── ChatRoom.js        # Chat interface for sending/receiving messages
│   ├── CreateRoom.js      # UI for creating a new chat room
│   ├── Home.js            # Landing page to navigate rooms
│   ├── Login.js           # Google Sign-In authentication
│   └── RoomList.js        # List of available chat rooms
├── firebase.js            # Firebase config and initialization
├── App.js                 # App routes and layout
└── index.js               # App entry point
🔹 Note: This app does not use Context API or Redux. Firebase Auth state is handled via hooks like onAuthStateChanged.

🔧 Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/GokulShaji2005/Chat-Room.git
cd Chat-Room
2. Install Dependencies
bash
Copy
Edit
npm install
3. Firebase Setup
Go to Firebase Console

Create a new project

Enable Authentication > Google Sign-In

Create a Firestore database

Copy your Firebase config and paste it in src/firebase.js:

js
Copy
Edit
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
4. Run the App
bash
Copy
Edit
npm run dev
🧩 Core Functionalities
🔐 Authentication
Uses Firebase’s Google Sign-In

Tracks authentication state with Firebase’s onAuthStateChanged

💬 Chat Rooms
Users can create or join named rooms

Each room has its own real-time chat stream

📡 Real-Time Messaging
Messages are stored in Firestore and updated instantly using Firestore’s snapshot listeners

🖌️ Styling with Tailwind CSS
Tailwind is used for building a fully responsive and clean UI.

Example:

js
Copy
Edit
<div className="p-4 max-w-xl mx-auto bg-white rounded shadow">
  <h1 className="text-xl font-bold">Welcome to ChatApp</h1>
</div>
✅ Future Enhancements
🧾 Message timestamps

🔔 Notification for new messages

👤 User profile and status

📁 Media/file sharing

📃 License
This project is open-source and free to use under the MIT License.
