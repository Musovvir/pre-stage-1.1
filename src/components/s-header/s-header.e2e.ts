import { newE2EPage } from '@stencil/core/testing';

describe('s-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-header></s-header>');

    const element = await page.find('s-header');
    expect(element).toHaveClass('hydrated');
  });
});
