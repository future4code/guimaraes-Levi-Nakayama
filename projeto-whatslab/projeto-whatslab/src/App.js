import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  
  state = {
    chat: [],
	  inputNome: "",
	  inputMensagem: ""
  }

  
  enviarMensagem = () => {
    var novaMensagem = [...this.state.chat]
    var minhaConversa = { 
      userProfile: this.state.inputNome,
      userMensagem: this.state.inputMensagem      
    }
    
    console.log(novaMensagem.push(minhaConversa)) 
    this.setState({chat: novaMensagem})
    
    console.log("oi",this.state.chat)
  }

  

  guardaNome = (event) => {
    this.setState({inputNome: event.target.value})    
  }

  guardaMensagem = (event) => {
      this.setState({inputMensagem: event.target.value})       
  }

  render() {
    return (
		<div>  
			<input
				value={this.state.inputNome}
				onChange={this.guardaNome}
				placeholder = "nome" 
			/>
  
        
			<input
				value={this.state.inputMensagem}
				onChange={this.guardaMensagem}
				placeholder = "mensagem"
			/>
  
			<button onClick={this.enviarMensagem}>enviar</button>
  
			{this.state.chat.map( (m, index) =>
      <div key={index}>
				<span>{m.userProfile}: </span> 
        <span>{m.userMensagem}</span>
			</div>
      	)
			}
		</div>
    )
  }
}


export default App;
