import { css } from "emotion";

import withStyles from "../src";

const stylesGenerator = props => ({
  input: css`
    color: #0000ff;
  `,

  button: css`
    border: 2px solid #00ff00;
    color: #ff0000;
  `
});

class Root extends Component {
  renderInput() {
    const { computedStyles } = this.props;

    return <input type="text" className={computedStyles.input} />;
  }

  render() {
    const { computedStyles, children } = this.props;

    return (
      <div>
        {this.renderInput()}
        <button className={computedStyles.button}>{children}</button>
      </div>
    );
  }
}

export default withStyles(stylesGenerator)(Root);
