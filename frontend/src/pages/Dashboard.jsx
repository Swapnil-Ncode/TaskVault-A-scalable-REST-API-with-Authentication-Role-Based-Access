import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleCreateOrUpdate = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editId) {
      setTasks(
        tasks.map((t) =>
          t.id === editId ? { ...t, title, description } : t
        )
      );
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        title,
        description,
      };
      setTasks([...tasks, newTask]);
    }

    setTitle("");
    setDescription("");
  };

  const handleEdit = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditId(task.id);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="app-branding">
            <h1 className="app-title">
              <span className="logo-icon">📋</span> TaskVault
            </h1>
            <p className="app-tagline">Organize. Achieve. Master.</p>
          </div>
          <div className="user-profile">
            <div className="avatar">👤</div>
            <span className="user-name">Welcome</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="dashboard-container">
        {/* Task Creation Card */}
        <section className="create-task-section">
          <div className="create-task-card">
            <h2 className="section-title">Create New Task</h2>
            <form onSubmit={handleCreateOrUpdate} className="task-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter task title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input-field"
                  maxLength="100"
                />
                <span className="char-count">{title.length}/100</span>
              </div>

              <div className="form-group">
                <textarea
                  placeholder="Add task description (optional)..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="textarea-field"
                  maxLength="500"
                  rows="3"
                />
                <span className="char-count">{description.length}/500</span>
              </div>

              <button type="submit" className="submit-btn">
                {editId ? "✓ Update Task" : "+ Create Task"}
              </button>
              {editId && (
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setEditId(null);
                    setTitle("");
                    setDescription("");
                  }}
                >
                  Cancel
                </button>
              )}
            </form>
          </div>
        </section>

        {/* Task List Section */}
        <section className="tasks-section">
          <h2 className="section-title">
            My Tasks
            {tasks.length > 0 && <span className="task-count">{tasks.length}</span>}
          </h2>

          {tasks.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🎯</div>
              <h3 className="empty-title">No tasks yet</h3>
              <p className="empty-message">
                Create your first task above and start organizing your day!
              </p>
            </div>
          ) : (
            <div className="tasks-grid">
              {tasks.map((task) => (
                <div key={task.id} className="task-card">
                  <div className="task-header">
                    <h3 className="task-title">{task.title}</h3>
                    <div className="task-actions">
                      <button
                        className="action-btn edit-btn"
                        onClick={() => handleEdit(task)}
                        title="Edit task"
                      >
                        ✏️
                      </button>
                      <button
                        className="action-btn delete-btn"
                        onClick={() => handleDelete(task.id)}
                        title="Delete task"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  {description && (
                    <p className="task-description">{task.description}</p>
                  )}
                  <div className="task-footer">
                    <span className="task-meta">ID: {task.id}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Dashboard;


