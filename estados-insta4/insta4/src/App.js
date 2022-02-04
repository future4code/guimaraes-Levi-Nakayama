import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


  class App extends React.Component {
    state = {
    userName:  '', 
    userPicture: '',
    userPost: '',
    posts: [
      
      {
        nomeUsuario:'Paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },

      
    ]
    }



    adicionarPost = () => {
      const novaLista = [...this.state.userPost];

      novaLista.push(this.state.userName, this.state.userPicture, this.state.userPost);
      this.setState({
        posts: novaLista
      })

    }

    onChangeUserName = (event) => {
      this.setState ({userName: event.target.value})
      console.log (this.state.userName)
    }

    enviarPost = () => {
      var newPost = [...this.state.posts]
      var post = {
        nomeUsuario: this.state.userName, 
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/152'
      }
      console.log(newPost.push(post));

      console.log(newPost)

      this.setState({posts: newPost})
    }


    render() {
      return (
            <MainContainer>
      <input value={this.state.userName} 
             onChange={this.onChangeUserName}
             placeholder={"nome"}/>
             

      <input placeholder={"foto"}/>

             
      <input placeholder={"post"}/>

      <button onClick={this.enviarPost}>Enviar</button>

          {this.state.posts.map( (post, index) => 
           {            
             return (
                <Post key={index} 
                  nomeUsuario={post.nomeUsuario}
                  fotoUsuario={post.fotoUsuario}
                  fotoPost={post.fotoPost}
                />
             )
           } 
          )}
        </MainContainer>
      
      );
    }
  }
  
  export default App;
  


