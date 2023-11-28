document.addEventListener('DOMContentLoaded', function () {
    const partyList = document.getElementById('party-list');
    const partyForm = document.getElementById('party-form');
    
    // Example state object
    const state = {
      parties: [],
    };
  
    // Function to fetch and render parties
    function fetchAndRenderParties() {
      fetch('/events')
        .then(response => response.json())
        .then(data => {
          // Update state with fetched data
          state.parties = data;
          // Render parties based on the updated state
          renderParties();
        })
        .catch(error => console.error('Error fetching parties:', error));
    }
  
    // Function to render parties based on state
    function renderParties() {
      // Clear existing party list
      partyList.innerHTML = '';
  
      // Iterate through parties in state and render each one
      state.parties.forEach(party => {
        const partyElement = document.createElement('div');
        // Create HTML structure for party details
        partyElement.innerHTML = `
          <p><strong>Name:</strong> ${party.name}</p>
          <p><strong>Date:</strong> ${party.date}</p>
          <p><strong>Time:</strong> ${party.time}</p>
          <p><strong>Location:</strong> ${party.location}</p>
          <p><strong>Description:</strong> ${party.description}</p>
          <button class="delete-btn" data-party-id="${party.id}">Delete Party</button>
        `;
        // Attach event listener to the delete button
        partyElement.querySelector('.delete-btn').addEventListener('click', () => {
          const partyId = party.id;
          deleteParty(partyId);
        });
  
        partyList.appendChild(partyElement);
      });
    }
  
    // Function to delete a party
    function deleteParty(partyId) {
      fetch(`/events/${partyId}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete party');
          }
          // Update state by removing the deleted party
          state.parties = state.parties.filter(party => party.id !== partyId);
          // Render parties based on the updated state
          renderParties();
        })
        .catch(error => console.error('Error deleting party:', error));
    }
  
    // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault();
  
      const partyData = {
        name: document.getElementById('party-name').value,
        date: document.getElementById('party-date').value,
        time: document.getElementById('party-time').value,
        location: document.getElementById('party-location').value,
        description: document.getElementById('party-description').value,
      };
  
      fetch('/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(partyData),
      })
        .then(response => response.json())
        .then(newParty => {
          // Update state with the new party
          state.parties.push(newParty);
          // Render parties based on the updated state
          renderParties();
        })
        .catch(error => console.error('Error adding party:', error));
    }
  
    // Event listener for form submission
    partyForm.addEventListener('submit', handleFormSubmit);
  
    // Initial fetch and render when the page loads
    fetchAndRenderParties();
  });