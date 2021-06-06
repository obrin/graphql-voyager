import * as React from 'react'
import { Voyager } from 'graphql-voyager'
import fetch from 'isomorphic-fetch'

const introspectionProvider = (query) => {
  console.log('hello')
  return fetch('api.home.local/graphql', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  }).then((response) => response.json())
}

const Component = () => (
  <Voyager
    introspection={introspectionProvider}
    displayOptions={{ skipRelay: false, showLeafFields: true }}
    workerURI={process.env.PUBLIC_URL + '/voyager.worker.js'}
  />
)

export default Component
