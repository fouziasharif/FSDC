import React, { useState } from 'react';

function StateInReact() {
  const [num, setNum] = useState(1);
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(true);
  };

  return (
    <div>
      <h1>State in React</h1>

      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>Change number</button>

      <br /><br />

      <button onClick={handleLike} disabled={like}>
        {like ? 'Already liked' : 'Like'}
      </button>

      
    </div>
  );
}

export default StateInReact;

