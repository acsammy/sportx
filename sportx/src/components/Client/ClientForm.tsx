import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import ClientClassification  from "../../enum/ClientClassification";
import './styles.css';

interface IClient {
  name: string;
  cpf: boolean;
  cnpj: boolean;
  socialNumber: string;
  cep: string;
  email: string
}

export function ClientForm(props: IClient) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState(true);
  const [cnpj, setCnpj] = useState(false);
  const [socialNumber, setSocialNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [cep, setCep] = useState<number>();
  const [classification, setClassification] = useState<ClientClassification>()


  changeState = (campo) => {
  this.setState({[campo.target.name] : campo.target.value})
};


  return (
    // <div className="client-container">
    //   <form className="form-client" >
    //     <div className="client-input">
    //       <label>Nome</label>
    //       <input type="text" name="name" onChange={event => this.changeState(event.target.value)} />
    //     </div>
    //     <div className="client-input">
    //       <input type="radio" name="cpf" onChange={event => this.changeState(event.target.value)} />
    //       <label> CPF </label>

    //       <input type="radio" name="cnpj" onChange={event => this.changeState(event.target.value)} />
    //       <label> CNPJ </label>

    //       <input type="text" name="socialNumber" onChange={event => this.changeState(event.target.value)} />
    //     </div>
    //     <div className="client-input">
    //       <label>Razão Social</label>
    //       <input type="text" maxLength="100" name="companyName" onChange={event => this.changeState(event.target.value)} />
    //     </div>
    //     <div className="client-input">
    //       <label>CEP</label>
    //       <InputMask mask="99-999-999" name="cep" onChange={event => this.changeState(event.target.value)} />
    //     </div>
    //     <div className="client-input">
    //       <label>Email</label>
    //       <input type="email" name="email" onChange={event => this.changeState(event.target.value)} />
    //     </div>
    //     <div className="client-input">
    //       <label>Classificação:</label>
    //       <select name="classication" id="classication" onChange={event => this.changeState(event.target.value)} >
    //         {Object.keys(ClientClassification).map((key) => (
    //           <option key={key} value={key}>{ClientClassification[key]}</option>
    //         ))}
    //       </select>

    //       <button >Adicionar</button>
    //     </div>
    //   </form>
    // </div>

    
    <form>
      <input type="text" placeholder="Nome" name="name" onChange={this.changeState} />
      <p>{ this.state.name}</p>
    </form>
  );
}
