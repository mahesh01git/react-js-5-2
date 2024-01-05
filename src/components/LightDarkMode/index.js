// Write your code here
import {Component} from 'react'

import './index'

class LightDarkMode extends Component {
  state = {isDark: true}

  render() {
    return (
      <div className="bg-con">
        <div className={`containera ${mode}`}>
          <h1>Click To Change Mode</h1>
          <button className="button" type="button">
            light Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
