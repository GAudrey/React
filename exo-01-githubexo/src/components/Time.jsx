import { formatDistance } from 'date-fns';

const Time = ({ date }) => (
  <p className="text-right text-gray-500">
    {formatDistance(date, new Date(), { addSuffix: true })}
  </p>
);

export default Time;
