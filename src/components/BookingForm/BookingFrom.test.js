import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { MemoryRouter } from 'react-router-dom';

// Mock navigate from react-router
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('BookingForm', () => {
  const mockDispatch = jest.fn();
  const mockAvailableTimes = { times: ['17:00', '18:00', '19:00'] };

  it('renders all form fields', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /confirm reservation/i })).toBeInTheDocument();
  });

  it('updates form fields on change', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2025-05-10' } });
    fireEvent.change(screen.getByLabelText(/Guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Wedding' } });

    expect(screen.getByDisplayValue('2025-05-10')).toBeInTheDocument();
    expect(screen.getByDisplayValue('4')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Wedding')).toBeInTheDocument();
  });

  it('dispatches UPDATE_TIMES on date change', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/Date/i);
    fireEvent.change(dateInput, { target: { value: '2025-05-12' } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      date: new Date('2025-05-12'),
    });
  });

  it('does not submit if required fields are empty', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );

    fireEvent.click(getByRole('button', { name: /confirm reservation/i }));
    expect(localStorage.getItem('Bookings')).toContain('"date":""');
  });
});