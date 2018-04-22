import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import withStyles from "../dist";

const stylesGenerator = ({ color }) => ({
  input: css`
    color: ${color};
  `,

  button: css`
    border: 2px solid ${color};
    color: ${color};
  `
});

const Demo = ({ computedStyles, onColorUpdate, color }) => (
  <div>
    Color: {color}
    <div>
      <label html-for="color">Type in a color HEX code: </label>
      <input id="color" type="text" className={computedStyles.input} />
      <button
        className={computedStyles.button}
        // Too lazy to write stateful component, wouldn't normally use this hacky solution to grab the value :)
        onClick={() => onColorUpdate(document.getElementById("color").value)}
      >
        Enter
      </button>
    </div>
  </div>
);

Demo.propTypes = {
  computedStyles: PropTypes.shape({
    input: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired
  }),
  onColorUpdate: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default withStyles(stylesGenerator)(Demo);
