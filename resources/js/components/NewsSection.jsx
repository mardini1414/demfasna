import React from 'react';
import toLocalDate from '../helper/toLocalDate';
import truncate from '../helper/truncate';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Link } from '@inertiajs/inertia-react';

const NewsSection = ({ data }) => {
  return (
    <div className="px-5 pt-10 md:px-10 lg:my-10 lg:px-20">
      <h2 className="my-10 text-2xl font-semibold tracking-wider text-center text-primary">
        Berita
      </h2>
      {data && (
        <div className="grid gap-4 lg:grid-cols-3">
          <Link as="div" href={'/news/' + data[0].slug} className="cursor-pointer lg:col-span-2">
            <img
              src={'/storage/' + data[0]?.image}
              alt={data[0]?.title}
              className="w-full rounded"
            />
            <h2 className="mt-4 mb-2 text-xl font-semibold text-primary">
              {truncate(data[0]?.title, 100)}
            </h2>
            <ReactMarkdown
              children={truncate(data[0]?.body, 200)}
              rehypePlugins={[rehypeRaw]}
              className="leading-relaxed text-primary/80"
            />
          </Link>
          <div>
            {data.map((news, index) => {
              if (index > 0) {
                return (
                  <Link
                    as="div"
                    href={'/news/' + news.slug}
                    className="grid w-full gap-2 mb-4 cursor-pointer lg:grid-cols-3"
                    key={news.id}
                  >
                    <img
                      src={'/storage/' + news.image}
                      alt={news.title}
                      className="object-cover w-full rounded aspect-video lg:aspect-square"
                    />
                    <div className="lg:col-span-2">
                      <span className="text-primary/80">{toLocalDate(news.created_at)}</span>
                      <h2 className="text-lg font-semibold text-primary lg:max-w-[10rem]">
                        {truncate(news.title, 30)}
                      </h2>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsSection;
