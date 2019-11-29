class List extends React.Component {
  render() {
    return (
      <ul id="myUL">
        {this.props.items.map((el, idx) => (
          <Item
            verificado={el.verificado}
            key={idx}
            index={idx}
          >
            {el.name}
          </Item>
        ))}
      </ul>
    );
  }
}
