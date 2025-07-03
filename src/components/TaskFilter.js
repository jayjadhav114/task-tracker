import React from 'react';

const TaskFilter = ({ filter, setFilter, tasks }) => {
  const getCount = (status) => {
    if (status === 'Completed') return tasks.filter(task => task.completed).length;
    if (status === 'Pending') return tasks.filter(task => !task.completed).length;
    return tasks.length; // All
  };

  return (
    <div style={{ margin: '20px 0' }}>
      {['All', 'Completed', 'Pending'].map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          style={{
            padding: '10px 15px',
            marginRight: '10px',
            fontWeight: filter === type ? 'bold' : 'normal',
            backgroundColor: filter === type ? '#007bff' : '#ddd',
            color: filter === type ? 'white' : 'black',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          {type} ({getCount(type)})
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
