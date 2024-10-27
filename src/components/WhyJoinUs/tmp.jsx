import Arrow, { DIRECTION } from "react-arrows";

const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false);

  const checkWidth = () => {
    const width = window.innerWidth;
    // Define minimum and maximum width for tablets (adjust as needed)
    const minTabletWidth = 728;
    const maxTabletWidth = 992; // Example for common tablet size range
    setIsTablet(width >= minTabletWidth && width <= maxTabletWidth);
  };

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return isTablet;
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkWidth = () => {
    const width = window.innerWidth;
    // Define minimum and maximum width for tablets (adjust as needed)
    const minMobileWidth = 0;
    const maxMobileWidth = 500; // Example for common tablet size range
    setIsMobile(width >= minMobileWidth && width <= maxMobileWidth);
  };

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return isMobile;
};

const Steps = () => {
  const isTabletDevice = useIsTablet();
  const isMobileDevice = useIsMobile();

  return (
    <section className="steps-section">
      <div className="step1">
        <h2>
          BUFFET SAHRA
          <span className="info-btn btn-like" id="title1">
            1
          </span>
          <span id="repere1"></span>
        </h2>

        <p>
          Profitez d'une soirée ramadanesque incluant des mets traditionnels et
          boissons selon vos goûts.
        </p>
      </div>
      {!isMobileDevice && !isTabletDevice && (
        <Arrow
          className="arrow"
          from={{
            direction: DIRECTION.TOP,
            node: () => document.getElementById("repere1"),
            translation: [0.5, -0.2],
          }}
          to={{
            direction: DIRECTION.RIGHT,
            node: () => document.getElementById("repere2"),
            translation: [0.5, -0.2],
          }}
        />
      )}
      {isMobileDevice && (
        <Arrow
          className="arrow"
          from={{
            direction: DIRECTION.BOTTOM,
            node: () => document.getElementById("repere1"),
            translation: [-0.7, -0.0],
          }}
          to={{
            direction: DIRECTION.RIGHT,
            node: () => document.getElementById("repere2"),
            translation: [-0.8, -0.2],
          }}
        />
      )}
      {isTabletDevice && (
        <Arrow
          className="arrow"
          from={{
            direction: DIRECTION.TOP,
            node: () => document.getElementById("repere1"),
            translation: [0.9, -0.2],
          }}
          to={{
            direction: DIRECTION.RIGHT,
            node: () => document.getElementById("repere2"),
            translation: [0.3, -0.2],
          }}
        />
      )}
      <div className="step2">
        <div className="img-div">
          <img src={bateauImg} alt="Bateau le dauphin" className="bateau-img" />
        </div>
        <div className="text-content">
          <h2>
            BALADE EN MER
            <span className="info-btn btn-like" id="title2">
              2
            </span>
            <span id="repere2"></span>
          </h2>

          <p>
            Profitez d'une balade en mer sur la baie d'Alger, tout en profitant
            du spectacle d'humour.
          </p>
        </div>
      </div>
      {!isMobileDevice && !isTabletDevice && (
        <Arrow
          className="arrow"
          from={{
            direction: DIRECTION.TOP,
            node: () => document.getElementById("repere2"),
            translation: [-2.5, 0.1],
          }}
          to={{
            direction: DIRECTION.RIGHT,
            node: () => document.getElementById("title3"),
            translation: [-0.5, 0],
          }}
        />
      )}
      {isMobileDevice && (
        <Arrow
          className="arrow"
          from={{
            direction: DIRECTION.TOP,
            node: () => document.getElementById("repere2"),
            translation: [0.8, 0.6],
          }}
          to={{
            direction: DIRECTION.RIGHT,
            node: () => document.getElementById("title3"),
            translation: [0.5, 0],
          }}
        />
      )}
      {isTabletDevice && (
        <Arrow
          className="arrow"
          from={{
            direction: DIRECTION.TOP,
            node: () => document.getElementById("repere2"),
            translation: [-2, 0.1],
          }}
          to={{
            direction: DIRECTION.RIGHT,
            node: () => document.getElementById("title3"),
            translation: [-0.5, 0],
          }}
        />
      )}

      <div className="step1 step3">
        <h2>
          SPECTACLE SUR MER
          <span className="info-btn btn-like" id="title3">
            3
          </span>
        </h2>
        <p>
          Nos comédiens vous ferons passer une soirée inoubliable, drôle et
          amusante.
        </p>
      </div>
    </section>
  );
};

export default Steps;