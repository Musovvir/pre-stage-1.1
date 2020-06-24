import { newE2EPage } from '@stencil/core/testing';

describe('s-staffing', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-staffing></s-staffing>');

    const element = await page.find('s-staffing');
    expect(element).toHaveClass('hydrated');
  });
});
