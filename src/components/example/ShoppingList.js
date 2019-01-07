
class ShoppingList extends React.Component {
  render() {
    return (
      <div>
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>    
      </div>
    )
  }  
}

return React.createElement('div', {className: 'shopping-list'},
  // React.createElement('h1', ),
  // React.createElement('ul', ),
)