# AK-ChatBot

**AI Chatbot Project** built with a Python backend and React frontend. This project allows users to interact with an AI-powered chatbot, providing a sleek, modern interface for chatting.


## Features

- AI-powered chatbot using a backend API.
- Clean and responsive UI (React + Tailwind CSS).
- Separate Backend (Python/Flask) and Frontend (React) folders.
- Conversation history with smooth scrolling.
- Loading indicators for AI responses.
- Easy to deploy and extend.

============================================================================================

## Tech Stack

**Backend:**
- Python
- Flask
- REST API
- Virtual environment for dependency management

**Frontend:**
- React
- Tailwind CSS
- Vite
- Modern responsive design

--------------------------------------------------------

## Folder Structure
AK-ChatBot/
├── Backend/
│   ├── app.py
│   ├── requirements.txt
│   └── .env  (contains secrets, not pushed)
├── Frontend/
│   └── my-project/
│       ├── src/
│       ├── public/
│       ├── package.json
│       └── ...
└── README.md


-------------------------------------------------------------------------

## Installation
### Backend
1. Navigate to the backend folder:
   cd Backend
3. Create a virtual environment:
   python -m venv venv
4. Activate the environment:
   Windows:
   venv\Scripts\activate
   Linux/Mac:
   source venv/bin/activate
5. Install dependencies:
   pip install -r requirements.txt
6. Run the server:
   python app.py


## Frontend
1. Navigate to the frontend folder:
   cd Frontend/my-project
2. Install dependencies:
   npm install
3. Start the development server:
   npm run dev
Open the URL shown in the terminal (http://localhost:5173).

------------------------------------------------------------------------------------------------

## Usage
Open the frontend URL in your browser.
Type a message in the input box and hit Send.
Wait for the AI to respond.
Chat history is saved temporarily in the session

## Important Notes
Do not push your .env file to GitHub (contains API keys or secrets). It is included in .gitignore.
You can customize the AI backend or integrate any other AI API.

## Author
Adnan Khan
YouTube: Chasewithadnankhan1122
Email: adnankhan47219@gmail.com
Location: Peshawar, Pakistan
