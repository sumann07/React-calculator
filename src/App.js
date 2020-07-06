import React , {Component} from 'react';
import './index.css'


class App extends Component {

  state={
    count:'0'
  }

  Reset(){
    this.setState({
      count:'0'
    })
  }

  addDot(){
    const {count}=this.state
    if(count.indexOf('.'===-1))
    {
      this.setState({
        count:count+'.'
      })
    }
  }

  Calculate(){
    const {count}=this.state
    try{
    this.setState({
      count:eval(count)
    })
  }catch(e){
    this.setState({
      count:"Error"
    })
  }
  }

  changeValue(digit){
    const {count}=this.state
this.setState({
  count:count==='0'?String(digit):count+""+digit
})
  }

render(){
    return (
    <div className='container'>
      <h1 id="h1">Calculator</h1>
    <div className='row'>
      <input value={this.state.count}/>
    </div>
    
    
<div className='row'>
  <button onClick={()=> this.changeValue(1 )}>1 </button>
  <button onClick={()=> this.changeValue(2)}>2</button>
  <button onClick={()=> this.changeValue(3)}>3</button>
  <button id="sum"onClick={()=> this.changeValue('+')}>+</button>
</div>
<div className='row'>
  <button onClick={()=> this.changeValue(4)}>4</button>
  <button onClick={()=> this.changeValue(5)}>5</button>
  <button onClick={()=> this.changeValue(6)}>6</button>
  <button id="sum"onClick={()=> this.changeValue('-')}>-</button>
</div>
<div className='row'>
  <button onClick={()=> this.changeValue(7)}>7</button>
  <button onClick={()=> this.changeValue(8)}>8</button>
  <button onClick={()=> this.changeValue(9)}>9</button>
  <button id="sum" onClick={()=> this.changeValue('*')}>*</button>
</div>
<div className='row'>
  <button onClick={()=> this.changeValue(0)}>0</button>
  <button onClick={()=> this.addDot()}>.</button>
  <button onClick={()=> this.Reset()}>C</button>
  
  <button id="sum" onClick={()=> this.changeValue('/')}>/</button>
</div>
<div className='row'>
<button onClick={()=> this.changeValue('(')}>(</button>
  <button onClick={()=> this.changeValue(')')}>)</button>

  <button className='calculate' onClick={()=>this.Calculate()}>=</button>

</div>
    </div>
  )
}
}

export default App;