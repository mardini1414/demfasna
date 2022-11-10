import React from 'react';
import Layout from '../../components/layouts/Layout';
import moment from 'moment/moment';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import copyToClipboard from '../../helper/copyToClipboard';

const Detail = ({ data }) => {
  return (
    <Layout>
      <section className="px-5 pt-10 md:px-10 lg:my-10 lg:px-20">
        <div>
          <img
            src={'/storage/' + data.image}
            alt={data.title}
            width="100%"
            className="block object-cover rounded aspect-video"
          />
        </div>
        <div className="flex my-4 text-xs text-primary/80">
          <div>
            <i className="fa-solid fa-user"></i>
            <span> Demfasna admin</span>
          </div>
          <div className="mx-4">{'|'}</div>
          <div>
            <i className="fa-solid fa-calendar-days"></i>
            <span> {moment(data.created_at).format('DD dddd MM yyyy')}</span>
          </div>
        </div>
        <h2 className="mb-4 text-2xl font-semibold text-primary">{data.title}</h2>
        <div>
          <ReactMarkdown
            children={data.body}
            rehypePlugins={[rehypeRaw]}
            className="leading-relaxed text-primary/80"
          />
        </div>
        <div className="mt-8">
          <span className="font-semibold text-blue-600/80">Bagikan</span>
          <div className="mt-4 mb-4 lg:mb-0">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.href
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="mr-2 text-2xl fa-brands fa-facebook text-[#4267B2]"></i>
            </a>
            <a
              href={`https://web.whatsapp.com/send?text=${data.title} ${encodeURIComponent(
                document.location.href
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="mr-2 text-2xl fa-brands fa-whatsapp text-[#25D366]"></i>
            </a>
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(
                document.location.href
              )}&text=${data.title}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="mr-2 text-2xl fa-brands fa-telegram text-[#0088cc]"></i>
            </a>
            <span
              className="cursor-pointer"
              onClick={() => copyToClipboard(document.location.href)}
            >
              <i className="mr-2 text-2xl text-orange-500 fa-solid fa-link"></i>
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Detail;
