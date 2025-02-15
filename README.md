# 💬 Real-Time Chat Application

A real-time chat application built using React and Firebase that allows users to send messages instantly.

## 🚀 Features

- User authentication (Sign up & Sign in)
- Real-time messaging using Firebase Firestore
- Online/offline user status
- Profile customization
- Responsive UI for mobile and desktop
- Secure authentication with Firebase Authentication

## 🛠️ Tech Stack

### Frontend:
- React.js (with React Hooks & Context API)
- Tailwind CSS for styling
- React Router for navigation

### Backend:
- Firebase Firestore (for real-time database)
- Firebase Authentication (for user authentication)
- Firebase Cloud Storage (for profile pictures)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project in [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database & Authentication
   - Get your Firebase configuration and update the `.env` file:
     ```env
     REACT_APP_API_KEY=your_firebase_api_key
     REACT_APP_AUTH_DOMAIN=your_auth_domain
     REACT_APP_PROJECT_ID=your_project_id
     REACT_APP_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_APP_ID=your_app_id
     ```

4. **Run the application**
   ```sh
   npm start
   ```

5. **Access the app**
   - Open `http://localhost:3000`

## 📸 Screenshots
_Add some screenshots of your app_

## 🛠️ Firebase Firestore Structure
```
users (collection)
  ├── userId (document)
      ├── displayName: string
      ├── email: string
      ├── profilePic: string
      ├── onlineStatus: boolean
chats (collection)
  ├── chatId (document)
      ├── senderId: string
      ├── receiverId: string
      ├── message: string
      ├── timestamp: timestamp
```

## 📜 License
This project is licensed under the MIT License.

## 🤝 Contributing
Contributions are welcome! If you have suggestions or issues, feel free to open an issue or pull request.

## 📩 Contact
For any questions or support, contact me at [your-email@example.com] or connect on [LinkedIn](https://linkedin.com/in/yourprofile).
