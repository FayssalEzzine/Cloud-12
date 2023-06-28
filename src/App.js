import React, { useState } from 'react';
import CourseContent from './CourseContent';
import JoinClass from './join_class';

const App = () => {
  const [showCourseContent, setShowCourseContent] = useState(true);

  const toggleInterface = () => {
    setShowCourseContent(!showCourseContent);
  };

  return (
    <div>
      <button onClick={toggleInterface}>Toggle Interface</button>

      {showCourseContent ? <CourseContent /> : <JoinClass />}
    </div>
  );
};

export default App;
