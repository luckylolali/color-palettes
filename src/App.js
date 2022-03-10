import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SingelColorPalette';
import NewPaletteForm from "./NewPaletteForm";
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Page from "./Page";

class App extends Component {
  constructor(props){
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {    
      palettes: savedPalettes || seedColors
    }
    this.saveNewPalette = this.saveNewPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  findPalette (id){
    return this.state.palettes.find( p => p.id === id );
  }
  saveNewPalette(palette){
    //console.log(palette);
    this.setState({ palettes: [...this.state.palettes, palette]}, this.syncLocalStoragePalette);
  }
  deletePalette(id){
    this.setState( st => ({palettes: st.palettes.filter( p => p.id !== id )}), this.syncLocalStoragePalette);
  }
  syncLocalStoragePalette (){
    let storeString = JSON.stringify(this.state.palettes);
    window.localStorage.setItem("palettes",storeString );
  }
  render(){
    return (  
      <Route render={ ({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={500}>
            <Switch location = {location}>
              <Route exact 
                    path="/palette/new" 
                    render={ (routeProps) => (
                      <Page>
                        <NewPaletteForm  
                        savePalette={this.saveNewPalette} 
                        palettes={this.state.palettes}
                        {...routeProps}/>
                      </Page>) }
              />
              <Route exact 
                    path="/palette/:paletteId/:colorId" 
                    render={ (routeProps) => (
                      <Page>
                        <SingleColorPalette 
                        palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                        colorId = {routeProps.match.params.colorId}
                        />
                    </Page>
                    ) }
              />
              <Route exact 
                    path="/palette/:id" 
                    render={ routeProps => (
                      <Page>
                        <Palette 
                        palette={generatePalette(this.findPalette(routeProps.match.params.id))}
                        />
                      </Page>                         
                    ) }
              />
              <Route exact path="/" render={ (routeProps) => (
                <Page>
                  <PaletteList 
                  list={this.state.palettes}  
                  {...routeProps}
                  deletePalette={this.deletePalette}
                  />
                </Page>
              )} />
              <Route render={ (routeProps) => (
                <Page>
                  <PaletteList 
                  list={this.state.palettes}  
                  {...routeProps}
                  deletePalette={this.deletePalette}
                  />
                </Page>
              )} />              
          </Switch>
      </CSSTransition>
      </TransitionGroup>
      )}  />    
      
        
    );
  }
  
}

export default App;


