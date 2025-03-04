import React, { useState } from "react";
import UserPosts from "./components/UserPosts";
import CountdownTimer from "./components/CountdownTimer";
import WindowSize from "./components/WindowSize";
import ValidatedInput from "./components/ValidatedInput";

const App = () => {
  const [userId, setUserId] = useState(1);

  return (
    <div>
      <h1>React useEffect Exercises</h1>

      <h2>Change User ID</h2>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <UserPosts userId={userId} />

      <hr />
      <CountdownTimer initialValue={10} />

      <hr />
      <WindowSize />

      <hr />
      <ValidatedInput
        validationFunction={(val) => val.length >= 3}
        errorMessage="Input must be at least 3 characters long."
      />
    </div>
  );
};

export default App;
