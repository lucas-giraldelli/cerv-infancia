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
    <div className={`inputText ${bgColor}`}>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} name={htmlFor} placeholder={placeholder} />
    </div>
  );
}

export default InputText;
