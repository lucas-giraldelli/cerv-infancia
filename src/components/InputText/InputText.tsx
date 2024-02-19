import './InputText.styles.scss';

type InputTextProps = {
  htmlFor: string;
  label: string;
  placeholder?: string;
  type?: string;
  bgColor?: string;
};

function InputText(props: InputTextProps) {
  const { htmlFor, label, placeholder, type = 'text', bgColor } = props;

  return (
    <div className="inputText">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        name={htmlFor}
        placeholder={placeholder}
        style={{ backgroundColor: `${bgColor}` }}
      />
    </div>
  );
}

export default InputText;
