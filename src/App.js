import React, { Component } from 'react';
import logo from './logo.svg';
import TableFilter from './components/TableFilter'
import HeroTable from './components/HeroTable'
import './App.css';

const heroes = [
  { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑',killed:false, visible:true },
  { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔',killed:false, visible:true },
  { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹',killed:false, visible:true },
  { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒',killed:false, visible:true },
  { name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡',killed:false, visible:true }
]

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: '',
      isKilled: false,
      isVisible: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.handleVisible = this.handleVisible.bind(this);
  }

  handleInputChange (e) {
    this.setState({
      filterText: e.target.value
    })
  }

  handleClick(id,e) {
     this.setState(state => ({
       isKilled: true
     }));
     heroes.map((value, index, array) => {
       //console.log(value.killed);
       value.killed = false;
     });
     heroes[id].killed=true;
     console.log(heroes[id]);
   }

   handleVisible(id,e) {
      this.setState(state => ({
        isVisible: false
      }));
      //document.getElementById(id).classList.toggle("invisible");

      heroes.splice(id, 1)
      console.log(id);
    }

  render() {
    const {filterText} = this.state

    let filteredHeroes = heroes

    if (filterText) {
      filteredHeroes = heroes.filter(hero => {
        return hero.name.includes(filterText)
      })
    }

    return (
      <div className="index">
        <h2>Fellowship of the Ring</h2>

        <div className="container">
          <TableFilter
            filterText={filterText}
            handleChange={this.handleInputChange}
            placeHolder='Input search...'
          />

          {filteredHeroes.length > 0 && <HeroTable heroes={filteredHeroes} handleClick={this.handleClick} handleVisible={this.handleVisible}  /> }

          {filteredHeroes.length === 0 && <div>No heroes....</div> }

        </div>

      </div>
    );
  }
}

export default App;
