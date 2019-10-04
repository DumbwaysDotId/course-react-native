# State

There are two types of data that control a component: props and state. props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.

## Define State

  Define the state in the constructor, so that the value initialization is done the first time the component is run.

  ```
  ./Header.js

  ...
    class Header extends Component {
      constructor() {
        super();
        // define state here
        this.state = {
          showTitle: false
        }
      }
    }
  ...
  ```
  *State data types are objects, properties in them, called name state (showTitle), and their values are called state values (false).*

## Change value state

  To change the state value, use the setState function with the object parameter containing the state name and new state value

  For example triggers run the setState function by using the default javascript function, [setInterval](https://www.w3schools.com/jsref/met_win_setinterval.asp)

  ```
  ./Header.js

  ...
  setInterval(() => {
    this.setState({
      showTitle: !this.state.showTitle
    })
  }, 1000)
  ...
  ```
  
## How to use state

  How to use state is almost the same as how to use props, just *this.state.name_state*

  ```
  ./Header.js

  ...
  render() {
    return (
      <View style={styles.container}>
        {/* use inline condition */}
        {this.state.showTitle ? <Text style={styles.textHeader}>{this.props.title}</Text> : null}
      </View>
    )
  }
  ...
  ```