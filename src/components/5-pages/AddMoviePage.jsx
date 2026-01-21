import InputForm from "../2-molecules/InputForm";
import SectionContainer from "../4-templates/SectionContainer";

const AddMoviePage = () => {
  return (
    <main className="flex flex-col flex-wrap w-full bg-[#181A1C] gap-6 min-h-screen pb-25">
      <SectionContainer sectionTitle="Tambah Data Film">
        <form action="" className="flex flex-col gap-4">
          <InputForm
            label="Judul Film"
            type="text"
            placeholder="Masukkan judul film"
            id="movie-title"
          ></InputForm>
          <InputForm
            label="Sinopsis"
            type="text"
            placeholder="Masukkan sinopsis film"
            id="movie-sinopsis"
          ></InputForm>
          <InputForm label="Poster" type="file" id="movie-poster"></InputForm>
        </form>
      </SectionContainer>
    </main>
  );
};

export default AddMoviePage;
