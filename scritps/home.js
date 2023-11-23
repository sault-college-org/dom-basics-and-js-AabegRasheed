
const Home = () => {
  const homeContent = document.createElement('div');
  homeContent.setAttribute('class', 'homepage container-fluid');

  const homeHeader = document.createElement('h1');
  homeHeader.setAttribute('class', 'home-header custom-font');
  homeHeader.innerHTML = 'Fortnite Item Shop';

  const homeText = document.createElement('h3');
  homeText.setAttribute('class', 'home-text custom-font2');
  homeText.innerHTML = 'Fine dining in game';

  homeContent.appendChild(homeHeader);
  homeContent.appendChild(homeText);

  return homeContent;
};

export default Home;