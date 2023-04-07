import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="image">
          <img src="./image-qr-code.png" alt="qr-code" />
        </div>
        <Information />
      </div>
    </div>
  );
}

export default App;

function Information() {
  return (
    <div className="information">
      <h1>
        Improve your front-end <br />
        skills by building projects
      </h1>
      <p>
        Scan the QR code to visit Frontend <br />
        Mentor and take your coding skills to <br />
        the next level
      </p>
    </div>
  );
}
