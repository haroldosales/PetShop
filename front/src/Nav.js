import './App.css';
import Cadastro from './Cadastro';

function Nav() {
  return (
         <div >

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="{App}">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{Cadastro}">Cadastro</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="google.com">Pricing</a>
      </li>
    
    </ul>
  </div>


</nav>
</div>
  );
}

export default Nav;
