import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [saidYes, setSaidYes] = useState(false);
  const noButtonRef = useRef(null);

  const handleNoHover = () => {
    const noButton = noButtonRef.current;
    if (noButton) {
      const randomX = Math.floor(Math.random() * window.innerWidth);
      const randomY = Math.floor(Math.random() * window.innerHeight);

      noButton.style.position = 'absolute';
      noButton.style.left = `${Math.min(randomX, window.innerWidth - noButton.offsetWidth)}px`;
      noButton.style.top = `${Math.min(randomY, window.innerHeight - noButton.offsetHeight)}px`;
    }
  };

  const handleYesClick = () => {
    setSaidYes(true);
    toast.success('Awww, so sweet! 💖');
  };

  return (
    <div className="container">
      {!saidYes ? (
        <>
          <h1>Hello {name ? name : 'there'}, Do you love me?</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter girl's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button onClick={handleYesClick}>Yes</button>
            <button
              ref={noButtonRef}
              onMouseEnter={handleNoHover}
            >
              No
            </button>
          </div>
        </>
      ) : (
        <div className="surprise-container">
          <h2>{name}, you made a great choice! 💖</h2>
          <img src="https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif" alt="surprise" className="surprise-image" />
          <p>Congratulations! Love is in the air! 🎉</p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
