import { defineConfig, devices } from 'next/experimental/testmode/playwright';
import 'dotenv/config';

/**
 * See https://playwright.dev/docs/test-configuration.
 */

export default defineConfig({
  testDir: './tests',
  testMatch: ['**/*.spec.tsx'],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 1,
  timeout: 30000, // Global timeout for each test
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    storageState: undefined,
    headless: true
  },
  testIgnore: ['**/*.test.tsx'],
  webServer: {
    command: 'pnpm dev',
    port: 3000,
    reuseExistingServer: true
    // url: 'http://127.0.0.1:3000',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
});
