React = require("react")
ReactDOM = require("react-dom")
//I need to set up a package.json etc. Use create-react-app


class Clock extends React.Component {
  constructor(){
    super(props)
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      ()=>this.tick(),
      1000
    );
  }

  componentWillUnMount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  render(){
    return(
      <div>
        <h1>Hello!</h1>
        <h2>The time is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)
