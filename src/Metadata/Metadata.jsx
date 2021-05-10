import React, { Component } from 'react';
import { Helmet } from 'react-helmet'

const TITLE = 'Path Finder'

export default class Metadata extends Component {
  render() {
    return (
      <>
        <Helmet>
            <title>{ TITLE }</title>
            <meta name="Pathfinder" content="Pathfinder visualizer to find most optimal 
            way through a maze with Dijkstra's algorithm" />
            <link rel="icon" type="image/png" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧭</text></svg>" sizes="16x16" />
        </Helmet>
      </>
    )
  }
}
