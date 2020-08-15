import React, { Component } from 'react'; //import React Component
import _ from "lodash";
import "./style.css";

class PetList extends Component {
  render() {
    const adoptFunction = this.props.adoptCallback;
    const petArray = this.props.pets.map((petCard) => 
    <PetCard key={petCard.name}pets={petCard} adoptCallback={adoptFunction}/>)
    return (
      <div>
      <h2>Dogs for Adoption</h2>
      <div className="card-deck">
        {petArray}
      </div>
      </div>
    )
  }
}

class PetCard extends Component {
  render() {
    const pet = this.props.pets;
    let petAdopt = pet.name;
    if (pet.adopted) {
      petAdopt = pet.name + " (Adopted)";
    }
    return (
      <div className="card" onClick={() => { this.props.adoptCallback(pet.name) }}>
        <img className="card-img-top" src={this.props.pets.img} alt={this.props.pets.name} />
        <div className="card-body">
          <h3 className="card-title">{petAdopt}</h3>
          <p className="card-text">{this.props.pets.sex + " " + this.props.pets.breed}</p>
        </div>
      </div>
    )
  }
}

class AboutNav extends Component {
  render() {
    return (
      <nav id="aboutLinks">
      <h2>About</h2>
      <ul className="list-unstyled">
        <li><a href="#/">How to Adopt</a></li>
        <li><a href="#/">Volunteering</a></li>
        <li><a href="#/">Events</a></li>
        <li><a href="#/">Donate</a></li>
        <li><a href="#/">About Us</a></li>
      </ul>
      </nav>
    )
  }
}

class BreedNav extends Component {
  render() {
    const breedArray = this.props.breeds.map((breedName) => 
    <li key={breedName}><a href="">{breedName}</a></li>)
    return (
      <nav id="breedLinks">
      <h2>Pick a Breed</h2>
      <ul className="list-unstyled">
        {breedArray}
      </ul>   
      </nav>         
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {pets: this.props.pets}
  }
  adopt = (petName) => {
    this.setState((state) => 
      _.find(this.state.pets, ["name", petName]).adopted = true
      )
  }
  render() {
    const findBreeds = this.state.pets.map((pets) => {
      return pets.breed;
    });
    /* filter out repeats */
    const breedFilter = findBreeds.filter((breed, index) => findBreeds.indexOf(breed) == index);
    return (
      <div>
        <header className="jumbotron jumbotron-fluid py-4">
        <div className="container">
          <h1>Adopt a Pet</h1>
        </div>
        </header>
        <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
              <BreedNav breeds={breedFilter} />
              <AboutNav />
          </div> 
          <div id="petList" className="col-9">
          <PetList pets={this.state.pets} adoptCallback={this.adopt} />
        </div>
      </div> 
      </main>

  <footer className="container">
    <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
  </footer>
      </div>
    );
  }
}

export default App;
