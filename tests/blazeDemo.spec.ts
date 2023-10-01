import { test } from '@playwright/test';
import { BookingsPage } from '../pages/bookingsPage';
import { BasePage } from '../pages/basePage';

test.describe('Test Suite', () => {
  test('test', async ({ page }) => {
    const bookings = new BookingsPage(page);
    const base = new BasePage(page);

    await test.step("User goes to BlazeDemo", async () => {
      await base.loadWeb("https://blazedemo.com/index.php");
    });

    await test.step("User selects destiny", async () => {
      await bookings.selectDestiny();
    });

    await test.step("User fills Personal Info", async () => {
      await bookings.fillPersonalInfo();
    });

    await test.step("Confirmation from booking appears", async () => {
      await bookings.confirmationBooking();
    });
  });
});
