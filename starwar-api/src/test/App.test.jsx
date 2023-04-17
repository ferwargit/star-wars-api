import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App  from '../App';

describe('Star wars APP', () => {
  test('Should show a list of characters including Luke Skywalker', () => {
    render(<App />);
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  })
});
