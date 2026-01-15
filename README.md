# 📋 TaskVault - Modern Task Management Application

TaskVault is a scalable task management system with secure JWT authentication, role-based access control, and RESTful APIs, built to demonstrate backend engineering, security, and full-stack integration.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

### The project includes:
- Secure JWT-based authentication
- Role-based access control (user/admin)
- CRUD APIs for tasks
- Versioned REST APIs
- Validation and error handling
- Basic frontend UI for testing APIs
- Postman API documentation
- Scalability notes

---

### 🔐 Demo Credentials

Use the following accounts to test all features:
👤 Admin Account
- Go to the Frontend page(deployed on Vercel): https://task-vault-a-scalable-rest-api-with.vercel.app/login
- Email: userA@test.com , userb@test.com
- Password: 123456 , 123456
- Role: Admin
- Can access:
- Admin routes
- View all users
- Manage tasks
- Full role-based access

---
### 🧪 How to Use:
Go to frontend login page
Login using above credentials

Try:
- Creating tasks
- Editing/deleting tasks
- Accessing admin routes with user (should fail)
- Accessing admin routes with admin (should succeed)

---

## 🎯 Overview
- ✅ **User Authentication** - Secure registration and login with JWT
- ✅ **Task Management** - Create, read, update, and delete tasks
- ✅ **User Profiles** - Manage user accounts with roles (User/Admin)
- ✅ **Role-Based Access** - Different permissions for users and administrators
- ✅ **Modern UI** - Clean, professional, startup-quality design with animations
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Data Validation** - Backend validation using Joi for data integrity
- ✅ **Secure Passwords** - bcrypt hashing for password security
- ✅ **JWT Authentication** - Secure token-based authentication
- ✅ **CORS Enabled** - Ready for cross-origin requests

---

## 📁 Project Structure

```
TaskVault/
├── backend/                          # Node.js/Express Backend
│   ├── src/
│   │   ├── app.js                   # Express app setup & route configuration
│   │   ├── config/
│   │   │   └── db.js                # MongoDB connection configuration
│   │   ├── controllers/
│   │   │   ├── auth.controller.js   # Authentication logic (register, login)
│   │   │   └── task.controller.js   # Task CRUD operations
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js   # JWT verification & protection
│   │   │   ├── error.middleware.js  # Global error handling
│   │   │   └── role.middleware.js   # Role-based access control
│   │   ├── models/
│   │   │   ├── user.model.js        # User schema & model
│   │   │   └── task.model.js        # Task schema & model
│   │   ├── routes/
│   │   │   ├── auth.routes.js       # Auth endpoints (/register, /login)
│   │   │   ├── task.routes.js       # Task endpoints (CRUD operations)
│   │   │   └── admin.routes.js      # Admin endpoints
│   │   ├── validators/
│   │   │   └── task.validator.js    # Task validation schemas
│   │   └── utils/                   # Utility functions
│   ├── package.json                 # Backend dependencies
│   └── .env                         # Environment variables (MongoDB URI, JWT secret, PORT)
│
├── frontend/                         # React/Vite Frontend
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── App.jsx                  # Main app component & routing
│   │   ├── App.css                  # Global app styles
│   │   ├── index.css                # Base styles & theme
│   │   ├── main.jsx                 # React entry point
│   │   ├── pages/
│   │   │   ├── Login.jsx            # Login page
│   │   │   ├── Register.jsx         # Registration page
│   │   │   └── Dashboard.jsx        # Task dashboard (main feature)
│   │   ├── pages/
│   │   │   └── Dashboard.css        # Dashboard styling (modern, bold design)
│   │   └── assets/                  # Images and icons
│   ├── package.json                 # Frontend dependencies
│   ├── vite.config.js               # Vite configuration
│   ├── eslint.config.js             # ESLint configuration
│   └── index.html                   # HTML entry point
│
├── package.json                     # Root package (monorepo reference)
└── README.md                        # Project documentation
```

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose | Version |
|-----------|---------|---------|
| **Node.js** | Runtime environment | Latest |
| **Express.js** | Web framework | ^5.2.1 |
| **MongoDB** | Database | Latest |
| **Mongoose** | ODM for MongoDB | ^9.1.3 |
| **JWT** | Authentication | ^9.0.3 |
| **bcryptjs** | Password hashing | ^3.0.3 |
| **Joi** | Data validation | ^18.0.2 |
| **CORS** | Cross-origin requests | ^2.8.5 |
| **Dotenv** | Environment variables | ^17.2.3 |
| **Nodemon** | Development auto-reload | ^3.1.11 |

### Frontend
| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI library | ^19.2.0 |
| **Vite** | Build tool | ^7.2.4 |
| **React Router** | Client-side routing | ^7.12.0 |
| **Axios** | HTTP client | ^1.13.2 |
| **Tailwind CSS** | Utility CSS framework | ^4.1.18 |
| **ESLint** | Code linting | ^9.39.1 |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or Atlas cloud database)
- **Git** for version control

### Installation & Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/TaskVault.git
cd TaskVault
```

#### 2. Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cat > .env << EOF
MONGO_URI=mongodb://localhost:27017/taskvault
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
EOF

# Run development server
npm run dev
```

The backend will start on `http://localhost:5000`

#### 3. Setup Frontend

```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

The frontend will start on `http://localhost:5173` (default Vite port)

---

## 📚 API Endpoints

### Authentication Routes (`/api/v1/auth`)

#### Register User
```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

#### Login User
```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### Task Routes (`/api/v1/tasks`) - Protected ⚠️

