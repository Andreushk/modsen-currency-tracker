import { render } from '@testing-library/react';

import { PortalToBody } from '@/components';

describe('PortalToBody component', () => {
  test('Correctly rendering children at the body', () => {
    const testContent = <div data-testid="test-children">This is test content</div>;
    render(<PortalToBody>{testContent}</PortalToBody>);

    const portalContent = document.body.querySelector('[data-testid="test-children"]');
    expect(portalContent).toBeInTheDocument();
    expect(portalContent?.textContent).toBe('This is test content');
  });
});
