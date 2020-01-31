export default class ApiService {
  _baseUrl = 'https://anapioficeandfire.com/api/';

  async getData(url) {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._baseUrl}${url}. Received ${res.status}`)
    }
    return await res.json();
  }

  getDetails(section, id) {
    return this.getData(`${section}/${id}`);
  }

  getBooksList(pageNum = 1) {
    return this.getData(`books?page=${pageNum}&pageSize=48`);
  }

  getCharactersList(pageNum = 1, name = '', gender = '', culture = '', isAlive = '') {
    if (name !== '') {name = '&name=' + name}
    if (gender !== '') {gender = '&gender=' + gender}
    if (culture !== '') {culture = '&culture=' + culture}
    if (isAlive !== '') {isAlive = '&isAlive=' + isAlive}
    return this.getData(`characters?page=${pageNum}&pageSize=48${gender}${culture}${isAlive}${name}`)
  }

  getHousesList(pageNum = 1, name = '', region = '', words = '', hasWords = '', hasTitles = '', hasSeats = '', hasDiedOut = '', hasAncestralWeapons = '') {
    if (name !== '') {name = '&name=' + name}
    if (region !== '') {region = '&region=' + region}
    if (words !== '') {words = '&words=' + words}
    if (hasWords !== '') {hasWords = '&hasWords=' + hasWords}
    if (hasTitles !== '') {hasTitles = '&hasTitles=' + hasTitles}
    if (hasSeats !== '') {hasSeats = '&hasSeats=' + hasSeats}
    if (hasDiedOut !== '') {hasDiedOut = '&hasDiedOut=' + hasDiedOut}
    if (hasAncestralWeapons !== '') {hasAncestralWeapons = '&hasAncestralWeapons=' + hasAncestralWeapons}
    return this.getData(`houses?page=${pageNum}&pageSize=48${region}${words}${hasWords}${hasTitles}${hasSeats}${hasDiedOut}${hasAncestralWeapons}`)
  }

  urlToLink(url) {
    url = url.substr(url.lastIndexOf('/api') + 5);
    let data;
    return this.getData(url).then(res => data = res).then(() => {
      let itemId = data.url.substr(data.url.lastIndexOf('/api') + 5);
      let item = {
        name: data.name,
        id: itemId,
      }
      return item;
    })
  }
}