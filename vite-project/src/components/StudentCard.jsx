// /components/StudentCard.jsx
import React from 'react';
import './StudentCard.css'; // Assume you create a CSS file for styling

const StudentCard = ({ name, rollNumber, course, email, skills, isActive, age, grade, imageUrl }) => {
  const statusClass = isActive ? 'status-active' : 'status-inactive';
  const statusText = isActive ? 'Active' : 'Alumni';

  return (
    <div className="student-card">
      <div className="card-header">
        <img src={imageUrl} alt={`${name}'s photo`} className="student-image" />
        <h3>{name}</h3>
        <span className={`status-badge ${statusClass}`}>{statusText}</span>
      </div>
      <p><strong>Roll/ID:</strong> {rollNumber}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Grade:</strong> {grade}</p>

      <h4>Skills:</h4>
      <div className="skills-list">
        {/* Use map() to render the skills array */}
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StudentCard;