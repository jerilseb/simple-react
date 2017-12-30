/** @jsx h */
import h from './lib/hyperscript.js';
import Component from './lib/component.js';
import People from "./People.jsx";
import { render } from "./lib/v-dom";

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list: [
        '🕺', '💃', '😀', '🙋‍', '💼',
        '🕶️️', '👏', '🤳', '🕵️', '👩‍🔧'
      ]
    }

    this.timer = setInterval(_ => {
      this.setState({
        list: [...this.state.list, getRandomItemFromArray(this.state.list)]
      })
    }, 20)
  }

  render() {
    return (
    <div class="app">
      <h1>Simple vDom</h1>
      <People list={this.state.list}/>
    </div>
    );
  }
};

const getRandomItemFromArray = list => {
  return list[
    Math.round(Math.random() * (list.length - 1))
  ];
};

render(<App />, document.querySelector("#root"));
