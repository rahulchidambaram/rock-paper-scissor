function handleCost(event) {
    if(event.key === 'Enter') 
    {
        calculateTotal();
    }
}

function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);

    document.querySelector('.calculation').innerHTML = '';
    document.querySelector('.js-error-message').innerHTML = '';

    if (cost < 0) {
        document.querySelector('.js-error-message').innerHTML = 'Error : Cost cannot be less than $0';
         // If we display an error, we can use return to
          // end this function immediately. This is called
          // an "early return" and it makes the code cleaner
          // because it reduces nesting / indents.
          return;
    }

    if(cost <= 40) {
        cost = cost + 10;
    }
      
    document.querySelector('.calculation').innerHTML = `Total Cost = $${cost}`;
}

function subscribe() {
    const buttonElement = document.querySelector('.subscribe');

    if(buttonElement.innerText === 'Subscribe') {
        buttonElement.innerText = 'Subscribed';
        buttonElement.classList.add('is-subcribed');
    }
    else {
        buttonElement.innerText = 'Subscribe';
        buttonElement.classList.remove('is-subcribed');

    }
}
