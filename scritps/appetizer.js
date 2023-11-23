const Appetizer = (value) => {
  const appetizerContent = document.createElement('div');
  appetizerContent.setAttribute('class', 'container');

  const appetizerHeader = document.createElement('h1');
  appetizerHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
  appetizerHeader.innerHTML = 'Appetizers';

  const appetizerList = document.createElement('li');
  appetizerList.setAttribute('class', 'appetizerList')

  const appetizerItems = () => {
    const list = document.createElement('li');
    list.setAttribute('class', 'nav-item list-unstyled mx-2');

    const appetizer1 = document.createElement('h1');
    appetizer1.setAttribute('id', 'appetizer1');
    appetizer1.setAttribute('class', 'text-center');
    appetizer1.innerHTML = 'Mini Potion';
    list.appendChild(appetizer1);
    const appetizerParagraph1 = document.createElement('p');
    appetizerParagraph1.setAttribute('class', 'my-3 pb-3 text-center');
    appetizerParagraph1.innerHTML = 'Pop a Quick one';
    list.appendChild(appetizerParagraph1);
    const appetizerParagraph2 = document.createElement('p');
    appetizerParagraph2.setAttribute('class', 'my-3 pb-3 text-center');
    appetizerParagraph2.innerHTML = 'Heals 25 Shield Points';
    list.appendChild(appetizerParagraph2);


    return list;
  };
  appetizerContent.appendChild(appetizerHeader);
  appetizerContent.appendChild(appetizerItems());

  return appetizerContent;
  };

export default Appetizer;