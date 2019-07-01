import React from 'react';
import Welcome from './components/WelcomeScreen'


class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
// }

// async callAPI() {
//     const resp = await fetch("http://localhost:5000/api/v2/employees",{method:"PUT"})
//     const respJSON = await resp.json()
//     this.setState({
//       apiResponse :respJSON
//     })
// }

// componentDidMount() { 
//     this.callAPI();
// }

render(){
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
      </header>
    </div>
  );
}
}

export default App;
