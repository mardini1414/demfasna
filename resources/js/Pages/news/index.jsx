import React from 'react';
import Layout from '../../components/layouts/Layout';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import truncate from '../../helper/truncate';
import moment from 'moment';
import { Link } from '@inertiajs/inertia-react';
import Pagination from '../../components/Pagination';

const News = props => {
  const { data, prev_page_url, next_page_url, current_page, last_page } = props;
  return (
    <Layout>
      <section className="px-5 pt-10 md:px-10 lg:my-10 lg:px-20">
        <h2 className="mb-6 font-semibold text-primary">Semua berita</h2>
        {data &&
          data.map(news => {
            return (
              <Link
                as="a"
                href={'/news/' + news.slug}
                key={news.id}
                className="flex flex-col mb-12 cursor-pointer md:flex-row"
              >
                <div className="md:w-[400px]">
                  <img
                    src={'/storage/' + news.image}
                    alt={news.title}
                    width={400}
                    className="block object-cover rounded aspect-video"
                  />
                </div>
                <div className="md:min-w-[400px] mt-4 md:mt-0 md:ml-4">
                  <h3 className="font-bold text-2xl truncate text-primary max-w-[400px] lg:max-w-[500px] text-start">
                    {news.title}
                  </h3>
                  <div className="flex my-2 text-xs text-primary/80">
                    <div>
                      <i className="fa-solid fa-user"></i>
                      <span> Demfasna admin</span>
                    </div>
                    <div className="mx-4">{'|'}</div>
                    <div>
                      <i className="fa-solid fa-calendar-days"></i>
                      <span> {moment(news.created_at).format('DD dddd MM yyyy')}</span>
                    </div>
                  </div>
                  <ReactMarkdown
                    children={truncate(news.body, 200)}
                    rehypePlugins={[rehypeRaw]}
                    className="max-w-[400px] lg:max-w-[500px] text-primary/80 leading-relaxed text-start"
                  />
                </div>
              </Link>
            );
          })}
        <div className="flex justify-center mb-4 text-primary/80 lg:mb-0">
          <Pagination
            prevPage={prev_page_url}
            nextPage={next_page_url}
            currentPage={current_page}
            lastPage={last_page}
          />
        </div>
      </section>
    </Layout>
  );
};

export default News;
