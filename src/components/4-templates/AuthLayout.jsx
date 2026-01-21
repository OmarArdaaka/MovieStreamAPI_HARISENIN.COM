// import Form from "../3-organisms/Form";
// import FormHeader from "../2-molecules/FormHeader";
const ContainerForm = ({ children }) => {
  return (
    <div className="flex flex-col p-6 bg-[#181A1CD6] rounded-2xl w-[80%] shadow-xl max-w-md gap-4">
      {children}
    </div>
  );
};

export default ContainerForm;
