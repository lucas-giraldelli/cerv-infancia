import './InputSelect.styles.scss';

type InputSelectProps = {
  htmlFor: string;
  label: string;
  placeholder: string;
  options: {
    value: string;
    name: string;
  }[];
  bgColor?: string;
};

function InputSelect(props: InputSelectProps) {
  const { htmlFor, label, placeholder, options = [] } = props;

  return (
    <div className="inputSelect">
      <label htmlFor={htmlFor}>{label}</label>
      <select name={htmlFor} defaultValue="">
        <option value="" disabled>
          {placeholder}
        </option>
        {options &&
          options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default InputSelect;
