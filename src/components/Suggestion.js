const Suggestion = (props) => {

  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imgUser} alt="" />
        <div class="texto">
          <div class="nome">{props.username}</div>
          <div class="razao">Segue você</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

export { Suggestion }