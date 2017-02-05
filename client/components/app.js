import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      counter : props.val,
      count : 0
    }
  } 

  render() {
    const x = this;
    const { counter, count } = this.state;
    setTimeout(function() {
      if (counter > 0) {
        x.setState({ counter: counter - 1 });
      }
    }, 1000);
    if (!counter && count < 12) {
      x.setState({ count: count + 1})
      x.setState({ counter: 30 })
    }
    const array = ['init', 'pose1.png', 'pose2.png', 'pose3.png', 'pose4.png', 'pose5.png', 'pose6.png', 'pose7.png', 'pose9.png', 'pose10.png', 'pose11.png']
    return (
      <div className='container'>
        <div className='app'>
          <h2>{counter} seconds till next pose</h2>
          <img src={array[count]}/>
        </div>  
      </div>
    )
  }
}

export default App;
