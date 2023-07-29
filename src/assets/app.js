AOS.init();

function addModalContent() {
  const modalContent = `
    <div class="ReactModal__Overlay ReactModal__Overlay--after-open"
         style="position: fixed; inset: 0px;">
      <div class="ReactModal__Content ReactModal__Content--after-open modal modal-roadmap" tabindex="-1" role="dialog"
        aria-label="Modal" aria-modal="true">
        <div class="modal-wrapper ">
          <div class="close " id="closeButton"><img
              src="./src/assets/media/closebutton.png"
              class="img-fluid " alt="Image"></div>
          <div class="modal-body ">
            <div class="modal-content "><img src="./src/assets/images/roadmap.png"
                class="img-fluid roadmap d-none d-md-block" alt="Image" style="width: 80%;max-width: 850px;margin: auto;"><img
                src="./src/assets/images/roadmap-mobile.png"
                class="img-fluid roadmap d-block d-md-none" alt="Image"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  const modalPortal = document.querySelector('.ReactModalPortal');
  modalPortal.insertAdjacentHTML('beforeend', modalContent);

  // Add event listener to the close button
  const closeButton = document.getElementById('closeButton');
  closeButton.addEventListener('click', removeModalContent);
}

function removeModalContent() {
  const modalOverlay = document.querySelector('.ReactModal__Overlay');
  modalOverlay.remove();
}

const openModalButton = document.getElementById('openModalButton');
openModalButton.addEventListener('click', addModalContent);


function hideLoader() {
    const loaderDiv = document.getElementById('loader');
    loaderDiv.classList.add('d-none');
  }
  setTimeout(hideLoader, 20000);

  // JavaScript to toggle the mobile menu
  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBg = document.getElementById('menuBg');

    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('inactive')
      mobileMenu.classList.toggle('show');
      menuBg.classList.toggle('show');
    });

    // Close the mobile menu when clicking outside the menu background
    menuBg.addEventListener('click', function () {
      mobileMenu.classList.remove('show');
      menuBg.classList.remove('show');
    });
  });
