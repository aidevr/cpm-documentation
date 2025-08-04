# Testing

This project includes tests to verify the integrity of the homepage features and ensure that all SVG assets load correctly.

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode during development
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

### HomepageFeatures Component Tests

Located at `src/components/HomepageFeatures/__tests__/index.test.js`

**SVG File Existence Tests:**
- Verifies that all required SVG files exist in the `static/img` directory
- Validates that SVG files contain proper SVG markup
- Tests the following files:
  - `streamlined_appraisals.svg`
  - `continuous_monitoring.svg`
  - `goal_oriented_management.svg`

**Component Rendering Tests:**
- Ensures the HomepageFeatures component renders without errors
- Verifies all three feature sections are displayed
- Confirms feature descriptions are present
- Tests SVG element rendering

**Accessibility Tests:**
- Checks proper heading structure
- Verifies SVG elements have appropriate `role="img"` attributes

**Data Integrity Tests:**
- Validates file naming conventions
- Ensures consistent snake_case naming for SVG files

## Test Configuration

The project uses Jest with React Testing Library for testing:

- **Test Environment:** jsdom (for DOM testing)
- **SVG Mocking:** Custom SVG mock components for reliable testing
- **Theme Mocking:** Docusaurus theme components are mocked for isolation
- **CSS Handling:** CSS modules are mocked using identity-obj-proxy

## Why These Tests Matter

These tests address the code review feedback to ensure that:
1. SVG files exist and won't cause runtime errors
2. Files are properly structured and accessible
3. The component maintains its functionality during future changes
4. New icon replacements are properly validated

This prevents potential issues where missing or malformed SVG files could break the homepage display.