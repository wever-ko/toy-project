import React from 'react';

import ListItem from './ListItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
  }

  render() {
    const { items } = this.state;
    const itemList = items.map(item => (
      <ListItem key={`item-${item}`}>
        {item}
      </ListItem>
    ));

    return (
      <ul>
        {itemList}
      </ul>
    );
  }
}

export default TodoList;
