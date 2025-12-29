🎵 Music Cloud
A modern music streaming web application inspired by platforms like Spotify.
Users can browse playlists, play songs, view artists, and enjoy a smooth listening experience with a clean UI.
🚀 Features
🎧 Play / Pause music
⏭️ Next & Previous track controls
📃 Playlist view
🎨 Dynamic album artwork
🔄 Persistent global player state
⚡ Fast performance with Vite
📱 Responsive UI (desktop-first, mobile support in progress)
🌐 API-powered music data
🛠️ Tech Stack
Frontend
React (with Hooks)
Vite
Bootstrap 5
Font Awesome Icons
Axios
State Management
React Context API
Backend (API)
Custom REST API
Hosted on PythonAnywhere
📂 Project Structure
Copy code
Txt
src/
├── components/
│   ├── controls/
│   ├── music/
│   ├── video/
│   ├── nowPlaying/
│   └── home/
├── context/
│   ├── GlobalContext.jsx
│   └── PlayerContext.jsx
├── pages/
│   └── Playlist.jsx
├── App.jsx
├── main.jsx
└── App.css
🔧 Installation & Setup
1️⃣ Clone the repository
Copy code
Bash
git clone https://github.com/your-username/music-cloud.git
cd music-cloud
2️⃣ Install dependencies
Copy code
Bash
npm install
3️⃣ Run development server
Copy code
Bash
npm run dev
4️⃣ Build for production
Copy code
Bash
npm run build
🌍 Environment Notes
Make sure Bootstrap and Font Awesome are properly installed:
Copy code
Bash
npm install bootstrap font-awesome
Imported globally in main.jsx:
Copy code
Js
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
⚠️ Known Issues
UI may behave differently in production if Bootstrap CSS is missing or not bundled correctly
Mobile layout still under improvement
Audio state resets on hard refresh (working on persistence)
🧠 Lessons Learned
Proper global state initialization is critical for media players
Context API must handle page refresh edge cases
Vite requires explicit dependency installation (no magic imports)
Production CSS bundling can break layouts if misconfigured
✨ Future Improvements
🔐 Authentication (login / signup)
❤️ Like & favorite songs
🔍 Search functionality
📱 Improved mobile-first design
💾 Persist player state using localStorage
🎶 Queue & shuffle mode
👨‍💻 Author
Azeez Sulaimon
Fullstack Developer | Music Tech Enthusiast
Nigeria 🇳🇬