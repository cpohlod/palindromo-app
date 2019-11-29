class ButtonApagar extends React.Component {
  render() {
    return (
      <span data-test="limpar-dados" onClick={this.props.onClick} className="addBtn">
        Limpar Histórico
      </span>
    );
  }
}
