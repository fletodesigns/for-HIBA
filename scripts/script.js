// Firebase Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC69LYlHOd3ShL1nVCkpnQaUaCer8tBjbU",
  authDomain: "for-hiba.firebaseapp.com",
  databaseURL: "https://for-hiba-default-rtdb.firebaseio.com",
  projectId: "for-hiba",
  storageBucket: "for-hiba.appspot.com",
  messagingSenderId: "788493747953",
  appId: "1:788493747953:web:3036e742fa9521218c8b50",
  measurementId: "G-75T3G14MNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Function to update the total donation on the home page
function updateTotalDonation() {
  const donationRef = ref(database, 'donations');
  onValue(donationRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const totalDonation = data.totalDonation || 0;
      const rank1Name = data.rank1 ? data.rank1.name : 'N/A';
      const rank1Donation = data.rank1 ? data.rank1.donation : 0;
      const rank2Name = data.rank2 ? data.rank2.name : 'N/A';
      const rank2Donation = data.rank2 ? data.rank2.donation : 0;
      const rank3Name = data.rank3 ? data.rank3.name : 'N/A';
      const rank3Donation = data.rank3 ? data.rank3.donation : 0;

      // Updating the total donation element
      document.getElementById('totalDonation').textContent = totalDonation;
      document.getElementById('rank1Name').textContent = rank1Name;
      document.getElementById('rank1Donation').textContent = rank1Donation;
      document.getElementById('rank2Name').textContent = rank2Name;
      document.getElementById('rank2Donation').textContent = rank2Donation;
      document.getElementById('rank3Name').textContent = rank3Name;
      document.getElementById('rank3Donation').textContent = rank3Donation;
    }
  });
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

      if (newDonation) {
        // Save to Firebase Realtime Database
        set(ref(database, 'donations'), {
          totalDonation: newDonation,
          rank1: { name: newRank1Name, donation: newRank1Donation },
          rank2: { name: newRank2Name, donation: newRank2Donation },
          rank3: { name: newRank3Name, donation: newRank3Donation }
        }).then(() => {
          alert('Total donation updated successfully!');
        }).catch((error) => {
          alert('Error updating donation: ' + error.message);
        });
      } else {
        alert('Please enter a valid number');
      }
    });
  }
}

// Initialize functions based on the page
document.addEventListener('DOMContentLoaded', function() {
  updateTotalDonation(); // Update total donation on the home page
  saveDonation();        // Setup save button on the edit page
});
