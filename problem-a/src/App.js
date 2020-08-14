import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
export class SenatorRow extends Component {
  render() {
    let party = this.props.senator.party;
    let partyInitial = party.substring(0, 1);
    return (
      <tr>
        <td>{this.props.senator.name}</td>
        <td>{partyInitial + " - " + this.props.senator.state}</td>
        <td><a href={"tel:" + this.props.senator.phone}>{this.props.senator.phone}</a></td>
        <td><a href={"https://twitter.com/" + this.props.senator.twitter}>{"@" + this.props.senator.twitter}</a></td>
      </tr>
    )
  }
}
export class TableHeader extends Component {
  render() {
    const thArray = this.props.cols.map((colName) => <th key={colName}>{colName}</th>)
    return (
      <thead>
        <tr>
          {thArray}
        </tr>
      </thead>
    )
  }
}
export class SenatorTable extends Component {
  render() {
    let tableClass = "table table-bordered";
    let senatorArray = this.props.senators;
    const senatorRowArray = senatorArray.map((senator) => 
    <SenatorRow key={senator.id}senator={senator} />)
    return (
      <table className={tableClass}>
        <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']} />
        <tbody>
          {senatorRowArray} 
        </tbody>
      </table>
    )
  }
}
export class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>US Senators 2019</h1>
        <SenatorTable senators={this.props.senators}/>
      </div>
    )
  }
}
