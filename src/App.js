import React , { Component } from 'react';
import { CardList } from './components/card-list/CardList';
import { SearchBox} from './components/search-box/SearchBox';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       monsters:[],
       filteredSearch:''
    };
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(users => this.setState({monsters:users}) );
    
  }

  handleChange = (e) =>{
    this.setState({filteredSearch:e.target.value})
  }
  
  render() {
    const {monsters , filteredSearch} = this.state
    console.log("monsters",monsters)

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(filteredSearch.toLowerCase()))

    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='Search'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;
