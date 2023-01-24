import { test, expect } from '@playwright/test'

test('homepage has title and links to appointment page', async ({
  page,
  baseURL,
}) => {
  await page.goto('/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Philip Schonholzer/)

  // create a locator
  const pageHeading = page.getByRole('heading', { name: 'Philip Schönholzer' })

  // Expect an attribute "to be strictly equal" to the value.
  await expect(pageHeading).toBeDefined()

  // Click the get started link.
  await page.getByRole('link', { name: 'Termin vereinbaren' }).click()

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/termin-vereinbaren/)

  await expect(page).toHaveTitle(/Termin vereinbaren/)

  const appointmentHeading = page.getByRole('heading')
  await expect(appointmentHeading).toHaveText(/Termin vereinbaren/)

  await appointmentHeading.click()

  await expect(page).toHaveTitle(/Philip Schönholzer/)
  await expect(page).toHaveURL(`${baseURL}/`)
})
