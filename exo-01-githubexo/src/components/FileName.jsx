import FileIcon from './FileIcon';

const FileName = ({ type, name }) => (
  <div>
    <FileIcon type={type} />
    <span className="text-blue-500 font-medium pl-1">{name}</span>
  </div>
);

export default FileName;
