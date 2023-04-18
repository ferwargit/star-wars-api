// import React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom';
import App  from '../App';

describe('Star wars APP', () => {
  it('Should show a list of characters including Luke Skywalker', () => {
    render(<App />);
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  })
});