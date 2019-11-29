class Header extends React.Component {
  state = {
    value: "",
    inputRef: {}
  };

  getRef = inputRef => {
    inputRef.addEventListener("keyup", (event) =>{
      event.preventDefault()
      if(event.key === 'Enter'){
        this.add();
      }
    });   
    this.setState({ inputRef });
  };

  add = () => {
    let value = this.state.inputRef.value;
    if(!value || value.trim().length <= 0){
      return;
    }
    this.props.add(value);
    this.state.inputRef.value = "";
  };

  render() {
    return (
      <div id="myDIV" className="header">
        <h2>Verificador de Palíndromo</h2>
        <Input getRef={this.getRef} />
        <ButtonApagar onClick={this.props.apagaHistorico}/>
      </div>
    );
  }
}
