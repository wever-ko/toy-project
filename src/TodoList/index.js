import React from 'react';

import ListItem from './ListItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      newItem: '',
    };
    this.itemId = 0;
  }

  handleClickAddItem = () => {
    const { items, newItem } = this.state;
    items.push(newItem);
    this.setState({
      items,
      newItem: '',
    });
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      newItem: value,
    });
  };

  handleClickRemoveItem = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({ items });
  };

  render() {
    const { items, newItem } = this.state;
    const itemList = items.map((item, index) => {
      this.itemId += 1;
      return (
        <ListItem
          key={`item-${this.itemId}`}
          onClick={this.handleClickRemoveItem}
          index={index}
        >
          {item}
        </ListItem>
      );
    });

    return (
      <>
        <ul>
          {itemList}
        </ul>
        <button type="button" onClick={this.handleClickAddItem}>[+]</button>
        <input type="text" value={newItem} onChange={this.handleInputChange} />
      </>
    );
  }
}

export default TodoList;
