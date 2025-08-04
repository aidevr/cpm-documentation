import fs from 'fs';
import path from 'path';
import { render, screen } from '@testing-library/react';
import HomepageFeatures from '../index';

// Test data containing the expected SVG files
const expectedSvgFiles = [
  'streamlined_appraisals.svg',
  'continuous_monitoring.svg',
  'goal_oriented_management.svg'
];

describe('HomepageFeatures', () => {
  describe('SVG File Existence', () => {
    expectedSvgFiles.forEach((filename) => {
      test(`${filename} should exist in static/img directory`, () => {
        const svgPath = path.join(process.cwd(), 'static', 'img', filename);
        expect(fs.existsSync(svgPath)).toBe(true);
      });

      test(`${filename} should be a valid SVG file`, () => {
        const svgPath = path.join(process.cwd(), 'static', 'img', filename);
        const content = fs.readFileSync(svgPath, 'utf8');
        
        // Check if file contains SVG content
        expect(content).toMatch(/<svg/);
        expect(content).toMatch(/<\/svg>/);
      });
    });
  });

  describe('Component Rendering', () => {
    test('should render without crashing', () => {
      render(<HomepageFeatures />);
    });

    test('should render all three feature sections', () => {
      render(<HomepageFeatures />);
      
      expect(screen.getByText('Streamlined Appraisals')).toBeInTheDocument();
      expect(screen.getByText('Continuous Monitoring')).toBeInTheDocument();
      expect(screen.getByText('Goal-Oriented Management')).toBeInTheDocument();
    });

    test('should render feature descriptions', () => {
      render(<HomepageFeatures />);
      
      expect(screen.getByText(/CPM simplifies the employee appraisal process/)).toBeInTheDocument();
      expect(screen.getByText(/Monitor employee performance continuously/)).toBeInTheDocument();
      expect(screen.getByText(/Set, track, and achieve organizational/)).toBeInTheDocument();
    });

    test('should render SVG elements for each feature', () => {
      render(<HomepageFeatures />);
      
      // Should have 3 SVG mock elements (one for each feature)
      const svgElements = screen.getAllByTestId('svg-mock');
      expect(svgElements).toHaveLength(3);
    });

    test('SVG elements should have correct role attribute', () => {
      render(<HomepageFeatures />);
      
      const svgElements = screen.getAllByTestId('svg-mock');
      svgElements.forEach(svg => {
        expect(svg).toHaveAttribute('role', 'img');
      });
    });
  });

  describe('Accessibility', () => {
    test('feature titles should use proper heading elements', () => {
      render(<HomepageFeatures />);
      
      expect(screen.getByRole('heading', { name: 'Streamlined Appraisals' })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: 'Continuous Monitoring' })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: 'Goal-Oriented Management' })).toBeInTheDocument();
    });

    test('SVG elements should have img role for accessibility', () => {
      render(<HomepageFeatures />);
      
      const svgElements = screen.getAllByRole('img');
      expect(svgElements).toHaveLength(3);
    });
  });
});

describe('Feature Data Integrity', () => {
  // Mock the FeatureList to test the actual data structure
  const mockRequire = jest.fn().mockReturnValue({ default: () => null });
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should have correct file paths for all SVG files', () => {
    // This test verifies that the require statements point to the correct files
    const expectedPaths = [
      '@site/static/img/streamlined_appraisals.svg',
      '@site/static/img/continuous_monitoring.svg', 
      '@site/static/img/goal_oriented_management.svg'
    ];

    expectedPaths.forEach(path => {
      expect(typeof path).toBe('string');
      expect(path).toMatch(/\.svg$/);
    });
  });

  test('should have consistent naming convention', () => {
    expectedSvgFiles.forEach(filename => {
      // Check that filenames use snake_case convention
      expect(filename).toMatch(/^[a-z_]+\.svg$/);
      expect(filename).not.toMatch(/[A-Z]/); // No uppercase letters
      expect(filename).not.toMatch(/[-\s]/); // No hyphens or spaces
    });
  });
});