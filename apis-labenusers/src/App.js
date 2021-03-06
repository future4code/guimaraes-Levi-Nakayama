import React  from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaLista from "./components/TelaLista"

export default class App extends React.Component {
  state = {
    tela: "cadastro"
  }

  escolheTela = () => {
    switch(this.state.tela){
       case "cadastro":
         return <TelaCadastro irParaLista={this.irParaLista} />
        case "lista":
          return <TelaLista irParaCadastro={this.irParaCadastro}/>
        default:
          return <p>Something is wrong...</p>
    }
  }

  irParaCadastro = () => {
    this.setState({tela: "cadastro"})
  }

  irParaLista = () => {
    this.setState({tela: "lista"})
  }


  render(){
  return (
    <div >
      {this.escolheTela()}
    </div>
  );
  }
}


