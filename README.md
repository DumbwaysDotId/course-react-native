# Component

When you're building a React Native app, you'll be making new components a lot. Anything you see on the screen is some sort of component. A component can be pretty simple - the only thing that's required is a render function which returns some JSX to render.

## Define Component

There are two ways to define a component:

- Class Component

  example:
  ```
  ./Header.js
  
  ...
  class Header extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.textHeader}>Header</Text>
        </View>
      )
    }
  }
  ...
  ```

- Function Component

  example:
  ```
  ./Content.js
  
  ...
  function Content() {
    return (
      <View style={styles.container}>
        <Text style={styles.textContent}>Content</Text>
      </View>
    )
  }
  ...
  ```
  
## How to use component

  - import component according to path location
 
    example:
    ```
    import Header from './Header'
    ```
  
  - Add to JSX
  
  	example:
    ```
	  <Header />
    ```
    
    Full example how to use component:
    ```
	  ./App.js
    
    ...
    // import component
    import Header from './Header';
    import Content from './Content';

    // create class component
    class App extends Component {

      // use the render function to define the component appearance
      render() {
        return (
          <View style={styles.container}>
            <Header />
            <Content />
          </View>
        )
      }
    }
	  ...
    ```
