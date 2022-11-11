import React from 'react';
import Layout from '../../components/layouts/Layout';
import Gambar1 from '../../../assets/img/logo with bg.webp';
// import GambarWilayah from '../../../assets/img/Gambar Wilayah.webp';
import GambarWilayah from '../../../assets/img/indonesia.webp';


const Profile = () => {
  return (
    <Layout>
      <div className='container mx-auto lg:px-20 my-10 px-5 md:px-10'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 text-center my-5'>
          <div>
          <img src={Gambar1} alt="Gambar 1" className='w-2/3 mx-auto' />
          </div>
          <div className='flex flex-col space-y-5'>
            <div className='lg:text-start'>
              <h1 className='text-primary text-2xl font-bold'>SATUKAN CITA KUATKAN KARSA</h1>
            </div>
            <div className='text-primary/80 leading-relaxed text-justify '>
            Organisasi ini bernama Dewan Eksekutif Mahasiswa Fakultas Syarih'ah Se-Indonesia yang kemudian di singkat dengan nama DEMFASNA. DEMFASNA didirikan di Yogyakarta dalam acara Konsolidasi Nasional pada tanggal 11 April 2021 yang bertepatan dengan 28 Sya'ban 1442. DEmfasna Berpusat di Ibukota Negara Republik Indonesia
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 text-center my-10'>
          <div className='text-6xl py-5 lg:w-9/12'>
          <i className="fa-sharp fa-solid fa-location-arrow items-center text-primary hover:text-primary/80"></i>
          </div>
          <div className='flex flex-col space-y-1 lg:text-start'>
            <h1 className='text-primary text-2xl  font-bold'>VISI</h1>
            <p className='leading-relaxed text-justify  text-primary/80'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex expedita reiciendis ratione consequuntur officia, odit vero.</p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 text-center my-10'>
          <div className='text-6xl py-5 lg:w-9/12'>
          <i class="fa-solid fa-check-to-slot text-primary hover:text-primary/80"></i>
          </div>
          <div className='flex flex-col space-y-1 lg:text-start'>
            <h1 className='text-primary text-2xl font-bold'>MISI</h1>
            <p className='leading-relaxed text-justify  text-primary/80'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex expedita reiciendis ratione consequuntur officia, odit vero.</p>
          </div>
        </div>
        <div className='my-10'>
        <img src={GambarWilayah} alt="Gambar 1" className='mx-auto w-full' />
        </div>
        <div className='flex grid grid-cols-1 gap-8  lg:grid-cols-3'>
          <div className='py-5 px-3 text-center bg-primary/30  rounded-lg'>
            <h1 className='font-bold text-2xl'>WILAYAH 1</h1>
            <p>DKI Jakarta, Jawa Barat Banten</p>
          </div>
          <div className='py-5 px-3 text-center bg-primary/30 rounded-lg'>
            <h1 className='text-2xl font-bold'>WILAYAH 2</h1>
            <p>Jawa Tengah, D.I.Y</p>
          </div>
          <div className='py-5 px-3 text-center bg-primary/30 rounded-lg'>
            <h1 className='font-bold text-2xl'>WILAYAH 3</h1>
            <p>Jawa Timur, Madura, NTB</p>
          </div>
          <div className='py-5 px-3 text-center bg-primary/30 rounded-lg'>
            <h1 className='font-bold text-2xl'>WILAYAH 4</h1>
            <p>Aceh, Sumatera Utara, Palembang, Jambi</p>
          </div> 
          <div className='py-5 px-3 text-center bg-primary/30 rounded-lg'>
            <h1 className='font-bold text-2xl'>WILAYAH 5</h1>
            <p>Sumatera Barat, Lampung, Riau, Kep. Riau, Bengkulu</p>
          </div> 
          <div className='py-5 px-3 text-center bg-primary/30 rounded-lg'>
            <h1 className='font-bold text-2xl'>WILAYAH 6</h1>
            <p>Sulawesi, Gorontalo, Maluku, Papua</p>
          </div> 
          <div className='py-5 px-3 text-center bg-primary/30 rounded-lg'>
            <h1 className='font-bold text-2xl'>WILAYAH 7</h1>
            <p>Kalimantan</p>
          </div> 
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
