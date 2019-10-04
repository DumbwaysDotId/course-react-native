# Props

Most components can be customized when they are created, with different parameters. These creation parameters are called props, short for properties.
If in html commonly called attributes, such as id, class, onclick, etc.

## Define Props

  For example, one basic React Native component is the Image. When you create an image, you can use a prop named source to control what image it shows.

  ```
  ...
  <Image source={{ url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavari'}} style={{width: 193}} />
  ...
  ```
  *Above there are source and style props, which have been determined by their name and value type.*


  Your own components can also use props.

  For example:

  ```
  ./App.js

  ...
  <Header title="This is header" />
  ...
  ```
  *from defining the props above, there is the name of the props is **title** and value props is **This is header***


## How to use props on the own component

  - If the component definition is a class component

  Use *this.props.name_props* inside the function of class component, for example in render, componentDidMount, etc, or custom function.

  ```
  ./Header.js

  ...
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>{this.props.title}</Text>
      </View>
    )
  }
  ...
  ```

  - If the component definition is a function component

  Props will be considered as parameters in the function.

  ```
  ./Content.js

  ...
  function Content(props) {
    return (
      <View style={styles.container}>
        <Text style={styles.textContent}>{props.textContent}</Text>
      </View>
    )
  }
  ...
  ```
