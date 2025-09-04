


    const openBtn = document.getElementById('open-sidebar-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');
    const sidebar = document.getElementById('sliding-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

        openBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
        overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    });





// formmm

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form-section');
  
  if (form) {
    form.addEventListener('submit', function(event) {
      
      event.preventDefault();

      const requiredInputs = form.querySelectorAll('input[required], textarea[required]');
      let allFieldsValid = true;

      requiredInputs.forEach(input => {
        
        input.classList.remove('is-invalid');
        
        
        if (input.value.trim() === '') {
          input.classList.add('is-invalid'); 
          allFieldsValid = false;
        }
      });

      
      if (allFieldsValid) {
        
        alert('done');
        form.reset(); 
      } else {
        alert('fill the form');
      }
    });
  }
});







