import FileIcon from './FileIcon';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

const FileListItem = ({ filesD }) =>
  filesD.map((file) => (
    <div key={file.id} className="grid grid-cols-4 p-2 border-b">
      <div className="flex">
        <FileIcon type={file.type} />
        <FileName name={file.name} />
      </div>
      <CommitMessage commit={file.latestCommit.message} />
      <Time time={file.update_at} />
    </div>
  ));

export default FileListItem;
