import { Component } from '@angular/core';

@Component({
  selector: 'app-instructions',
  standalone: true,
  styles: [
    `code.invalid {
      color: var(--invalid-color);
    }`,
  ],
  template: `
    <p>
      We would like to collect user data of the folks that visit our site. To do that, we are looking to collect their first name, last name, email, and optionally a phone number. Once that is entered, we would send that off to an API to store the data in our database. We would also like our users to see all of their friends that might have visited as well.
    </p>
    <ul>
      <legend><strong>To do this: </strong></legend>
      <li>We need to correctly validate the form. If it is not valid, we should display the incorrect form field with the <code class="invalid">invalid</code> color. </li>
      <li>
        If the form is valid, make the call that will save the data.
        <ol>
          <li>If the API succeeds, add the user data to a list and display the data collected as a card view, and make sure to only display the last 4 of the phone number (if present). This list should be sorted alphabetically.</li>
          <li>If the API fails, we should show some message to the user to try again or clean up their data.</li>
        </ol>
      </li>
      <li>
        Allow the user to search for a specific user in the saved list of users.
      </li>
      <li>Make sure to be as semantically correct as you can.</li>
      <li>Feel free to add any personal flairs you would like, which includes making the form look as nice as you want/can.</li>
      <li><strong>Optional: </strong>Create a view that can be used to view a single user</li>
    </ul>
  `,
})
export class InstructionsComponent {}
