import SelectBox from './SelectBox';

const Toolbar = () => (
  <div className="flex items-center justify-around w-full">
    <button type="button" className="btn primary">
      Zoomer
    </button>
    <button type="button" className="btn cancel">
      Dézoomer
    </button>
    <SelectBox />
  </div>
);

export default Toolbar;
