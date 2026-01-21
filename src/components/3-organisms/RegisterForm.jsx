import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import InputForm from "../2-molecules/InputForm";
import Button from "../1-atoms/Button";

const RegisterForm = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center">
      <InputForm
        label="Username"
        type="text"
        id="username"
        placeholder="Masukkan username..."
        variant="secondary"
      />
      <InputForm
        label="Kata Sandi"
        type="password"
        id="password"
        placeholder="Masukkan kata sandi..."
      />
      <InputForm
        label="Konfirmasi Kata Sandi"
        type="password"
        id="password-confirm"
        placeholder="Masukkan kata sandi..."
      />
      <div className="flex justify-between items-center w-full">
        <span className="flex gap-1 text-[#9D9EA1] text-[10px] lg:text-[16px]">
          {" "}
          Sudah Punya Akun?
          <Link
            to={"/login"}
            className="text-[10px] lg:text-[16px] text-[#ffffff] hover:text-red-600"
          >
            Masuk
          </Link>
        </span>
      </div>
      <div className="flex flex-col gap-4 w-full items-center">
        <Button type="submit" variant="tertiary">
          Daftar
        </Button>
        <p className="text-[#9D9EA1] text-[10px] lg:text-[16px]">Atau</p>
        <Button type="submit" variant="outlined" iconLeft={<FcGoogle />}>
          Daftar dengan Google
        </Button>
      </div>
    </div>
  );
};

export default RegisterForm;