All task endpoints require JWT token in header:
```
Authorization: Bearer <your_jwt_token>
```

#### Create Task
```http
POST /api/v1/tasks
Content-Type: application/json
Authorization: Bearer <token>

{
  "title": "Complete project report",
  "description": "Finish the quarterly report by Friday"
}
```

#### Get All Tasks
```http
GET /api/v1/tasks
Authorization: Bearer <token>
```

#### Update Task
```http
PUT /api/v1/tasks/:id
Content-Type: application/json
Authorization: Bearer <token>

{
  "title": "Updated task title",
  "description": "Updated description"
}
```

#### Delete Task
```http
DELETE /api/v1/tasks/:id
Authorization: Bearer <token>
```

### Protected Test Route
```http
GET /api/v1/protected
Authorization: Bearer <token>
```

---

## 📊 Database Schema

### User Model
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (enum: ["user", "admin"], default: "user"),
  createdAt: Date,
  updatedAt: Date
}
```

### Task Model
```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String,
  user: ObjectId (reference to User),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🎨 UI/UX Design

The frontend features a **modern, professional, startup-quality design** with:

### Design Elements
- **Color Palette**: Deep blue (#1e3a8a), violet (#7c3aed), white, soft grays
- **Typography**: Bold, readable headings with proper hierarchy
- **Components**: Rounded cards with soft shadows, glassmorphism effects
- **Spacing**: Breathable layout with consistent padding and margins
- **Animations**: Smooth transitions, hover effects, floating animations

### Responsive Breakpoints
- **Desktop**: 1000px max-width centered container
- **Tablet**: Optimized for touch with larger targets
- **Mobile**: Single column layout, full-width inputs

### Dashboard Features
- Header with app branding and user profile
- Create Task card with character counters
- Task list as stylish cards with edit/delete actions
- Empty state with motivational messaging
- Smooth animations and instant visual feedback
- Dark mode support
- Accessibility-friendly contrast ratios

---

## 🔐 Authentication & Security

### JWT Authentication Flow
1. User registers → password hashed with bcrypt
2. User logs in → JWT token generated
3. Token sent in `Authorization: Bearer <token>` header
4. Middleware verifies token validity
5. Protected routes require valid token

### Security Features
- ✅ Password hashing with bcryptjs
- ✅ JWT token-based authentication
- ✅ Protected API routes
- ✅ Role-based access control (User/Admin)
- ✅ CORS protection
- ✅ Input validation with Joi

---

## 📦 Available Scripts

### Backend Scripts
```bash
# Development server with auto-reload
npm run dev

# Start production server
npm start
```

### Frontend Scripts
```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error**
```
DB Error: connect ECONNREFUSED
```
- Ensure MongoDB is running locally or check `MONGO_URI` in `.env`
- Use MongoDB Atlas connection string: `mongodb+srv://username:password@cluster.mongodb.net/taskvault`

**Port Already in Use**
```
Error: listen EADDRINUSE: address already in use :::5000
```
- Change PORT in `.env` file
- Or kill process: `lsof -ti:5000 | xargs kill -9` (Mac/Linux)

### Frontend Issues

**Module Not Found / Import Errors**
```
npm install
```

**Port 5173 Already in Use**
```
npm run dev -- --port 3000
```

---

## 🌟 Features Overview

### Current Implementation
- ✅ User registration with validation
- ✅ User login with JWT tokens
- ✅ Task creation with title and description
- ✅ Task listing (user's own tasks)
- ✅ Task editing
- ✅ Task deletion
- ✅ Protected routes
- ✅ Modern, responsive UI
- ✅ Role-based middleware

### Future Enhancements
- 🔄 Task categories/tags
- 🔄 Task priority levels
- 🔄 Due dates and reminders
- 🔄 Task sharing with other users
- 🔄 Dark/Light theme toggle
- 🔄 Notifications system
- 🔄 Task search and filtering
- 🔄 Analytics dashboard
- 🔄 Mobile app (React Native)
- 🔄 Backup and sync features

---

## 📝 Environment Variables

### Backend (.env)
```env
# Database
MONGO_URI=mongodb://localhost:27017/taskvault

# Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# Server
PORT=5000
NODE_ENV=development
```

### Frontend (.env - if needed)
```env
VITE_API_URL=http://localhost:5000/api/v1
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👥 Author
SWAPNIL MISHRA

**TaskVault**
- Built for productivity enthusiasts
- Version 1.0.0
- Last Updated: January 2026

---

## 📞 Support & Contact

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact: msihraswapnil10112@gmail.com

---

## 🎯 Roadmap

### Phase 1 (Current) ✅
- Core task management
- User authentication
- Modern UI design

### Phase 2 (Planning)
- Advanced task filtering
- Collaboration features
- Mobile responsive improvements

### Phase 3 (Future)
- Mobile applications
- Advanced analytics
- Team collaboration

---

## 📊 Project Stats

- **Total Files**: 20+
- **Backend Routes**: 15+
- **Frontend Pages**: 3
- **Database Collections**: 2
- **API Endpoints**: 10+
- **Lines of Code**: 1000+

---

## ✨ Highlights

- 🎨 Premium UI/UX Design
- ⚡ Fast & Responsive
- 🔒 Secure Authentication
- 📱 Mobile Friendly
- 🚀 Production Ready
- 📚 Well Documented
- 🔧 Easy to Extend

---

**Happy Task Managing! 🚀**

*TaskVault - Organize. Achieve. Master.*

