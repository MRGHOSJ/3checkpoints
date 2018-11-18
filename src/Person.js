import React from 'react';
import { SVGIcon, SelectField } from 'react-md';

class Person extends React.Component {
    state = {
        border: '5px solid black' 
    }
    onChangeHandler = (e) =>{
        if(e == 'Girl') {
            this.setState({border: '5px solid pink' });
        };
        if(e == 'Boy'){
            this.setState({border: '5px solid Blue' });
        };
    } 
    render() {
        const Gender_ITEMS = ['Boy', 'Girl'];
        const divStyle = {
            width: '300px',
        padding: '50px',
        'box-shadow': '5px 2px gray',
        border: this.state.border,
          };
      return (
        <div style={divStyle}>
            <center>
                    <img src={this.props.pic}/>
            </center>
        <br/>
            <center>
                <p>{this.props.name}</p>
            </center>
        <hr/>
            <p>{this.props.dec}</p>
        <hr/>
            <SelectField
            onChange={this.onChangeHandler}
            id="select-field"
            label="Gander"
            placeholder="Placeholder"
            className="md-cell md-cell--bottom"
            menuItems={Gender_ITEMS}
            />
        </div>
      );
    }
  }

  export default Person;