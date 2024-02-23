import './InputText.styles.scss';

type InputTextProps = {
  htmlFor: string;
  label: string;
  placeholder?: string;
  type?: string;
  bgColor?: 'orangebg' | 'bluebg';
};

function InputText(props: InputTextProps) {
  const { htmlFor, label, placeholder, type = 'text', bgColor } = props;

  return (
    <div className={`input-text ${bgColor}`}>
      <label className="input-text__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="input-text__input"
        type={type}
        name={htmlFor}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputText;
