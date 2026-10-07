import "./App.css";



function App() {
  const tracks = [
    "Track 1",
    "Track 2",
    "Track 3",
    "Track 4",
    "Track 5",
    "Track 6",
    "Track 7",
    "Track 8",
    "Track 9",
    "Track 10",
  ];

  return (
    <div className="screen">

      <div className="app">

        {/* ================= HEADER ================= */}
        <header className="header">

          <button className="back-button">
            ◀
          </button>

          <span className="header-title">
            ALBUM TRACKS
          </span>

          <button className="menu-button">
            ☰
          </button>

        </header>


        {/* ================= ALBUM TITLE ================= */}
        <section className="album-title">

          <h1>912 Album</h1>

          <p>Lorem f. Ipsum</p>

        </section>


        {/* ================= ALBUM COVER ================= */}
        <section className="album-area">

          {/* CD */}
          <div className="cd">
            <div className="cd-hole"></div>
          </div>

          {/* YOUR ALBUM PHOTO */}
          <img
            src="/album.jpg"
            alt="Nirvana Album"
            className="album-photo"
          />

        </section>


        {/* ================= DIVIDER ================= */}
        <div className="divider"></div>


        {/* ================= TRACK LIST ================= */}
        <main className="tracks">

          {tracks.map((track, index) => (

            <div className="track" key={index}>

              <div className="track-info">

                <strong>
                  {track}
                </strong>

                <span>
                  Lorem f. Ipsum
                </span>

              </div>


              <div className="track-icons">

                <button>
                  ☆
                </button>

                <button>
                  ⊘
                </button>

                <button>
                  ☰
                </button>

              </div>

            </div>

          ))}

        </main>


        {/* ================= MUSIC PLAYER ================= */}
        <div className="player">

          <div className="player-line">
            <div className="player-dot"></div>
          </div>

        </div>


        {/* ================= BOTTOM NAVIGATION ================= */}
        <footer className="bottom-nav">

          <button>
            ◀
          </button>

          <button className="home-button">
            ◆
          </button>

          <button>
            ☑
          </button>

        </footer>

      </div>

    </div>
  );
}

export default App;