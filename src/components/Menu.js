import React, { Component } from 'react';
import '../assets/styles/Menu.css';
import axios from 'axios'


// https://unsplash.com/collections/312299/restaurant-cafe?photo=mcjvw2570iA
// https://unsplash.com/collections/312299/restaurant-cafe

class Menu extends Component {


  test() {


    axios.get('https://json-data.herokuapp.com/restaurant/menu/1').then(function (data) {

      console.log(data);

    })

  } 

  render() {

    return (

      <div id="MenuOpen">
      
          <div id='MenuBg'>
            <img id='MenuBgImg' alt=' ' src='https://unsplash.it/1024/1450?image=292' />
            <div id='MenuBgImgCvr'></div>
          </div>

          <div id='MenuCont'>
            <div id='MenuInnerCont'>
              <h1>Menu</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis ipsa eligendi tempora dolor culpa adipisci necessitatibus, asperiores, voluptatem illo inventore in a, at. Dolorum commodi dignissimos labore natus, perspiciatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis ipsa eligendi tempora dolor culpa adipisci necessitatibus, asperiores, voluptatem illo inventore in a, at. Dolorum commodi dignissimos labore natus, perspiciatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis ipsa eligendi tempora dolor culpa adipisci necessitatibus, asperiores, voluptatem illo inventore in a, at. Dolorum commodi dignissimos labore natus, perspiciatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis ipsa eligendi tempora dolor culpa adipisci necessitatibus, asperiores, voluptatem illo inventore in a, at. Dolorum commodi dignissimos labore natus, perspiciatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis ipsa eligendi tempora dolor culpa adipisci necessitatibus, asperiores, voluptatem illo inventore in a, at. Dolorum commodi dignissimos labore natus, perspiciatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis ipsa eligendi tempora dolor culpa adipisci necessitatibus, asperiores, voluptatem illo inventore in a, at. Dolorum commodi dignissimos labore natus, perspiciatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis ipsa eligendi tempora dolor culpa adipisci necessitatibus, asperiores, voluptatem illo inventore in a, at. Dolorum commodi dignissimos labore natus, perspiciatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis ipsa eligendi tempora dolor culpa adipisci necessitatibus, asperiores, voluptatem illo inventore in a, at. Dolorum commodi dignissimos labore natus, perspiciatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis ipsa eligendi tempora dolor culpa adipisci necessitatibus, asperiores, voluptatem illo inventore in a, at. Dolorum commodi dignissimos labore natus, perspiciatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis ipsa eligendi tempora dolor culpa adipisci necessitatibus, asperiores, voluptatem illo inventore in a, at. Dolorum commodi dignissimos labore natus, perspiciatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis ipsa eligendi tempora dolor culpa adipisci necessitatibus, asperiores, voluptatem illo inventore in a, at. Dolorum commodi dignissimos labore natus, perspiciatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis ipsa eligendi tempora dolor culpa adipisci necessitatibus, asperiores, voluptatem illo inventore in a, at. Dolorum commodi dignissimos labore natus, perspiciatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis ipsa eligendi tempora dolor culpa adipisci necessitatibus, asperiores, voluptatem illo inventore in a, at. Dolorum commodi dignissimos labore natus, perspiciatis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis ipsa eligendi tempora dolor culpa adipisci necessitatibus, asperiores, voluptatem illo inventore in a, at. Dolorum commodi dignissimos labore natus, perspiciatis.</p>
              
            </div>
          </div>
          
      </div>
    );
  }
}

export default Menu;
