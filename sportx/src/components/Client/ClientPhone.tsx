import { useState } from "react";
import ReactInputMask from "react-input-mask";

export function ClientPhone() {
  const [phone, phoneState] = useState('')
  const [telefones, setTelefones] = useState<string[]>(['35 1 2345-6789', '35 9 8765 4321', '35 9 1234 5678'])


  function addTelefone() {
    const telInput = document.getElementById("phoneInput");
    if (telInput === null) {
      return;
    }

    console.log(tel);
    console.log(phone);


    setTelefones([...telefones, tel])
  }

  return (
    <div>
      <label> Telefone </label>
      <ReactInputMask mask="(99) 9 9999-9999" id="phoneInput" value={ phone }/>
      <button onClick={addTelefone}>
        Adicionar 
      </button>
    </div>
  );
}
