

/*=============typed=============*/

const typed = new Typed('.typed-text', {
            strings: ['Web Developer', 'Designers', 'Freelancer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop:true
});


// Get all service items
const serviceItems = document.querySelectorAll('.service');

// Add event listener to each service item
serviceItems.forEach(item => {
  item.addEventListener('click', () => {
    // Toggle active class on clicked service item
    item.classList.toggle('active');
    // Close all other service items
    serviceItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
  });
});

      /*=======input=====*/

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  // Here you can add your code to send the message
  // For example, using a fetch() request to send the data to a server

  form.reset();
});


const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  const viewProject = project.querySelector('a');
  const projectImage = project.querySelector('img');

  viewProject.addEventListener('click', event => {
    event.preventDefault();

    // Here you can add your code to display the project details
    // For example, showing a modal window with more information about the project

    // Here's an example of how you could display the project details in a modal window
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalContent = `
      <img src="${projectImage.src}" alt="${projectImage.alt}">
      <h3>${project.querySelector('h3').textContent}</h3>
      <p>${project.querySelector('p').textContent}</p>
      <button class="close-modal">Close</button>
    `;
    modal.innerHTML = modalContent;
    document.body.appendChild(modal);

    const closeModal = modal.querySelector('.close-modal');
    closeModal.addEventListener('click', event => {
      event.preventDefault();
      modal.remove();
    });
  });
});


const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const url = icon.getAttribute('href');
    window.open(url, '_blank');
  });
});
