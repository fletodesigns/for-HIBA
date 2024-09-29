// Function to update the total donation on the home page
function updateTotalDonation() {
    // getting Elements
    const totalDonation = localStorage.getItem('totalDonation') || 0;
    const rank1Name = localStorage.getItem('rank1Name') || 0;
    const rank1Donation = localStorage.getItem('rank1Donation') || 0;
    const rank2Name = localStorage.getItem('rank2Name') || 0;
    const rank2Donation = localStorage.getItem('rank2Donation') || 0;
    const rank3Name = localStorage.getItem('rank3Name') || 0;
    const rank3Donation = localStorage.getItem('rank3Donation') || 0;

    // Updating the total donation element
    const totaldonationElement = document.getElementById('totalDonation');
    const rank1NameElement = document.getElementById('rank1Name');
    const rank1DonationElement = document.getElementById('rank1Donation');
    const rank2NameElement = document.getElementById('rank2Name');
    const rank2DonationElement = document.getElementById('rank2Donation');
    const rank3NameElement = document.getElementById('rank3Name');
    const rank3DonationElement = document.getElementById('rank3Donation');
    if (totaldonationElement,rank1NameElement,rank1DonationElement,rank2NameElement,rank2DonationElement,rank3NameElement,rank3DonationElement) {
        totaldonationElement.textContent = totalDonation;
        rank1NameElement.textContent = rank1Name;
        rank1DonationElement.textContent = rank1Donation;
        rank2NameElement.textContent = rank2Name;
        rank2DonationElement.textContent = rank2Donation;
        rank3NameElement.textContent = rank3Name;
        rank3DonationElement.textContent = rank3Donation;
    }
}

// Function to save the new donation amount on the edit page
function saveDonation() {
    const saveButton = document.getElementById('saveButton');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            const newDonation = document.getElementById('donationInput').value;
            const newRank1Name = document.getElementById('rank1NameInput').value;
            const newRank1Donation = document.getElementById('rank1DonationInput').value;
            const newRank2Name = document.getElementById('rank2NameInput').value;
            const newRank2Donation = document.getElementById('rank2DonationInput').value;
            const newRank3Name = document.getElementById('rank3NameInput').value;
            const newRank3Donation = document.getElementById('rank3DonationInput').value;
            console.log(newDonation,newRank1Name,newRank1Donation,newRank2Name,newRank2Donation,newRank3Name,newRank3Donation);
            if (newDonation) {
                localStorage.setItem('totalDonation', newDonation);
                localStorage.setItem('rank1Name', newRank1Name);
                localStorage.setItem('rank1Donation', newRank1Donation);
                localStorage.setItem('rank2Name', newRank2Name);
                localStorage.setItem('rank2Donation', newRank2Donation);
                localStorage.setItem('rank3Name', newRank3Name);
                localStorage.setItem('rank3Donation', newRank3Donation);
                alert('Total donation updated successfully!');
            } else {
                alert('Please enter a valid number');
            }
        });
    }
}

// Initialize functions based on the page
document.addEventListener('DOMContentLoaded', function() {
    updateTotalDonation();  // Update total donation on the home page
    saveDonation();         // Setup save button on the edit page
});
