import { Link } from "react-router-dom";
import Button from "../1-atoms/Button";
import InputBox from "../1-atoms/InputBox";
import LabelInput from "../1-atoms/LabelInput";
import SectionContainer from "../4-templates/SectionContainer";
import { FaPen } from "react-icons/fa";
import { MdOutlineUploadFile } from "react-icons/md";

const MyProfile = () => {
  return (
    <main className="flex flex-col flex-wrap w-full bg-[#181A1C] gap-6 min-h-screen pb-25">
      <SectionContainer sectionTitle="Profil Saya">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="membership-container flex flex-col order-1 lg:order-2 gap-5 bg-[#3D4142] text-white text-[14px] lg:text-[18px] w-fit h-fit p-4 rounded-[20px] basis-[45%]">
            <div className="membership-info flex flex-row gap-4 justify-center">
              <img
                src="../img/illustration/alert.png"
                alt="icon-alert"
                className="w-[78px] h-[78px]"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[16px] lg:text-[20px] hidden lg:flex">
                  Saat ini anda belum berlangganan!
                </h3>
                <h3 className="font-bold text-[16px] lg:text-[20px] flex lg:hidden">
                  Belum berlangganan!
                </h3>
                <p>
                  Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                  Kamu!
                </p>
              </div>
            </div>
            <div className="membership-button flex flex-row">
              <div className="flex basis-[40%]"></div>
              <Button
                type="button"
                variant="secondary"
                className="flex basis-[60%]"
              >
                Mulai Berlangganan
              </Button>
            </div>
          </div>
          <div className="form-container flex flex-col order-2 lg:order-1 gap-10 basis-[55%]">
            <form action="" className="flex flex-col gap-8">
              <div className="picture-container flex flex-row justify-start items-center gap-4">
                <img
                  src="/img/profile/profile1.png"
                  alt="profile-img"
                  className="w-[80px] h-[80px]"
                />
                <div className="picture-upload flex flex-col gap-3">
                  <Button
                    type="button"
                    variant="outlined"
                    className="border-2 border-[#3254FF] text-[14px] font-bold text-[#3254FF]"
                  >
                    Ubah Foto
                  </Button>
                  <LabelInput
                    textColor="gray"
                    className="flex flex-row content-center justify-center gap-1"
                  >
                    <MdOutlineUploadFile />
                    <span>Maksimal 2 MB</span>
                  </LabelInput>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-white w-full">
                <div className="flex flex-row w-full justify-between items-center bg-[#22282A] border-1 border-[#E7E3FC3B] rounded-[8px] px-[14px] py-[12px] gap-6">
                  <div className="flex flex-col w-full gap-1">
                    <LabelInput htmlFor="name" textColor="gray">
                      Nama Pengguna
                    </LabelInput>
                    <InputBox
                      id="name"
                      type="text"
                      placeholder="Nama Pengguna"
                    />
                  </div>
                  <FaPen />
                </div>
                <div className="flex flex-row w-full justify-between items-center bg-[#22282A] border-1 border-[#E7E3FC3B] rounded-[8px] px-[14px] py-[12px] gap-6">
                  <div className="flex flex-col w-full gap-1">
                    <LabelInput htmlFor="email" textColor="gray">
                      Email
                    </LabelInput>
                    <InputBox id="email" type="email" placeholder="Email" />
                  </div>
                  <FaPen />
                </div>
                <div className="flex flex-row w-full justify-between items-center bg-[#22282A] border-1 border-[#E7E3FC3B] rounded-[8px] px-[14px] py-[12px] gap-6">
                  <div className="flex flex-col w-full gap-1">
                    <LabelInput htmlFor="name" textColor="gray">
                      Password
                    </LabelInput>
                    <InputBox
                      id="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <FaPen />
                </div>
              </div>
            </form>

            <div className="flex flex-row justify-center gap-4">
              <Button
                type="submit"
                variant="primary"
                className="text-[#ffffff]"
              >
                Simpan Perubahan
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer sectionTitle="Daftar Film Saya"></SectionContainer>

      <SectionContainer sectionTitle="Administrator">
        <Button variant="outlined">
          <Link to="/add-movie">Tambah Data Film</Link>
        </Button>
      </SectionContainer>
    </main>
  );
};

export default MyProfile;
