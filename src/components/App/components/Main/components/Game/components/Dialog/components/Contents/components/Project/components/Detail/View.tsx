import { Fragment } from 'react';
import { FaCube, FaGithub, FaLink } from 'react-icons/fa6';

import Carousel from './components/Carousel';
import css from './View.module.scss';
import type { DetailProps } from './View.types';

const Detail = ({ data }: DetailProps) => {
  const { desc, images, repo, stacks, title, url } = data;

  return (
    <div className={css.container}>
      <div className={css.inner}>
        <Carousel images={images} title={title} />
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
        <button type="button" className={css.liveBtn}>
          <div className={css.text}>
            <FaLink />
            <b>{url}</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Detail;
