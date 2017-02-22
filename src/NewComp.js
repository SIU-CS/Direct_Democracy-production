import React from 'react';

class NewComp extends React.Component {
  render() {
      return (
              <div>
              hi {this.props.name}!
          </div>
   );
  }
}

export default NewComp;
