import React from "react";

function Work() {
  return (
    <section id="work" class="work">
        <h2>Work</h2>
        {/* <!-- music main --> */}
        <div class="centered">
          <div class="container">
            <div id="main-work" class="card card--full">
              <h3>Hawaii Classic Duo</h3>
              {/* <!-- display your press kit image here MAIN --> */}
              <a href="https://www.hawaiiclassicduo.com">
                <img
                  id="biggest-image"
                  src="./assets/images/hawaii classic section low res pic.png"
                  alt="a cellist and a guitarist standing in front of a fountain on a blue sunny day near diamond head in waikiki."
                />
              </a>
              <p>Music performance</p>
            </div>
            <div class="card-container">
              {/* <!-- codewars --> */}
              <div class="card">
                <h3>Code Wars</h3>
                {/* <!-- disoplay code wars log here --> */}
                <a href="https://www.codewars.com/users/ckc2007">
                  <img
                    src="./assets/images/codewars section pic.png"
                    alt="5 K Y U ranking on codewars"
                  />
                </a>
                {/* <!-- codewars badge can be used as image --> */}
                {/* <!-- https://www.codewars.com/users/ckc2007/badges/large --> */}
                <p>Practice kata</p>
              </div>

              {/* <!-- code signal --> */}
              <div class="card">
                <h3>Code Signal</h3>
                {/* <!-- display code signal logo here --> */}
                <a href="https://app.codesignal.com/profile/christoph_jqs">
                  <img
                    src="./assets/images/codesignal section pic.png"
                    alt="completed basic training in code signal with badges in java script"
                  />
                </a>
                <p>Coding challenges and training</p>
              </div>

              {/* <!-- mimo --> */}
              <div class="card">
                <h3>Mimo App</h3>
                {/* <!-- display mimo dev certificaiton images here --> */}
                <a href="https://mimo.org/">
                  <img
                    src="./assets/images/mimo web.png"
                    alt="mimo app certifcation in web development"
                  />
                </a>
                <p>Certifications in web development, Python and SQL</p>
              </div>

              {/* <!-- slow drip --> */}
              <div class="card">
                <h3>Slow Drip</h3>
                {/* <!-- display slow drip work images here --> */}
                <a
                  href="https://www.youtube.com/channel/UCJeoEVYLCI3uuPaWMMaw_Kg/playlists"
                >
                  <img
                    src="./assets/images/slow drip section pic.jpeg"
                    alt="a psychedelic image of a cello player, a sunset and yoga participants near the beach"
                  />
                </a>
                <p>Ambisonic music production</p>
              </div>

              {/* <!-- ARMS --> */}
              <div class="card">
                <h3>Analog Rock Machine Studio</h3>
                {/* <!-- display ARMS work images here --> */}
                <a href="https://analogrockmachinestudio.com/">
                  <img
                    src="./assets/images/arms section pic.jpeg"
                    alt="an engineer points to a fader on a large recording studio console"
                  />
                </a>
                <p>Music recording studio and record label</p>
              </div>

              {/* <!-- objkt --> */}
              <div class="card">
                <h3>Objkt - Nature photography</h3>
                {/* <!-- display objkt images here --> */}
                <a
                  href="https://objkt.com/collection/KT1SdEkvQyFyvpEhFtp3kMNGz6hjU7WYodhJ"
                >
                  <img
                    src="./assets/images/objkt.jpeg"
                    alt="frozen ice bubbles with abstract natural forms"
                  />
                </a>
                <p>Web3 - Tezos blockchain photography</p>
              </div>

              {/* <!-- more music --> */}
              <div class="card">
                <h3>Music Production</h3>
                {/* <!-- display albums here --> */}
                <a href="https://analogrockmachinestudio.com/bands">
                  <img
                    src="./assets/images/music img.jpeg"
                    alt="a 1960s collage-style album cover with band members and flowers on a white background with the title THE GROOVEES"
                  />
                </a>
                <p>Albums I have produced</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Work;
