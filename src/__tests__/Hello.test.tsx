/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hello } from '../components/Hello';

describe('Hello component', () => {
  it('renders the correct greeting', () => {
    render(<Hello name="Mark" />);
    expect(screen.getByText('Hello, Mark! Age, 42. From the land of corrupt politicians, Philippines! and I thank you!')).toBeInTheDocument();
  });
});
