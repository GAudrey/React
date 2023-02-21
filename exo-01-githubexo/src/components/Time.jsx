import { formatDistance, subDays } from 'date-fns';

const Time = ({ time }) => (
  <p className="text-right text-gray-500">
    {formatDistance(subDays(new Date(time), 3), new Date(), { addSuffix: true })}
  </p>
);

export default Time;
