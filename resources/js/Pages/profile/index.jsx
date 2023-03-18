import React from 'react';
import Layout from '../../components/layouts/Layout';
import Gambar1 from '../../../assets/img/logo with bg.webp';
import 'tw-elements';
// import GambarWilayah from '../../../assets/img/Gambar Wilayah.webp';
import GambarWilayah from '../../../assets/img/indonesia.webp';
import Struktural1 from '../../../assets/img/struktur 1.png';
import Struktural2 from '../../../assets/img/struktur 2.png';
import Struktural3 from '../../../assets/img/struktur 3.png';

const Profile = () => {
  return (
    <Layout>
      <div className="container px-5 mx-auto my-10 lg:px-20 md:px-10">
        <div className="grid grid-cols-1 gap-8 my-5 text-center lg:grid-cols-2">
          <div>
            <img src={Gambar1} alt="Gambar 1" className="w-full mx-auto md:w-1/2" />
          </div>
          <div className="flex flex-col space-y-5">
            <div className="lg:text-start">
              <h1 className="text-2xl font-bold text-primary">SATUKAN CITA KUATKAN KARSA</h1>
            </div>
            <div className="leading-relaxed text-justify text-primary/80 ">
              Organisasi ini bernama Dewan Eksekutif Mahasiswa Fakultas Syariah se-Indonesia yang
              kemudian disingkat dengan nama DEMFASNA. Demfasna didirikan di Yogyakarta dalam acara
              Konsolidasi Nasional pada tanggal 11 April 2021 yang bertepatan dengan 28 Sya'ban 1442
              H. Demfasna berpusat di DKI Jakarta.
            </div>
          </div>
        </div>
        {/* <div className="grid items-center grid-cols-1 gap-4 my-10 text-center lg:grid-cols-2">
          <div className="w-full">
            <div className="mx-auto w-[160px] h-[160px] rounded-full bg-secondary text-6xl flex justify-center items-center">
              <i className="items-center p-2 duration-500 transform border-2 rounded-full fa-sharp fa-solid fa-location-arrow text-primary hover:text-secondary hover:-translate-y-3 border-primary hover:bg-primary"></i>
            </div>
          </div>
          <div className="flex flex-col space-y-1 lg:text-start">
            <h1 className="text-2xl font-bold text-primary">VISI</h1>
            <p className="leading-relaxed text-justify text-primary/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex expedita
              reiciendis ratione consequuntur officia, odit vero.
            </p>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 gap-4 my-10 text-center lg:grid-cols-2">
          <div className="w-full">
            <div className="mx-auto w-[160px] h-[160px] rounded-full bg-secondary text-6xl flex justify-center items-center">
              <i className="p-2 duration-500 transform border-2 rounded-full fa-solid fa-check-to-slot text-primary hover:text-secondary hover:-translate-y-3 border-primary hover:bg-primary"></i>
            </div>
          </div>
          <div className="flex flex-col space-y-1 lg:text-start">
            <h1 className="text-2xl font-bold text-primary">MISI</h1>
            <p className="leading-relaxed text-justify text-primary/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex expedita
              reiciendis ratione consequuntur officia, odit vero.
            </p>
          </div>
        </div> */}
        <div className="py-10 my-10">
          <img src={GambarWilayah} alt="Gambar 1" className="w-full mx-auto" />
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="px-3 py-5 text-center duration-500 transform bg-secondary hover:text-secondary hover:-translate-y-3 hover:rounded-lg text-primary border-primary hover:bg-primary">
            <h1 className="text-2xl font-bold">WILAYAH 1</h1>
            <p>DKI Jakarta, Jawa Barat, Banten</p>
          </div>
          <div className="px-3 py-5 text-center duration-500 transform bg-secondary hover:text-secondary hover:-translate-y-3 hover:rounded-lg text-primary border-primary hover:bg-primary">
            <h1 className="text-2xl font-bold">WILAYAH 2</h1>
            <p>Jawa Tengah, Daerah Istimewa Yogyakarta</p>
          </div>
          <div className="px-3 py-5 text-center duration-500 transform bg-secondary hover:text-secondary hover:-translate-y-3 hover:rounded-lg text-primary border-primary hover:bg-primary">
            <h1 className="text-2xl font-bold">WILAYAH 3</h1>
            <p>Jawa Timur, Madura, NTB</p>
          </div>
          <div className="px-3 py-5 text-center duration-500 transform bg-secondary hover:text-secondary hover:-translate-y-3 hover:rounded-lg text-primary border-primary hover:bg-primary">
            <h1 className="text-2xl font-bold">WILAYAH 4</h1>
            <p>Aceh, Sumatera Utara, Palembang, Jambi</p>
          </div>
          <div className="px-3 py-5 text-center duration-500 transform bg-secondary hover:text-secondary hover:-translate-y-3 hover:rounded-lg text-primary border-primary hover:bg-primary">
            <h1 className="text-2xl font-bold">WILAYAH 5</h1>
            <p>Sumatera Barat, Lampung, Riau, Kep. Riau, Bengkulu</p>
          </div>
          <div className="px-3 py-5 text-center duration-500 transform bg-secondary hover:text-secondary hover:-translate-y-3 hover:rounded-lg text-primary border-primary hover:bg-primary">
            <h1 className="text-2xl font-bold">WILAYAH 6</h1>
            <p>Sulawesi, Gorontalo, Maluku, Papua</p>
          </div>
          <div className="px-3 py-5 text-center duration-500 transform bg-secondary hover:text-secondary hover:-translate-y-3 hover:rounded-lg text-primary border-primary hover:bg-primary">
            <h1 className="text-2xl font-bold">WILAYAH 7</h1>
            <p>Kalimantan</p>
          </div>
        </div>
        {/* carousel */}

        <div className="my-10 text-2xl font-bold text-center leading-1">
          <h1>Struktur Kepengurusan Demfasna</h1>
        </div>

        <div
          id="carouselExampleCaptions"
          className="relative my-10 carousel slide"
          data-bs-ride="carousel"
        >
          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              color="black"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
              color="black"
            />
            <button
              type="button"
              color="black"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="relative w-full overflow-hidden carousel-inner">
            <div className="relative float-left w-full carousel-item active">
              <img src={Struktural1} className="block w-full" alt="..." />
            </div>
            <div className="relative float-left w-full carousel-item">
              <img src={Struktural2} className="block w-full" alt="..." />
            </div>
            <div className="relative float-left w-full carousel-item">
              <img src={Struktural3} className="block w-full" alt="..." />
            </div>
          </div>
          <button
            className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
            color="black"
          >
            <span
              className="inline-block bg-no-repeat carousel-control-prev-icon"
              aria-hidden="true"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
            color="black"
          >
            <span
              className="inline-block bg-no-repeat carousel-control-next-icon"
              aria-hidden="true"
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
