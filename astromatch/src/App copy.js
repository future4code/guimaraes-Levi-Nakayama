import React, { useState } from 'react';
import './App.css';

function App() {
  const [showAllMatches, setShowAllMatches] = useState(false)

  return (
    <div className="App">
      <AllMatchesButton onClick={() => setShowAllMatches(!showAllMatches)} />
      {showAllMatches ? (
        <>
          <Profile />
          <div>
            <DenyButton />
            <LikeButton />
          </div>
        </>
      ) : (
        <AllMatchesList />
      )}
    </div>
  );
}

export default App;
