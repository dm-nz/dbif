import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../header';
import Intro from '../intro';
import Start from '../start';
import BooksPage from '../books-page';
import CharactersPage from '../characters-page';
import HousesPage from '../houses-page';
import ItemDetails from '../item-details';
import Footer from '../footer';
import Error from '../error';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact render={
            () => {
              return (
                <div>
                  <Intro />
                  <Start />
                </div>
              )
            }
          } />
          <Route path="/books/page/:pageNum" exact render={
            ({match}) => {
              const {pageNum} = match.params;
              return <BooksPage pageNum={pageNum} />
            }
          } />
          <Route path="/books/:id" exact render={
            ({match}) => {
              const {id} = match.params;
              return <ItemDetails itemId={id} section='books' />
            }
          } />
          <Route path="/characters/page/:pageNum" exact render={
            ({match}) => {
              const {pageNum} = match.params;
              return <CharactersPage pageNum={pageNum} />
            }
          } />
          <Route path="/characters/:id" exact render={
            ({match}) => {
              const {id} = match.params;
              return <ItemDetails itemId={id} section='characters' />
            }
          } />
          <Route path="/houses/page/:pageNum" exact render={
            ({match}) => {
              const {pageNum} = match.params;
              return <HousesPage pageNum={pageNum} />
            }
          } />
          <Route path="/houses/:id" exact render={
            ({match}) => {
              const {id} = match.params;
              return <ItemDetails itemId={id} section='houses' imageType='png' />
            }
          } />
          <Route component={Error} />
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App;