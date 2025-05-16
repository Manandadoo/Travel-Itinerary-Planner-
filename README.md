# Travel Itinerary Planner

A web-based application designed to simplify travel planning by allowing users to create, customize, and manage their travel itineraries with ease.

## ✨ Features

- **User-Friendly Interface**: Intuitive design for seamless navigation and itinerary creation.  
- **Customizable Itineraries**: Add, edit, or remove destinations and activities as per your travel plans.  
- **Responsive Design**: Optimized for various devices, ensuring accessibility on desktops, tablets, and smartphones.

## 🛠️ Technologies Used

- **Frontend**: React.js, HTML, CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

**Clone the repository:**

```bash
git clone https://github.com/Manandadoo/Travel-Itinerary-Planner-.git
cd Travel-Itinerary-Planner-
```

**Install dependencies for both frontend and backend:**

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Set up environment variables

Create a `.env` file in the `backend` directory with the following content:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

### Start the development servers:

```bash
# Start backend server
cd backend
npm start

# Start frontend server
cd ../frontend
npm start
```

The frontend will typically run on `http://localhost:3000` and the backend on `http://localhost:5000`.

## 📁 Project Structure

```
Travel-Itinerary-Planner-/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
└── README.md
```

## 📬 Contact

For inquiries or feedback, feel free to contact [your.email@example.com](mailto:your.email@example.com).
