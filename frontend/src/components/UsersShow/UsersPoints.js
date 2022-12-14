import './UsersShow.css'

const UsersPoints = () => {
  return (
      <div id="points-box">
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Points</h2>
          <div>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "24px",
              }}
            >
              Your Points: 0 PTS
            </span>
          </div>
        </header>
        <div>
          <main id='main-points-slider'>
            <section>
              <h5>Earned</h5>
              </section>
            <section>
              <h5>Next Reward</h5>
              </section>
          </main>
        </div>
      </div>

  );
};

export default UsersPoints;
