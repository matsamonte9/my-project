import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hello } from '../components/Hello';

describe('Broken test', () => {
  it('should fail intentionally', () => {
    render(<Hello name="Test" />);
    expect(screen.getByText('Hello, Wrong!')).toBeInTheDocument();
  });
});
