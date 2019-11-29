class Item extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <li data-verificado={this.props.verificado}>{children}
        <span>{this.props.verificado}</span>
      </li>
    );
  }
}
