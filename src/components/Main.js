import React from "react";
// import images or files from ""../images/filename"; etc.

function Main() {
  return (
    <main>
      <section id="about-me" class="about-me">
        <h2>About Me</h2>
        <p>
          Christopher Chorney is a cello player and multi-instrumentalist
          hailing from Honolulu, Hawaii who has played numerous Grammy-Award
          Winning tracks. He is the owner of Analog Rock Machine Studio and has
          produced albums for a diverse array of local musicians. His interests
          include three-dimensional audio, web3, digital artwork, and full-stack
          web development. He currently resides in Richmond Virginia.
        </p>
      </section>

      <section id="work" class="work">
        <h2>Work</h2>

        <div class="centered">
          <div class="container">
            <div id="main-work" class="card card--full">
              <h3>Hawaii Classic Duo</h3>

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
              <div class="card">
                <h3>Code Wars</h3>

                <a href="https://www.codewars.com/users/ckc2007">
                  <img
                    src="./assets/images/codewars section pic.png"
                    alt="5 K Y U ranking on codewars"
                  />
                </a>

                <p>Practice kata</p>
              </div>

              <div class="card">
                <h3>Code Signal</h3>

                <a href="https://app.codesignal.com/profile/christoph_jqs">
                  <img
                    src="./assets/images/codesignal section pic.png"
                    alt="completed basic training in code signal with badges in java script"
                  />
                </a>
                <p>Coding challenges and training</p>
              </div>

              <div class="card">
                <h3>Mimo App</h3>

                <a href="https://mimo.org/">
                  <img
                    src="./assets/images/mimo web.png"
                    alt="mimo app certifcation in web development"
                  />
                </a>
                <p>Certifications in web development, Python and SQL</p>
              </div>

              <div class="card">
                <h3>Slow Drip</h3>

                <a href="https://www.youtube.com/channel/UCJeoEVYLCI3uuPaWMMaw_Kg/playlists">
                  <img
                    src="./assets/images/slow drip section pic.jpeg"
                    alt="a psychedelic image of a cello player, a sunset and yoga participants near the beach"
                  />
                </a>
                <p>Ambisonic music production</p>
              </div>

              <div class="card">
                <h3>Analog Rock Machine Studio</h3>

                <a href="https://analogrockmachinestudio.com/">
                  <img
                    src="./assets/images/arms section pic.jpeg"
                    alt="an engineer points to a fader on a large recording studio console"
                  />
                </a>
                <p>Music recording studio and record label</p>
              </div>

              <div class="card">
                <h3>Objkt - Nature photography</h3>

                <a href="https://objkt.com/collection/KT1SdEkvQyFyvpEhFtp3kMNGz6hjU7WYodhJ">
                  <img
                    src="./assets/images/objkt.jpeg"
                    alt="frozen ice bubbles with abstract natural forms"
                  />
                </a>
                <p>Web3 - Tezos blockchain photography</p>
              </div>

              <div class="card">
                <h3>Music Production</h3>

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

      <section id="resume" class="resume">
        <h2>Resume</h2>

        <ul>
          <a href="./assets/docs/cv.pdf" target="_blank">
            <li>CV</li>
          </a>
          <a href="./assets/docs/bio.pdf" target="_blank">
            <li>Bio</li>
          </a>
        </ul>
      </section>
    </main>
  );
}

export default Main;
