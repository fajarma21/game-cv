import { Fragment } from 'react';
import { FaCube, FaGithub, FaLink, FaLinkSlash } from 'react-icons/fa6';

import Carousel from './components/Carousel';
import css from './View.module.scss';
import type { DetailProps } from './View.types';

const Detail = ({ data }: DetailProps) => {
  const {
    desc,
    desktopOnly,
    images,
    repo,
    stacks,
    title,
    url,
    urlText,
    videos,
  } = data;

  const urlAvailable = !desktopOnly && url;

  return (
    <div className={css.container}>
      <div className={css.inner}>
        <Carousel images={images} title={title} videos={videos} />
        <div className={css.content}>
          <h3 className={css.title}>{title}</h3>
          <p className={css.description}>{desc}</p>
          <div className={css.row}>
            <div className={css.icon}>
              <FaCube title="Stacks" />
            </div>
            <div className={css.stacks}>
              {stacks.map((item, index) => (
                <Fragment key={`stack-${index}`}>
                  <a href={item.url} target="_blank">
                    {item.name}
                  </a>
                  {index < stacks.length - 1 && <>, </>}
                </Fragment>
              ))}
            </div>
          </div>
          {repo.length > 0 && (
            <div className={css.row}>
              <div className={css.icon}>
                <FaGithub title="Github repository" />
              </div>
              <div className={css.repo}>
                {repo.map((item, index) => (
                  <a
                    key={`stack-${index}`}
                    href={item}
                    target="_blank"
                    className={css.list}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={css.btnWrapper}>
        <a
          className={css.liveBtn}
          href={urlAvailable || '#!'}
          aria-disabled={!urlAvailable}
          target={urlAvailable ? '_blank' : ''}
        >
          <div className={css.text}>
            {urlAvailable ? <FaLink /> : <FaLinkSlash />}
            <b>{desktopOnly ? 'Available on desktop only' : url || urlText}</b>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Detail;
