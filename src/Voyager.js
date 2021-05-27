import * as React from 'react';
import { Voyager } from 'graphql-voyager';
import fetch from 'isomorphic-fetch';

export default class Component extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Voyager
        introspection={this.introspectionProvider}
        displayOptions={{ skipRelay: false, showLeafFields: true }}
        workerURI={process.env.PUBLIC_URL + '/voyager.worker.js'}
      />
    );
  }

  introspectionProvider(query) {
    return fetch('http://api.home.local/graphql', {
      method: 'post',
      // mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }).then((response) => response.json());
  }
}
