import files from '../datas/filesData';
import FileListItem from './FileListItem';

const FileList = () =>
  files.map((file) => (
    <FileListItem
      key={file.id}
      type={file.type}
      name={file.name}
      comment={file.latestCommit.message}
      date={file.update_at}
    />
  ));

export default FileList;
