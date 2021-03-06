import axios from 'axios';

export default {

  getListBeer() {
    return axios.get('/beers')
  },

  getBeerById(id) {
    return axios.get(`/beers/${id}`)
  },

  getBeerByBreweryId(id) {
    return axios.get(`/breweries/${id}/beers`)
  },

  createBeer(beer){
      return axios.post('/beers', beer)
  },

  toggleAvailability(id){
    return axios.put(`/beers/${id}/toggle`)
  },

  searchForBeers(searchTerms){
    return axios.post(`/beers/search/${searchTerms}`)
  }
}