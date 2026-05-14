# Student Quiz System

A comprehensive web-based quiz application designed for educational institutions to conduct and manage student assessments.

## Features

- **Student Registration**: Students can enter their name and USN to start the quiz
- **Interactive Quiz Interface**: Multiple-choice questions with navigation
- **Real-time Scoring**: Automatic calculation of scores and percentages
- **Admin Dashboard**: View all student results, statistics, and manage data
- **Data Persistence**: Results stored locally (frontend) and via backend API
- **Export Functionality**: Export results to CSV format
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
new project/
├── backend/
│   ├── server.js       # Express.js server
│   ├── models/
│   │   └── Quiz.js     # Quiz model (MongoDB)
│   └── package.json    # Backend dependencies
├── frontend/
│   ├── index.html      # Main quiz interface
│   └── index2.html     # Enhanced quiz interface
├── New Text Document.txt
└── README.md          # This file
```

## Technologies Used

### Frontend
- HTML5
- CSS3 (with modern gradients and animations)
- Vanilla JavaScript (ES6+)
- Local Storage for data persistence

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- RESTful API

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up MongoDB:
   - Install MongoDB locally or use a cloud service like MongoDB Atlas
   - Update the connection string in `server.js` if using a different URI
   - Default: `mongodb://localhost:27017/quiz-system`

4. Start the server:
   ```bash
   npm start
   ```

   For development with auto-restart:
   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:5000`

### Frontend Setup

The frontend files (`index.html` and `index2.html`) are static and can be opened directly in a web browser. For production, serve them through a web server.

## API Endpoints

- `POST /add-question` - Add a new quiz question
- `GET /questions` - Retrieve all quiz questions

## Usage

1. **For Students**:
   - Open `index.html` or `index2.html` in a web browser
   - Enter your full name and USN
   - Take the quiz by answering questions
   - View your score upon completion

2. **For Administrators**:
   - Click "View Admin Dashboard" on the start page
   - View statistics and all student results
   - Export data to CSV or clear all records

## Sample Questions

The application includes 5 sample questions covering:
- Geography
- Programming
- Web Development
- Art History
- Basic Mathematics

## Data Storage

- **Frontend**: Uses browser Local Storage for demo purposes
- **Backend**: MongoDB for persistent storage (when implemented)

## Future Enhancements

- User authentication and authorization
- Dynamic question management
- Timer functionality
- Question categories and difficulty levels
- Advanced analytics and reporting
- Mobile app version

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
