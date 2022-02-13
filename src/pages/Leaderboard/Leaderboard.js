import React, { useEffect, useState } from 'react';
import Timer from '../../components/Timer';
import { useDocument } from '../../hooks/useDocument';
import './Leaderboard.css';
const Leaderboard = () => {
  const [documents, setDocuments] = useState(null);
  const { document } = useDocument('scores', 'userScores');

  useEffect(() => {
    if (document) {
      setDocuments(
        document.scores.sort((a, b) => {
          return a.time - b.time;
        }),
      );
    }
  });
  return (
    <div>
      <div className='leaderboard'>
        <div className='heading'>
          <span>Leaderbord</span>
        </div>
        {documents &&
          documents.map((doc, index) => (
            <div key={index} className='record'>
              <div>{index + 1}</div>
              <div>{doc.user}</div>

              <Timer time={doc.time} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Leaderboard;
