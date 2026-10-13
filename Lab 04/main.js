/**
 * Task 9, 10, & 11: Modular event handling and booking state
 */
import { delay, makeCounter } from './utils.js';

const scheduleTable = document.querySelector('.schedule-table');
const statusBox = document.getElementById('booking-status');
const getConfirmationNumber = makeCounter(1001);

if (scheduleTable && statusBox) {
  // Task 10 & 11: Delegated click listener with closest(), dataset, and async handler
  scheduleTable.addEventListener('click', async (event) => {
    const button = event.target.closest('.btn-book');
    if (!button) return;

    // Toggle selected state
    button.classList.toggle('selected');
    const isSelected = button.classList.contains('selected');
    
    // Provide temporary visual feedback during async booking simulation
    button.disabled = true;
    button.textContent = 'Updating...';

    // Task 11: Async delay simulation
    await delay(250);
    button.disabled = false;

    button.textContent = isSelected ? 'Booked ✓' : 'Book';
    button.setAttribute('aria-pressed', isSelected.toString());

    // Task 10: Query all selected buttons and count
    const selectedCount = scheduleTable.querySelectorAll('.btn-book.selected').length;
    const day = button.dataset.day;

    // Task 11: Numbered confirmation display
    if (isSelected) {
      const confId = getConfirmationNumber();
      statusBox.textContent = `Confirmed for ${day} (Ref #${confId}). Total booked: ${selectedCount}.`;
    } else {
      statusBox.textContent = selectedCount > 0
        ? `Cancelled session for ${day}. Total booked: ${selectedCount}.`
        : 'No sessions selected yet.';
    }
  });
}