import React from 'react';
import Layout from '../../components/layouts/Layout';
import Gambar1 from '../../../assets/img/logo with bg.webp';
// import GambarWilayah from '../../../assets/img/Gambar Wilayah.webp';
import GambarWilayah from '../../../assets/img/indonesia.webp';

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
              Organisasi ini bernama Dewan Eksekutif Mahasiswa Fakultas Syarih'ah Se-Indonesia yang
              kemudian di singkat dengan nama DEMFASNA. DEMFASNA didirikan di Yogyakarta dalam acara
              Konsolidasi Nasional pada tanggal 11 April 2021 yang bertepatan dengan 28 Sya'ban
              1442. DEmfasna Berpusat di Ibukota Negara Republik Indonesia
            </div>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 gap-4 my-10 text-center lg:grid-cols-2">
          <div className="w-full">
            <div className="mx-auto w-[160px] h-[160px] rounded-full bg-secondary text-6xl flex justify-center items-center">
              <i className="items-center fa-sharp fa-solid fa-location-arrow text-primary hover:text-secondary transform hover:-translate-y-3  border-2 p-2 rounded-full duration-500 text-primary border-primary hover:bg-primary p-12"></i>
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
              <i className="fa-solid fa-check-to-slot text-primary text-primary hover:text-secondary transform hover:-translate-y-3  border-2 p-2 rounded-full duration-500 text-primary border-primary hover:bg-primary p-12"></i>
            </div>
          </div>
          <div className="flex flex-col space-y-1 lg:text-start">
            <h1 className="text-2xl font-bold text-primary">MISI</h1>
            <p className="leading-relaxed text-justify text-primary/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex expedita
              reiciendis ratione consequuntur officia, odit vero.
            </p>
          </div>
        </div>
        <div className="my-10">
          <img src={GambarWilayah} alt="Gambar 1" className="w-full mx-auto" />
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="px-3 py-5 text-center bg-secondary hover:text-secondary transform hover:-translate-y-3 hover:rounded-lg duration-500 text-primary border-primary hover:bg-primary">
            <h1 className="text-2xl font-bold">WILAYAH 1</h1>
            <p>DKI Jakarta, Jawa Barat Banten</p>
          </div>
          <div className="px-3 py-5 text-center bg-secondary hover:text-secondary transform hover:-translate-y-3 hover:rounded-lg duration-500 text-primary border-primary hover:bg-primary">
            <h1 className="text-2xl font-bold">WILAYAH 2</h1>
            <p>Jawa Tengah, D.I.Y</p>
          </div>
          <div className="px-3 py-5 text-center bg-secondary hover:text-secondary transform hover:-translate-y-3 hover:rounded-lg duration-500 text-primary border-primary hover:bg-primary">
            <h1 className="text-2xl font-bold">WILAYAH 3</h1>
            <p>Jawa Timur, Madura, NTB</p>
          </div>
          <div className="px-3 py-5 text-center bg-secondary hover:text-secondary transform hover:-translate-y-3 hover:rounded-lg duration-500 text-primary border-primary hover:bg-primary">
            <h1 className="text-2xl font-bold">WILAYAH 4</h1>
            <p>Aceh, Sumatera Utara, Palembang, Jambi</p>
          </div>
          <div className="px-3 py-5 text-center bg-secondary hover:text-secondary transform hover:-translate-y-3 hover:rounded-lg duration-500 text-primary border-primary hover:bg-primary">
            <h1 className="text-2xl font-bold">WILAYAH 5</h1>
            <p>Sumatera Barat, Lampung, Riau, Kep. Riau, Bengkulu</p>
          </div>
          <div className="px-3 py-5 text-center bg-secondary hover:text-secondary transform hover:-translate-y-3 hover:rounded-lg duration-500 text-primary border-primary hover:bg-primary">
            <h1 className="text-2xl font-bold">WILAYAH 6</h1>
            <p>Sulawesi, Gorontalo, Maluku, Papua</p>
          </div>
          <div className="px-3 py-5 text-center bg-secondary hover:text-secondary transform hover:-translate-y-3 hover:rounded-lg duration-500 text-primary border-primary hover:bg-primary">
            <h1 className="text-2xl font-bold">WILAYAH 7</h1>
            <p>Kalimantan</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
