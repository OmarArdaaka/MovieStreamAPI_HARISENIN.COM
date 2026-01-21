import AuthLayout from "../4-templates/AuthLayout";
import FormHeader from "../2-molecules/FormHeader";
import RegisterForm from "../3-organisms/RegisterForm";
const Register = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[url('/img/bg/bgRegister.png')] bg-center">
      <AuthLayout>
        <FormHeader title="Daftar" description="Selamat Datang!" />
        <RegisterForm />
      </AuthLayout>
    </div>
  );
};

export default Register;
