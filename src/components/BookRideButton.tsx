
import React from 'react';
import { useToast } from '@/components/ui/use-toast';

interface BookRideButtonProps {
  isDisabled: boolean;
}

const BookRideButton: React.FC<BookRideButtonProps> = ({ isDisabled }) => {
  const { toast } = useToast();

  const handleBookRide = () => {
    toast({
      title: "Booking Successful!",
      description: "Your ride has been booked. Driver will arrive shortly.",
    });
  };

  return (
    <button
      className="rapido-btn w-full"
      disabled={isDisabled}
      onClick={handleBookRide}
    >
      Book Ride Now
    </button>
  );
};

export default BookRideButton;
