import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // could do the below - but gets to be a lot of things to declare
  // constructor() {
  //   super(); // this runs the component that we're extending first (React.Component)
  //   // runs before storepicker is created
  //   console.log('Gonna create a component');
  //   this.goToStore = this.goToStore.bind(this); // overwrites method, then creates binding to this
  // }
  static propTypes = {
    history: PropTypes.object,
  };

  myInput = React.createRef();

  // instead of making it a method, make it a property (which is set to an arrow function)
  // this is bound to an instance instead of nothing, so we can access 'this'
  goToStore = (event) => {
    // any component that we make isnt bound to the mama component
    // all the components that come with react (render, componentDidMount) are bound by default to the mama component

    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get text from the input
    const storeName = this.myInput.current.value;
    // 3. change page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        {/* for onClick event, you just pass the function name without brackets. If you
        have brackets, it calls the method when the component mounts (on page load) */}
        <button type="submit">Visit Store </button>
      </form>
    );
  }
}

export default StorePicker;
