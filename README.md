# Component

When you're building a React Native app, you'll be making new components a lot. Anything you see on the screen is some sort of component. A component can be pretty simple - the only thing that's required is a render function which returns some JSX to render.

## Define Component

There are two ways to define a component:

- Class Component
  The requirement for creating class components is extends Component of lib react. And use the render function to define JSX syntax.
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
  Different from defining the class component, the function component does not need to extend to component, and does not need a render function to define JSX syntax.
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
    
    There are two component terms based on their placement, namely the parent component and the child component,
in the example above, the Header and Content components are called child components, while the App component is called the parent component
