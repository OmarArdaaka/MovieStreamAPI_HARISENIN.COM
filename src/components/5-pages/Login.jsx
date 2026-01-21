import AuthLayout from "../4-templates/AuthLayout";
import FormHeader from "../2-molecules/FormHeader";
import Form from "../3-organisms/LoginForm";
const Login = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[url('/img/bg/bgLogin.png')] bg-center">
      <AuthLayout>
        <FormHeader title="Masuk" description="Selamat Datang Kembali!" />
        <Form />
      </AuthLayout>
    </div>
  );
};

export default Login;
