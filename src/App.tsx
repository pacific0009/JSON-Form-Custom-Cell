import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Button } from '@material-ui/core';
import './App.css';
import schema from './schema.json';
import {
  materialCells,
  materialRenderers
} from '@jsonforms/material-renderers';
import { Store } from 'redux';
import RatingControl from './RatingControl';
import ratingControlTester from './ratingControlTester';
import RatingCell from './RatingCell';
const styles = createStyles({
  container: {
    padding: '1em'
  },
  title: {
    textAlign: 'center',
    padding: '0.25em'
  },
  dataContent: {
    display: 'flex',
    textAlign: 'left',
    justifyContent: 'center',
    borderRadius: '0.25em',
    backgroundColor: '#cecece'
  },
  demoform: {
    margin: 'auto',
    padding: '1rem'
  }
});

export interface AppProps extends WithStyles<typeof styles> {
  store: Store;
}

const data = {
  company_name: 'Divine',
  company_rating: 5,
  employee: [
    { employee_name: 'Jhon', employee_rating: 4 },
    { employee_name: 'Shyam', employee_rating: 3 }
  ]
};

const App = ({ store, classes }: AppProps) => {
  const [standaloneData, setStandaloneData] = useState(data);
  return (
    <div>
      <div className='card'>
        <div>
          <h4>JsonForms</h4>
          <JsonForms
            schema={schema}
            data={standaloneData}
            renderers={[
              ...materialRenderers,
              { tester: ratingControlTester, renderer: RatingControl }
            ]}
            cells={[
              ...materialCells,
              { tester: ratingControlTester, cell: RatingCell }
            ]}
            onChange={({ errors, data }) => {
              setStandaloneData(data);
              console.log(data);
            }}
          />
        </div>
        <div className='buttonMargin'>
          <Button
            onClick={() => {
              console.log('ok');
              var displayElement = document.getElementById('boundData');
              if (displayElement) {
                displayElement.innerText = JSON.stringify(
                  standaloneData,
                  null,
                  2
                );
              }
            }}
          >
            Submit
          </Button>
        </div>
        <h5>Json Form Values</h5>
        <div className={classes.dataContent}>
          <pre id='boundData'></pre>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(App);
