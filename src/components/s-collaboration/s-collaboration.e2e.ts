import { newE2EPage } from '@stencil/core/testing';

describe('s-collaboration', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-collaboration></s-collaboration>');

    const element = await page.find('s-collaboration');
    expect(element).toHaveClass('hydrated');
  });
});
