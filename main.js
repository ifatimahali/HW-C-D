function toggleContent() {
  let DogContent = document.querySelector('h1').textContent.includes('Dog');
  
  let catContent = document.getElementById('hero-section');
    if (DogContent) {
      catContent.style.backgroundImage = "url('pexels-sam-lion-6001432.jpg')";
      catContent.querySelector('h1').textContent = "We're the Cat People";
      catContent.querySelector('p').textContent = "Book trusted, local pet sitters and walkers who will care for your cat like you would.";
      catContent.querySelector('.rover-cta').textContent = "Search";
      catContent.querySelector('.rover-cta-mobile').textContent = "Discover local sitters";
    } else {
      catContent.style.backgroundImage = "url('tamas-pap-cCVs8eo7vH4-unsplash.jpg')";
      catContent.querySelector('h1').textContent = "We're the Dog People";
      catContent.querySelector('p').textContent = "Book trusted, local pet sitters and walkers who will care for your dog like you would.";
      catContent.querySelector('.rover-cta').textContent = "Search";
      catContent.querySelector('.rover-cta-mobile').textContent = "Discover local sitters";
    }
  
  let servicesSection = document.getElementById('services-section');
    let serviceI = servicesSection.querySelectorAll('.col-md-4');
    if (DogContent) {
      serviceI[0].querySelector('img').src = "pet-hotell.png";
      serviceI[0].querySelector('h3').textContent = "Cat Boarding";
      serviceI[0].querySelector('p').textContent = "Perfect if you need overnight pet care for your cat.";
  
      serviceI[1].querySelector('img').src = "animal.png";
      serviceI[1].querySelector('h3').textContent = "House Sitting";
      serviceI[1].querySelector('p').textContent = "Great if you need overnight pet or house-sitting services for your cat.";
  
      serviceI[2].querySelector('img').src = "animal-shelter (1).png";
      serviceI[2].querySelector('h3').textContent = "Cat Walking";
      serviceI[2].querySelector('p').textContent = "Whenever your cat needs a walk.";
  
      serviceI[3].querySelector('img').src = "pet-care.png";
      serviceI[3].querySelector('h3').textContent = "Cat Day Care";
      serviceI[3].querySelector('p').textContent = "Daytime pet care in your sitter’s cat-friendly home.";
  
      serviceI[4].querySelector('img').src = "play.png";
      serviceI[4].querySelector('h3').textContent = "Drop-In Visits";
      serviceI[4].querySelector('p').textContent = "For check-ins and play dates with your cats.";
    } else {
      serviceI[0].querySelector('img').src = "https://i.ibb.co/jJGCg6c/suitcase.png";
      serviceI[0].querySelector('h3').textContent = "Dog Boarding";
      serviceI[0].querySelector('p').textContent = "Perfect if you need overnight pet care.";
  
      serviceI[1].querySelector('img').src = "https://i.ibb.co/S6KpBBZ/house.png";
      serviceI[1].querySelector('h3').textContent = "House Sitting";
      serviceI[1].querySelector('p').textContent = "Great if you need overnight pet or house-sitting services.";
  
      serviceI[2].querySelector('img').src = "https://i.ibb.co/HpMNXjZ/paws.png";
      serviceI[2].querySelector('h3').textContent = "Dog Walking";
      serviceI[2].querySelector('p').textContent = "Whenever your dog needs a walk.";
  
      serviceI[3].querySelector('img').src = "https://i.ibb.co/NyQN7dy/sun.png";
      serviceI[3].querySelector('h3').textContent = "Doggy Day Care";
      serviceI[3].querySelector('p').textContent = "Daytime pet care in your sitter’s dog-friendly home.";
  
      serviceI[4].querySelector('img').src = "https://i.ibb.co/CtLTLmX/food.png";
      serviceI[4].querySelector('h3').textContent = "Drop-In Visits";
      serviceI[4].querySelector('p').textContent = "For check-ins and play dates.";
    }
  let section = document.getElementById('section-card');
        if (DogContent) {
          section.style.backgroundImage = "url('mobile-hero-2.jpg')";
        } else {
          section.style.backgroundImage = "url('mobile-hero-1.jpg')";
        }
  let sectionCard = document.getElementById('card1');
        if (DogContent) {
          sectionCard.querySelector('#card-text').innerHTML = "My Rover sitter sent me updates throughout the day and took care of my cat as if she were her own. <span class=\"font-weight-bold\">– Corinna F.</span>";
          sectionCard.querySelector('#learn').innerHTML = "We’re The Cat People. <a href=\"#\">Learn More</a>";
        } else {
          sectionCard.querySelector('#card-text').innerHTML = "My Rover sitter sent me updates throughout the day and took care of my dog as if she were her own. <span class=\"font-weight-bold\">– Corinna F.</span>";
          sectionCard.querySelector('#learn').innerHTML = "We’re The Dog People. <a href=\"#\">Learn More</a>";
        }
  let lastSection = document.getElementById('last-section');
        if (DogContent) {
          lastSection.querySelector('h2').textContent = "We’re the treat-your-cat-like-family cat people";
        } else {
          lastSection.querySelector('h2').textContent = "We’re the treat-your-dog-like-family dog people";
        }
  }  