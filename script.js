alert("Welcome to our FAMILY")


document.addEventListener('DOMContentLoaded', () => {
  const formContainer = document.getElementById('form-container');
  const donationForm = document.getElementById('donation-form');
  const volunteerForm = document.getElementById('volunteer-form');

  // Donation form submission
  
  donationForm.addEventListener('submit', function(event) {
    try {
      event.preventDefault();
      event.stopPropagation();

      const fullName = document.getElementById('donor-full-name').value;
      const email = document.getElementById('donor-email').value;
      const mobile = document.getElementById('donor-mobile').value;
      const state = document.getElementById('donor-state').value;
      const city = document.getElementById('donor-city').value;
      const pincode = document.getElementById('donor-pincode').value;
      const address = document.getElementById('donor-address').value;

      if (!fullName || !email || !mobile || !state || !city || !pincode || !address) {
        throw new Error('All fields are required.');
              alert(`Thank you, ${fullName}! Your donation has been received.\nWe will contact you at ${email}.\nMobile No.: ${mobile}\nState: ${state}\nCity: ${city}\nPincode: ${pincode}\nAddress: ${address}`);
       function submit1(){
        alert(`Thank you, ${fullName}! Your donation has been received.\nWe will contact you at ${email}.\nMobile No.: ${mobile}\nState: ${state}\nCity: ${city}\nPincode: ${pincode}\nAddress: ${address}`);

       }
      }

      alert(`Thank you, ${fullName}! Your donation has been received.\nWe will contact you at ${email}.\nMobile No.: ${mobile}\nState: ${state}\nCity: ${city}\nPincode: ${pincode}\nAddress: ${address}`);
    } catch (error) {
      console.error(error.message);
    }
  });

  // Volunteer form submission
  volunteerForm.addEventListener('submit', function(event) {
    try {
      event.preventDefault();
      event.stopPropagation();

      const fullName = document.getElementById('volunteer-full-name').value;
      const email = document.getElementById('volunteer-email').value;
      const birthDate = document.getElementById('volunteer-birthdate').value;
      const mobile = document.getElementById('volunteer-mobile').value;
      const address = document.getElementById('volunteer-address').value;
      const time = document.getElementById('volunteer-time').value;

      if (!fullName || !email || !birthDate || !mobile || !address || !time) {
        throw new Error('All fields are required.');
        alert("Welcome to Sigma Web Development Course")
      }

      alert(`Thank you, ${fullName}! Your volunteer application has been received.\nWe will contact you at ${email}.\nBirth Date: ${birthDate}\nMobile No.: ${mobile}\nAddress: ${address}\nAvailable Time: ${time}`);
    } catch (error) {
        alert("Welcome to our FAMILY...!")

      console.error(error.message);
    }
  });
});


