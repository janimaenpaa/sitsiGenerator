import React, { useState, useEffect } from "react";

import {
  CircularProgress,
  Typography,
  Divider,
  Button
} from "@material-ui/core";

const punishments = [
  "Koko pöydälle veitset otsaan tai hiuksiin",
  "Ryhmä kertoo tarinan yksi sana per henkilö kerrallaan",
  "Vesikidutus"
];

const GeneratePunishment = ({ handleButton }) => {
  const [tableGroupIsGenerated, setTableGroupIsGenerated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTableGroupIsGenerated(true);
    }, 5000);
    return () => clearTimeout(timer);
  });

  const generatePunishment = () => {
    let punishment = Math.floor(Math.random() * (punishments.length)) + 0;
    return punishments[punishment];
  };

  return (
    <React.Fragment>
      <Divider variant="middle" />
      {tableGroupIsGenerated ? (
        <div>
          <Typography variant="h3">{generatePunishment()}</Typography>
          <p>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              onClick={handleButton}
              disableElevation
            >
              RESTART
            </Button>
          </p>
        </div>
      ) : (
        <div>
          <Typography variant="h3">Arvotaan rangaistusta</Typography>
          <br />
          <CircularProgress color="secondary" size="120px" />
        </div>
      )}
    </React.Fragment>
  );
};

export default GeneratePunishment;