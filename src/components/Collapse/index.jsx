import React, { useState } from "react";

import fleche from "../../assets/ChevronOpen.png";

function Collapse({ title, content }) {
  /* Hook */
  const [ouvert, setOuvert] = useState(false);

  return (
    <div className="collapse" id={`about-${title}`}>
      <div className="header-collapse">
        <div className="header-collapse_title">{title}</div>
        <span
          className={`header-collapse_fleche ${ouvert}`}
          onClick={() => setOuvert(!ouvert)}
        >
          <img src={fleche} alt="Ouvrir cette liste" />
        </span>
      </div>
      {
        /* Si true > description */
        ouvert && <div className="content-collapse">{content}</div>
      }
    </div>
  );
}

export default Collapse;
