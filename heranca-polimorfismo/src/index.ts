import { userInfo } from "os";

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public interoduceYourself(): string {
        return "Olá, bom dia!"
     }

    //	public interoduceYourself(): string {
	//	return `Olá, sou ${this.name}. Bom dia!`;
    //    }
  }

  const newUser = new User("123132","levisn@gmail.com","levi","123")
  newUser.interoduceYourself()

//1a - não consegue pq é private.
//1b - foi impressa 1x.

//2a - foi impressa 1x.
//2b - foi impressa 0x, pq não chamou a classe pai.

//3 - não pois é private.

//5 