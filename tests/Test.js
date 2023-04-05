import { test, expect } from '@playwright/test';
// Tests for playwright

// Navitgate to website 
test ('Navigate to website', async ({ page }) => {
    await page.goto('http://localhost:3000');
});

// Clicking on the text box and filling it

test ('Clicking on the text box and filling it with the text "test"', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const input = page.getByLabel('New Todo:');
  // locate input and assign it to a variable
    await input.fill ('test');
    await expect (input).toHaveValue ('test');
});    

// Click on the add button

test ('Click on the add button', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByRole('button').click();
});

// Test to click the button after filling the box with text

test ('Click on the add button after filling the box with text', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const input = page.getByLabel('New Todo:');
    await input.fill ('test');
    await expect (input).toHaveValue ('test');
    await page.getByRole('button').click();
});

// If you add something to the text box, does it create a new list item?

test ('If you add something to the text box, does it create a new list item?', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const input = page.getByLabel('New Todo:');
    await input.fill ('this is a test');
    //await expect (input).toHaveValue ('this is a test');
    await page.getByRole('button').click();
    const todoList = page.getByRole('list');
    await expect(todoList).toContainText('this is a test'); 
});

// Check to see if the checkbox can be checked

test ('Check to see if the checkbox can be checked', async ({ page }) => {
    await page.goto('http://localhost:3000'); 
    const input = page.getByLabel('New Todo:');
    await input.fill ('this is a test');
    await page.getByRole('button').click();
    const checkbox = page.getByRole('checkbox');
    await checkbox.check();
    await expect(checkbox).toBeChecked();
});


// check to see if text becomes strikethrough

// check to see if text color changes

// Check to see if the checkbox can be unchecked

// Check to see if delete button changes color on hover

// Check to see if delete button deletes item on click

// Check to see if it doesn't allow an empty item to be added to the list
