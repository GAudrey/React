import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

const FileListItem = ({ type, name, comment, date }) => (
  <div className="grid grid-cols-4 p-2 border-b">
    <FileName type={type} name={name} />
    <CommitMessage comment={comment} />
    <Time date={date} />
  </div>
);

export default FileListItem;
