import React, { Component } from 'react';
import './App.css';
import GifList from './components/GifList';
import SelectedGif from './components/SelectedGif';
import Title from './components/Title';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import Banner2 from './components/Banner2';
import Title2 from './components/Title2';
import SelectedGifBanner from './components/SelectedGifBanner';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      selectedGif1: `https://media.giphy.com/media/CO3xgSUdsGxb2/giphy.gif`,
      selectedGif2: `https://media.giphy.com/media/aaY0I3WQfELNS/giphy.gif`,
      selectedGif3: `https://media.giphy.com/media/nvtj3TWWY7K0/giphy.gif`,
      selectedGif4: `https://media.giphy.com/media/HiywL3q1m7lrq/giphy.gif`,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  handleSelectGif = (clickedGif) => {
    this.setState({ selectedGif1: clickedGif })
  }

  fetchData = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=harry+styles&api_key=${process.env.REACT_APP_GIPHY_KEY}`)
      .then(res => res.json())
      .then(data => this.setState({ dataArray: data.data }))
  }

  render() {
    const { selectedGif1, selectedGif2, selectedGif3, selectedGif4, dataArray } = this.state;
    return (
     <div className='container'>
       <Banner />
       <Title />
       <SelectedGif selectedGif1={selectedGif1} selectedGif2={selectedGif2} selectedGif3={selectedGif3} />
       <Banner2 />
       <Title2 />
       <Carousel />
       <SelectedGifBanner selectedGif4={selectedGif4} />
       {/*<GifList gifs={dataArray} handleSelectGif={this.handleSelectGif} /> */}
     </div>
    );
  }
}

export default App;

