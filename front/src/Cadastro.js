import './App.css';

function Cadastro() {
  return (
    <div className="App">
      <header className="App-body">
      <h3>Cadastros</h3>
      </header>
      <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
    <option>doação</option>
      <option>resgaste</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Idade</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>filhote</option>
      <option>Adolencenter</option>
      <option>adulto</option>

    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1"> Especificações do bichinho</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
<button class="btn btn-primary">submit</button>
    </div>
  );
}

export default Cadastro;
