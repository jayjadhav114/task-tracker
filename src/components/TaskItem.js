import React, { useState } from 'react';

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description || '');

  const handleSave = () => {
    onEdit(task.id, editedTitle, editedDescription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(task.title);
    setEditedDescription(task.description || '');
  };

  return (
    <div
      className={`task-item ${task.completed ? 'completed' : ''}`}
      style={{
        backgroundColor: task.completed ? '#d4edda' : '#ffe6e6', // Green for completed, Red for pending
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '12px',
        marginBottom: '10px',
        color: 'black',
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Task title"
            required
            style={{
              width: '100%',
              marginBottom: '6px',
              padding: '8px',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: 'white',
              color: 'black',
            }}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            placeholder="Task description"
            style={{
              width: '100%',
              marginBottom: '8px',
              padding: '8px',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: 'white',
              color: 'black',
              whiteSpace: 'pre-wrap',
            }}
          />
          <button className="btn-save" onClick={handleSave}>✅ Save</button>
          <button className="btn-cancel" onClick={handleCancel}>❌ Cancel</button>
        </>
      ) : (
        <>
          <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{task.title}</h3>

          {task.description && (
            <p
              style={{
                margin: '6px 0',
                fontSize: '1rem',
                color: '#333',
                padding: '6px 0',
                whiteSpace: 'pre-wrap',
                borderTop: '1px solid #ddd',
              }}
            >
              {task.description}
            </p>
          )}

          <p style={{ fontSize: '0.85rem', color: '#555' }}>
            Created: {new Date(task.createdAt).toLocaleString()}
          </p>
          <p style={{ fontSize: '0.85rem' }}>
            Status: <strong>{task.completed ? 'Completed' : 'Pending'}</strong>
          </p>

          <button onClick={() => onToggle(task.id)}>
            ✔️ Mark {task.completed ? 'Pending' : 'Done'}
          </button>
          <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
          <button onClick={() => onDelete(task.id)}>🗑️ Delete</button>
        </>
      )}
    </div>
  );
}

export default TaskItem;
