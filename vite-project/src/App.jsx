// App.jsx
import React from 'react';
import StudentCard from './components/StudentCard';
// 💡 CHANGE THIS LINE:
import { activeStudents, alumni } from './data.js';
import './App.css'; 

// ... rest of App component
const App = () => {
  // --- Directory Statistics Calculation ---
  const totalStudents = activeStudents.length + alumni.length;
  const activeCount = activeStudents.length;
  const alumniCount = alumni.length;

  // Function to find the most common skill
  const getMostCommonSkill = () => {
    const allStudents = [...activeStudents, ...alumni];
    const skillCounts = {};
    
    // Count occurrences of each skill
    allStudents.forEach(student => {
      student.skills.forEach(skill => {
        const normalizedSkill = skill.toLowerCase();
        skillCounts[normalizedSkill] = (skillCounts[normalizedSkill] || 0) + 1;
      });
    });

    let mostCommonSkill = 'N/A';
    let maxCount = 0;

    // Find the skill with the highest count
    for (const skill in skillCounts) {
      if (skillCounts[skill] > maxCount) {
        maxCount = skillCounts[skill];
        mostCommonSkill = skill.charAt(0).toUpperCase() + skill.slice(1); // Capitalize
      }
    }
    return mostCommonSkill;
  };

  const mostCommonSkill = getMostCommonSkill();

  return (
    <div className="container">
      {/* 1. Header Section */}
      <header className="directory-header">
        <h1>Student Directory 2025</h1>
        <h2>Full Stack Development Batch</h2>
      </header>

      {/* 2. Directory Statistics Section */}
      <section className="statistics-section">
        <h3>📊 Directory Statistics</h3>
        <p>Total Students in Directory: <strong>{totalStudents}</strong></p>
        <p>Active Students: <strong>{activeCount}</strong> | Alumni: <strong>{alumniCount}</strong></p>
        <p>Most Common Skill: <strong>{mostCommonSkill}</strong></p>
      </section>

      <hr />

      {/* 3. Active Students List */}
      <section className="student-list-section">
        <h3>🎓 Active Students ({activeCount})</h3>
        <div className="card-grid">
          {/* Use map() to render the list with a unique key */}
          {activeStudents.map(student => (
            <StudentCard
              key={student.rollNumber} // IMPORTANT: Use a unique key
              {...student} // Spread all student properties as props
            />
          ))}
        </div>
      </section>

      <hr />

      {/* 4. Alumni List */}
      <section className="student-list-section alumni-section">
        <h3>⭐ Alumni ({alumniCount})</h3>
        <div className="card-grid">
          {/* Use map() to render the list with a unique key */}
          {alumni.map(student => (
            <StudentCard
              key={student.rollNumber} // IMPORTANT: Use a unique key
              {...student} // Spread all student properties as props
            />
          ))}
        </div>
      </section>

      {/* 5. Footer Section */}
      <footer className="directory-footer">
        <p>Institution: **[Your Institution/Course Name]**</p>
        <p>For directory queries, contact: directory@courseemail.com</p>
        <p>
          &copy; {new Date().getFullYear()} Student Portal - Full Stack Development Batch
        </p>
      </footer>
    </div>
  );
};

export default App;