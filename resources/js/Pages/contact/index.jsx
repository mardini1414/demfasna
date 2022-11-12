import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import Layout from '../../components/layouts/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className='container mx-auto px-5 sm:px-10 my-10 lg:px-20 md:px-10'>
      <div className='my-5 text-center text-2xl text-primary font-bold'>HUBUNGI KAMI</div>
        <div className='flex grid lg:grid-cols-3 gap-8'>
          <div className='col-span-2'>
          <form>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInput123"
                          aria-describedby="emailHelp123"
                          placeholder="First name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput124"
                            aria-describedby="emailHelp124"
                            placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInput125"
                          placeholder="Subject"
                        />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                 "
                  id="exampleFormControlTextarea13"
                  rows={4}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  px-6
                  py-2.5
                  bg-secondary
                  text-primary
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-primary hover:shadow-lg hover:text-white
                  focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white
                  active:bg-primary active:shadow-lg active:text-white
                  transition
                  duration-150
                  ease-in-out"
                   >
                Kirim Pesan
              </button>
            </form>

          </div>
          <div className='space-y-3'>
            <div className='space-y-3'>
            <h1 className='text-2xl text-bold'>Hubungi Kami</h1>
            <p className='text-primary/80 text-xl text-semibold'>demfasna@gmail.com</p>
            <p className='text-primary/80 text-xl text-semibold'>Jakarta, Indonesia</p>
            </div>
            <div className='space-y-3'>
              <h1 className='text-primary/80 text-xl text-semibold'>Follow On:</h1>
              <div className='space-x-4'>
                <i className="fab fa-instagram border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-3xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 p-2  transform hover:-translate-y-3 rounded-full duration-500"></i>
                <Link href='https://www.instagram.com/demfasna/'>
                <i className="fa-brands fa-youtube text-3xl bg-white transform hover:-translate-y-3  border-2 p-2 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white"></i>
                </Link>
                </div>
            </div>            
          </div>
        </div>
        <div className='my-5 bg-blue-600'>
        <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe"
                width="100%"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=1200&height=400&hl=en&q=uin syarif &t=&z=14&ie=UTF8&iwloc=B&output=embed"
              />
              <a href="https://piratebay-proxys.com/">Piratebay</a>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}"
              }}
            />
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Contact;
