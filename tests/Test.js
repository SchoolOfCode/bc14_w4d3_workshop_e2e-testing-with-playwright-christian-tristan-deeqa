import { test, expect } from '@playwright/test';
// Tests for playwright

// Navitgate to website 
test ('Navigate to website', async ({ page }) => {
    await page.goto('http://localhost:52237/  ');
});

// Clicking on the text box
test ('Clicking on the text box', async ({ page }) => {
    await page.goto('http://localhost:52237/ ');
    await page.getByRole('new-todo').click();
    await expect("new-todo").toBeEnabled()
});

    

// type text into text box
test ('Typing in the box', async ({ page }) => {
    await page.goto('http://localhost:52237/ ');
    await page.getByRole('new-todo').click();
    await page.type('input', 'Hello World');
    expect(textbox).toContainText('Hello World');
});


// Click on the add button

// If you add something to the text box, does it create a new list item?

// Check to see if the checkbox can be checked

// check to see if text becomes strikethrough

// check to see if text color changes

// Check to see if the checkbox can be unchecked

// Check to see if delete button changes color on hover

// Check to see if delete button deletes item on click

// Check to see if it doesn't allow an empty item to be added to the list
// test ('Clicking on the text box', async ({ page }) => {
//     await page.goto('http://localhost:52237/ ');
//     await page.getByLabel(`new-todo`).click();
//     await expect("new-todo").toBeEnabled()
// });