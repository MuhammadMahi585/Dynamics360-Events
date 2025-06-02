var eventToDisplay=[];

//Fetching data from Json file
const fetchEvents = async() =>{
  try{
 const response =await fetch('../js/Event.json')
 const event = await response.json()
  eventToDisplay=event;
  displayEvents(eventToDisplay)
  }
  catch(err){
    console.log("Error during fetching:",err)
  }
}

//Display events
const displayEvents=(events)=>{
  const container = document.getElementById('eventsContainer');
  container.innerHTML='';
    events.forEach(event => {
      const col = document.createElement('div');
      col.className = 'col-md-4 ';

      col.innerHTML = `
        <div class="card h-100 bg-dark bg-opacity-75 text-white border-light shadow">
          <div class="card-body ">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text"><strong>Date:</strong> ${event.date}</p>
            <p class="card-text"><strong>Time:</strong> ${event.time}</p>
            <p class="card-text"><strong>Location:</strong> ${event.location}</p>
            <p class="card-text">${event.description}</p>
            <div class="text-end">
            <a href="#" class="btn btn-secondary bg-dark text-light btn">Register</a>
            </div>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
}


   const searchedInput = document.getElementById('searchedText')
  //Searching Functionality
  searchedInput.addEventListener('input',()=>{
      const searchedText = searchedInput.value.toLowerCase();
   
    if(searchedText.length>0) {
    const filterEvents = eventToDisplay.filter(event=>
      event.name.toLowerCase().includes(searchedText) ||
      event.description.toLowerCase().includes(searchedText)
    )
    displayEvents(filterEvents)
  }
  else{
   displayEvents(eventToDisplay)
  }
  }
);
  window.onload = fetchEvents;