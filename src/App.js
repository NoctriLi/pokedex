import React from 'react';
import './index.css';


     
function capitalizeFirst(text) {
      return text[0].toUpperCase() + text.slice(1)
    }
const fadeOut = [
  {opacity: 1},
  {opacity: 0}
]
const fadeIn = [
  {opacity: 0},
  {opacity: 1}
]
const timing = {
  duration: 1100,
  iterations: 1,
}  

  class Dex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          name: '',
          poke: 'Pikachu',
          number: '25',
          sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
          type: 'Electric',
          height: '40',
          weight: '6',
          generation: 'Generation-I',
          flavor: 'When several of these POKéMON gather, their electricity could build and cause lightning storms.',
          show: true,
        }
        
    }
    

    getPokemon(poke) {
      document.getElementById('screen-container').animate(fadeOut, timing);
      setTimeout(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/' + poke)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.setState({
            poke: capitalizeFirst(data.name),
            sprite: data.sprites.front_default,
            number: data.id,
            weight: data.weight / 10,
            height: data.height * 10,
            type: data.types.length === 2 ? capitalizeFirst(data.types[0].type.name) + '/' + capitalizeFirst(data.types[1].type.name): capitalizeFirst(data.types[0].type.name),

          })
          
        })
        .catch((err) => {
          
          this.setState({
            poke: 'm̵̡̬̗̲̈́̅i̷̠͔͎̠̲̞̝̟̯͉̙̣̊͑̀̊̋̑͆͂͑̓̊͂̈́s̵̢̰̫͔͈͖̮̙̘͙͖̙͛̄͑̓͋̀̈́̊̈́ş̸̲̖̣̣͖̞̗͙̗͑̅͜ĩ̷͈͜ṉ̷̢̬̄̓͆̎̄̿͋̋̽g̷̨̧̛̫̩̗̠̞̺̣͍͋̾̇̔n̵̝̯̩̱͔͛͒͊̀̎̇̾͊̈́́̓͗̕o̸̠͌͆͋̀̍̂̕',
            sprite: 'https://wiki.p-insurgence.com/images/0/09/722.png',
            number: '?̸̤̩̾͒̔̿̆͒̀́̀̈̋̽͜͝?̶̨̪̪͕̯̠͖͎̺̎͒?̸̨̪̪̳̳̠̯͇̟̝͖͈͝',
            weight: '?̸̤̩̾͒̔̿̆͒̀́̀̈̋̽͜͝?̶̨̪̪͕̯̠͖͎̺̎͒?̸̨̪̪̳̳̠̯͇̟̝͖͈͝',
            height: '?̸̤̩̾͒̔̿̆͒̀́̀̈̋̽͜͝?̶̨̪̪͕̯̠͖͎̺̎͒?̸̨̪̪̳̳̠̯͇̟̝͖͈͝',
            type: '?̸̤̩̾͒̔̿̆͒̀́̀̈̋̽͜͝?̶̨̪̪͕̯̠͖͎̺̎͒?̸̨̪̪̳̳̠̯͇̟̝͖͈͝',
            generation: '?̸̤̩̾͒̔̿̆͒̀́̀̈̋̽͜͝?̶̨̪̪͕̯̠͖͎̺̎͒?̸̨̪̪̳̳̠̯͇̟̝͖͈͝?̸̤̩̾͒̔̿̆͒̀́̀̈̋̽͜͝?̶̨̪̪͕̯̠͖͎̺̎͒?̸̨̪̪̳̳̠̯͇̟̝͖͈͝?̸̤̩̾͒̔̿̆͒̀́̀̈̋̽͜͝?̶̨̪̪͕̯̠͖͎̺̎͒?̸̨̪̪̳̳̠̯͇̟̝͖͈͝?̸̤̩̾͒̔̿̆͒̀́̀̈̋̽͜͝?̶̨̪̪͕̯̠͖͎̺̎͒?̸̨̪̪̳̳̠̯͇̟̝͖͈͝?̸̤̩̾͒̔̿̆͒̀́̀̈̋̽͜͝?̶̨̪̪͕̯̠͖͎̺̎͒?̸̨̪̪̳̳̠̯͇̟̝͖͈͝?̸̤̩̾͒̔̿̆͒̀́̀̈̋̽͜͝?̶̨̪̪͕̯̠͖͎̺̎͒?̸̨̪̪̳̳̠̯͇̟̝͖͈͝',
            flavor: 'E̴̘̻̫̳̖̗̥͋̏̐̏́͋͐͌̋̕̕͘R̵̢̬͔͚̀͠R̸̠͙̜̱͎̫̈́̀̕O̶̩̱̙̦̬̣̖̥̘̖̦͐̓̏͛̀̆̕͜Ŗ̸̛̲̥͎̦̲̮̹̲̜͉̪͒̆̂̍͆̌̍͂̄͘͘̕ ̸̡̯̫̹͈̳̟͖̗̤̄̆̎̔̀͠ͅN̷͓̭͇̣̳͎̝̰̳̝̞̾̎͒̕ͅO̶̬̯͍̜̠̙̫͆̾̈́́̈́̈́̈́̃́́̚̕T̸͖̞̼̆͆̓̆̿̒̉͘͘͝͠͝ ̵̧̡̰̳̘̦̼̝͚̲̉̃̽̓̊͘͝F̴̡̟̙̎̔͂̚͜͝͝O̵̡̨̭̰̖͕̩͎̲̖͖̙̍̋̂͆͊͜͝͝͝͠͠U̸̥͈̓̓̈́̓͆͛͛̊̽̓̎͠N̵̹̝͔̈́͛̿̿́̇̅̎̕͜D̶̡̜̲̻͖͉̝͈̮͝ͅ',
            
          })
          console.log(err.message + "not found");
          
          });
          
          fetch('https://pokeapi.co/api/v2/pokemon-species/' + poke)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            let gen = data.generation.name.split('-')
            gen = capitalizeFirst(gen[0]) + '-' + gen[1].toUpperCase();
            

            this.setState({
            flavor: data.flavor_text_entries[0].flavor_text.replace(/[\f]/g, ' ').replace(/-/g, ''),
            generation: gen,
          })
          })
          .catch((err) => {
            console.log(err.message + "not found");
          });
          
        }, 1100)
        setTimeout(() => {document.getElementById('screen-container').animate(fadeIn, timing)}, 1100);
          console.log(this.state)
    }

    
    handleValidation(text) {
      const reg = /[^\w\s\-.']/
      if (text.match(reg))
      {
        this.getPokemon('missingno')
      }
      else{
        this.getPokemon(text)
      } 
    }

    handleChange(event) {
      this.setState({
        value: event.target.value,
      })
    }

    handleSubmit(event) {
      event.preventDefault()
      this.handleValidation(this.state.value)
      
    }

    
    
    handleClick() {

      
      if (this.state.show)
      {
        document.getElementById('screen-container').animate(fadeOut, timing);
        
        setTimeout(() => {document.getElementById('screen-container').style.opacity = 0}, 1000)
        
        this.setState ({
          show: (!this.state.show)
        })
      }
      else {
        document.getElementById('screen-container').animate(fadeIn, timing);
        
        setTimeout(() => {document.getElementById('screen-container').style.opacity = 1}, 1000)
        
        this.setState ({
          show: (!this.state.show)
        })
      }
      
    
    }
   


    render() {
      this.getPokemon = this.getPokemon.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClick = this.handleClick.bind(this);

      let pHeight = window.innerHeight *.9;
      let pWidth = pHeight / (16/9)
      let sHeight = (pHeight * .9).toString() + 'px';
      let bHeight = (pHeight * .05).toString() + 'px';
      pHeight = pHeight.toString() + 'px';
      pWidth = pWidth.toString() + 'px';

      return (
          <div className=" mx-auto position-static top-100" style={{height: '100%', width: '100%',
          background: 'linear-gradient(0deg, rgba(19,109,21,1) 0%, rgba(29,145,31,1) 14%'}}>
        <div className=" mx-auto" style={{height: '70%', width: '100%', background: 'linear-gradient(0deg, rgba(29,145,31,1) 0%, rgba(31,210,253,1) 11%, rgba(235,243,245,1) 90%)'}}>

          
          <div className='position-absolute top-50 start-50 translate-middle mx-auto'>
            <div 
              id="pokedex" 
              className="card scale rounded shadow" 
              style={{backgroundColor: '#FF0000', width: pWidth, minHeight: pHeight}}
            >
              
              <div
                id="screen" 
                className="row border border-4 shadow m-3 p-1 pb-3"
                style={{height: sHeight, backgroundColor: '#f0edf0'}} 
              >
                <div 
                  id="screen-container"
                  className='fadeIn'
                >
                <div className="row p-2 mb-4">
                    <form  onSubmit={this.handleSubmit}>
                      <div className='input-group offset-3 w-75'>
                      <input 
                        type="text" 
                        className="form-control p-1 border-dark text-center "         
                        style={{backgroundColor: '#f0edf0'}}
                        value={this.state.value}
                        onChange={this.handleChange}
                        ></input>
                      <input 
                        className="btn col-5 bg-danger text-white p-1 btn-outline-dark" 
                        type="submit" 
                        value="Search" 
                      />
                      </div>
                    </form>
                </div>
                <div 
                  id="sprite-hw" 
                  className="row mx-auto borderGame border-end-0 border-start-0 px-1 mb-2"
                  style={{minHeight: '40%', maxHeight: '40%', fontWeight: 'bold'}}
                >
                  <div className='col-7'>
                    <p 
                      className="col text-center"
                      style={{fontSize: '1.5em'}}
                    >{this.state.poke} #{this.state.number}
                    </p>
                      <img 
                        id="sprite" 
                        className="row img mx-auto"
                        style={{width: '100%'}}
                        src={this.state.sprite}
                        alt="pokemon"
                      >
                      </img>
                  </div>
                  <div id="type-h-w" className="col-5 py-5 mx-auto">
                    <p className='row'>Weight: {this.state.weight} kg</p> 
                    <p className='row'>Height: {this.state.height} cm</p>
                    <p className="row">Type: {this.state.type}</p>
                  </div>
                </div>

                <div 
                  id="flavorBox" 
                  className="row fs-6"
                  style={{ width: '100%', maxHeight: '40%', fontSize: '1em', fontWeight: 'bold'}}
                >
                <div id="gen-info" className="row">
                  <p 
                    id="generation" 
                    className="text-center"
                  >{this.state.generation}</p> 
                </div>
                  <p className="offset-1 row">{this.state.flavor}</p>
                </div>               
              </div>
            </div>
              <div className='row pb-2'>
              <button 
                id="power"
                className='border border-2 bg-transparent rounded-circle border-warning mx-auto'
                style={{height: bHeight, width: bHeight}}
                onClick={(this.handleClick)}
                ></button>
              </div>
            </div>
            
            </div>
            </div>     
        </div>
      );
    }
  }

  
  // ========================================
  
  export default Dex