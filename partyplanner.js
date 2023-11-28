document.addEventListener('DOMContentLoaded', function () {
    const partyList = document.getElementById('party-list');
    const partyForm = document.getElementById('party-form');
  
    // Function to fetch and render parties
    function fetchAndRenderParties() {
      // TODO: Implement fetching parties from the API and rendering to the UI
    }
  
    // Function to delete a party
    function deleteParty(partyId) {
      // TODO: Implement deleting a party using the API
    }
  
    // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault();
  
      const partyName = document.getElementById('party-name').value;
      const partyDate = document.getElementById('party-date').value;
      const partyTime = document.getElementById('party-time').value;
      const partyLocation = document.getElementById('party-location').value;
      const partyDescription = document.getElementById('party-description').value;
  
      // TODO: Implement adding a new party using the API
    }
  
    // Event listener for form submission
    partyForm.addEventListener('submit', handleFormSubmit);
  
    // Initial fetch and render when the page loads
    fetchAndRenderParties();
  });