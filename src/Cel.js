import React, { Component } from 'react';

class Cel extends Component {
  constructor(props){
    super(props);
    this.state={
      __ctemp: this.props._ctemp,
      __ftemp: this.props._ftemp
    };
  }
  changeCelTemp(e){
    console.log("cel chagne ============");
    let f_temp = e.target.value * 1.8 + 32;
    this.setState({__ctemp : e.target.value, __ftemp : f_temp});
    
  }
  changeFahTemp(e){
    console.log("fah chagne +++++++++++++++++++");
    let c_temp = (e.target.value - 32)/1.8;
    this.setState({__ctemp : c_temp, __ftemp : e.target.value});
  }
  render(){
    console.log("cel render~~~~~~");
    return (
      <article>
        <h1>Test!</h1>
        <form action="/cel_p" method="post" onSubmit={function(e){
          e.preventDefault();
          this.props.onSubmit(this.state.__ctemp, this.state.__ftemp);
        }.bind(this)}>
          <p><input type="text" name="__ctemp" value={this.state.__ctemp} onChange={this.changeCelTemp.bind(this)}></input><span> C</span></p>
          <p><input type="text" name="__ftemp" value={this.state.__ftemp} onChange={this.changeFahTemp.bind(this)}></input><span> F</span></p>
          <p><input type="submit"></input></p>
        </form>      
      </article>
    );
  }
}

export default Cel;
