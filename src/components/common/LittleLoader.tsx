const LittleLoader = () => (
    <>
  <div
    id="loader"
    style={{
      width: "200px",
      height: "200px",
      position: "relative",
      margin: "0 auto",
      background: "transparent",
    }}
  >
    <div className="image-stack">
      <img className="img-1" src="/assets/darkMagicianGirlLoader.png" />
      <img className="img-2" src="/assets/darkMagicianGirlToon.png" />
      <img className="img-3" src="/assets/darkMagicianGirlChibiLoader.png" />
      <img className="img-4" src="/assets/darkMagicianGirlLoader2.png" />
    </div>
            
  </div>
  <p id="loader-text">Cargando cartas...</p>
  </>
);

export default LittleLoader;
