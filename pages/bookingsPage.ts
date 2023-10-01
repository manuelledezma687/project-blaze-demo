import { BasePage } from "./basePage";
import { BookingsLocators } from "./locators/bookings";
import { Locator, Page } from "@playwright/test";

export class BookingsPage extends BasePage {

    private readonly fromPort: Locator;
    private readonly toPort: Locator;
    private readonly flightOption: Locator;
    private readonly inputName: Locator;
    private readonly address: Locator;
    private readonly city: Locator;
    private readonly state: Locator;
    private readonly zipCode: Locator;
    private readonly creditCard: Locator;
    private readonly creditCardNumber: Locator;
    private readonly nameOnCard: Locator;
    private readonly submitButton: Locator;
    private readonly finalMessage: Locator;

        constructor(page: Page){
            super(page);
            this.fromPort = page.locator(BookingsLocators.fromPort);
            this.toPort = page.locator(BookingsLocators.toPort);
            this.flightOption = page.locator(BookingsLocators.flightOption);
            this.inputName = page.locator(BookingsLocators.inputName);
            this.address = page.locator(BookingsLocators.address);
            this.city = page.locator(BookingsLocators.city);
            this.state = page.locator(BookingsLocators.state);
            this.zipCode = page.locator(BookingsLocators.zipCode);
            this.creditCard = page.locator(BookingsLocators.creditCard);
            this.creditCardNumber = page.locator(BookingsLocators.creditCardNumber);
            this.nameOnCard = page.locator(BookingsLocators.nameOnCard);
            this.submitButton = page.locator(BookingsLocators.submitButton);
            this.finalMessage = page.locator(BookingsLocators.finalMessage);
        }

        async selectDestiny(){
            await this.selectOpt(BookingsLocators.fromPort,"Paris");
            await this.selectOpt(BookingsLocators.toPort,"Buenos Aires");
            await this.clickOn(BookingsLocators.submitButton);
            await this.clickOn(BookingsLocators.flightOption);
        }

        async fillPersonalInfo(){
            await this.fillField(BookingsLocators.inputName,"Andrew Jones");
            await this.fillField(BookingsLocators.address,"123 Street");
            await this.fillField(BookingsLocators.city,"Any");
            await this.fillField(BookingsLocators.state,"State");
            await this.fillField(BookingsLocators.zipCode,"12345");
            await this.selectOpt(BookingsLocators.creditCard,'amex');
            await this.fillField(BookingsLocators.creditCardNumber,"1234567891234567");
            await this.fillField(BookingsLocators.nameOnCard,"John Smith");
            await this.clickOn(BookingsLocators.submitButton)
        }

        async confirmationBooking(){
            await this.expectVisible(BookingsLocators.finalMessage);
        }
}