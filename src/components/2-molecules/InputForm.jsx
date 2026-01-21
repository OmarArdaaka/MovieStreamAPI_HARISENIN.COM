import InputBox from "../1-atoms/InputBox";
import InputPassword from "../1-atoms/InputPassword";
import LabelInput from "../1-atoms/LabelInput";
const InputForm = ({ label, type, placeholder, id, variant }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <LabelInput htmlFor={id}>{label}</LabelInput>
      {type === "password" ? (
        <InputPassword placeholder={placeholder} id={id} />
      ) : (
        <InputBox
          type={type}
          placeholder={placeholder}
          id={id}
          variant={variant}
        />
      )}
    </div>
  );
};

export default InputForm;
