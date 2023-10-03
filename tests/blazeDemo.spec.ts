import { test } from '@playwright/test';
import { BookingsPage } from '../pages/bookingsPage';
import { BasePage } from '../pages/basePage';


test('test', async ({ page }) => {
  const bookings = new BookingsPage(page);
  const base = new BasePage(page);
  await base.loadWeb("https://blazedemo.com/index.php");
  await bookings.selectDestiny();
  await bookings.fillPersonalInfo();
  await bookings.confirmationBooking();
});