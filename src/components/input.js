import './css/input.css'

const Input = ({label, ...rest}) => {
  return (
    <div className='field'>
      <p><label >{label}</label></p>
      <input
        {...rest}
      />
    </div>
  );
};

export default Input
