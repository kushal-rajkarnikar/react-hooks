import { createContext, useContext } from "react";

//Context Hooks
const moods = {
  happy: "😊",
  sad: "😢",
  hungry: "🤤",
};

const MoodContext = createContext(moods);

export default function Context() {
  return (
    <>
      <h1>Context</h1>
      <p>
        React Context is a way to manage state globally. It can be used together
        with the useState Hook to share state between deeply nested components
        more easily than with useState alone.
      </p>
      <div>
        <MoodContext.Provider value={moods.happy}>
          <MoodEmoji />
        </MoodContext.Provider>
      </div>
    </>
  );
}

function MoodEmoji() {
  return <Mood />;
}

function Mood() {
  const mood = useContext(MoodContext);
  return <p className="emoji-box">I am {mood}</p>;
}
