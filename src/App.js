import React from 'react';
import Person from './Person.js'
import { Grid, Cell } from 'react-md';


class App extends React.Component {
  render() {
    return (
      <div>
          <Grid>
            <Cell size={4}>
              <Person pic="https://cdn.discordapp.com/emojis/474660434490949632.png?v=1" name="Pickel Rick" dec="RICKRICKRCKRRKAOPAK GHAOIKGN ZJNGKNZ GJOZPKNG HZJOKGNZ" />
            </Cell>
            <Cell size={4}>
              <Person pic="https://cdn.discordapp.com/emojis/474660442959118347.png?v=1" name="testttt" dec="azeae" />
            </Cell>
            <Cell size={4}>
              <Person pic="https://cdn.discordapp.com/emojis/474660434490949632.png?v=1" name="Pickel Rick" dec="RICKRICKRCKRRKAOPAK GHAOIKGN ZJNGKNZ GJOZPKNG HZJOKGNZ" />
            </Cell>
          </Grid>
      </div>
    );
  }
}

export default App;
