document.addEventListener('DOMContentLoaded', () => {
  const imgContent = document.querySelectorAll('.tabcontent'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsParent = document.querySelector('.tabheader__items');

        const hideTabeContent = () => {
          imgContent.forEach(item => {
            item.style.display = 'none';
          });
          tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
          })
        }
        hideTabeContent();

        const showTabContent = (i = 0) => {
          imgContent[i].style.display = 'block';
          tabs[i].classList.add('tabheader__item_active');
        }
        showTabContent();

        tabsParent.addEventListener('click', (event) => {
          const target = event.target;
          if (target && target.classList.contains('tabheader__item')) {
           tabs.forEach((item, i) => {
              if (target == item) {
                hideTabeContent();
                showTabContent(i);
              }
           })
          }
        })
});

