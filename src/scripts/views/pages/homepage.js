const HomePage = {
  async render() {
    return `
          <h2>HomePage</h2>
          <div class="asd"></div>
        `;
  },
  async afterRender(){
    console.log(Date.now())
  }

};
export default HomePage;
