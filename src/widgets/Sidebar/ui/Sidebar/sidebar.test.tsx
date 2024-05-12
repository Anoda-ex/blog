import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import componentRender from 'shared/config/tests/componentRender';

describe('sidebar', () => {
  test('sidebar render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('sidebar collasped - uncollapsed', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
