class App extends React.Component {
  state = {
    items: []
  };

  add = value => {
    let { items } = this.state;
    let situacao = this.hePalimdromo(value);
    items.unshift({
      verificado: situacao,
      status: "new",
      name: value
    });

    this.setState({ items });
  };

  textoInverso = value => {
    let inverso = '';
    let arr = [...value];
    for (let pos = arr.length-1; pos>=0; pos--) {
      inverso+=arr[pos];
    }
    return inverso;
  };

  hePalimdromo = value => {
    if (this.textoInverso(value)===value) {
      return 'positivo';
    }
    return 'negativo';
  };

  apagaHistorico = () => {
    let { items } = this.state;
    while(items.length) {
      items.pop();
    }
    this.setState({ items });
  };

  render() {
    return (
      <React.Fragment>
        <Header add={this.add} apagaHistorico={this.apagaHistorico} />
        <List items={this.state.items}
        />
      </React.Fragment>
    );
  }
}
