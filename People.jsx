/** @jsx h */
import h from './lib/hyperscript.js';
import Component from './lib/component.js';

export default class People extends Component {
    // constructor(props) {
    //   super(props)
  
    //   this.state = {
    //     list: [
    //       '🕺', '💃', '😀', '🙋‍', '💼',
    //       '🕶️️', '👏', '🤳', '🕵️', '👩‍🔧'
    //     ]
    //   }
  
    //   this.timer = setInterval(_ => {
    //     this.setState({
    //       list: [...this.state.list, getRandomItemFromArray(this.state.list)]
    //     })
    //   }, 1000)
    // }
  
    render() {
  
      return (
        <ul>
          {this.props.list.map(item => <li>{item}</li>)}
        </ul>
      );
    }
  }