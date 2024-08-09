import React, { useEffect,useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Subbar = () => {
  const location = useLocation();
  const [activeSubject, setActiveSubject] = useState(null);

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const currentSubject = pathParts[2]; 
    setActiveSubject(currentSubject);
  }, [location]);

  return (
    <div className='container-fluid mx-auto'>
      <p className="text-center text-3xl font-fredoka">Free Online Resources for kids......</p>
      <ul className="flex space-x-20 justify-center mt-6 cursor-pointer overflow-auto">
        {['maths', 'science', 'arts', 'geography'].map((subject) => (
          <li key={subject} onClick={() => setActiveSubject(subject)}>
            <Link to={`/subject/${subject}`}>
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </Link>
            {activeSubject === subject && (
              <div className='h-2 bg-orange-500 mt-1 w-full rounded-md'></div>
            )}
          </li>
        ))}
        <details>
          <summary onClick={() => setActiveSubject('language')}>Language</summary>
          {activeSubject === 'language' && (
            <div className='h-2 bg-orange-500 mt-1 w-full rounded-md'></div>
          )}
          <li>
            <Link to="/language/hindi">Hindi</Link>
          </li>
          <li>
            <Link to="/language/english">English</Link>
          </li>
          <li>
            <Link to="/language/marathi">Marathi</Link>
          </li>
        </details>
      </ul>
    </div>
  );
};

export default Subbar;
