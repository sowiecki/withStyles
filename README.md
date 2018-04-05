A React [Higher-Order Component (HOC)](https://reactjs.org/docs/higher-order-components.html) for efficiently creating stylesheets based on component props.

Use with CSS-in-JS implementations such as [emotion](https://www.npmjs.com/package/emotion) and [glamor](https://www.npmjs.com/package/glamor).

```jsx
import { css } from "emotion";

const stylesGenerator = props => ({
  input: css`
    color: #0000ff;
  `,

  button: css`
    border: 2px solid #00ff00;
    color: #ff0000;
  `
});

class Form extends Component {
  renderInput = () => {
    // Styles don't have to be re-computed within class methods!
    const { computedStyles } = this.props;

    return <input type="text" className={computedStyles.input} />;
  };

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

export default withStyles(stylesGenerator)(Button);
```
