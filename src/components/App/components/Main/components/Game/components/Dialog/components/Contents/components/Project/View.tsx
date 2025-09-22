import { useEffect, useState, type CSSProperties } from 'react';
import { useIntersect } from 'fajarma-react-lib';

import useGetData from '@/hooks/useGetData';
import type { ProjectData } from '@/types';
import LoaderIcon from '@/components/LoaderIcon';
import NoData from '@/components/NoData';

import Detail from './components/Detail';
import { HIDE } from './View.constants';
import css from './View.module.scss';
import useProjectStore from '@/stores/useProjectStore';

const Project = () => {
  const [activeItem, setActiveItem] = useState<ProjectData>();
  const [topIntersecting, setTopIntersecting] = useState(false);
  const [botIntersecting, setBotIntersecting] = useState(false);

  const project = useProjectStore((state) => state.project);
  const updateProject = useProjectStore((state) => state.updateProject);

  const { ref: topRef } = useIntersect<HTMLDivElement>((value) =>
    setTopIntersecting(value)
  );
  const { ref: botRef } = useIntersect<HTMLDivElement>((value) =>
    setBotIntersecting(value)
  );

  const { loading } = useGetData<ProjectData>({
    collectionName: 'project',
    onCompleted: (data) => {
      updateProject(data.filter((item) => !HIDE.includes(item.id)));
    },
    skip: !!project,
  });

  useEffect(() => {
    if (project) setActiveItem(project[0]);
  }, [project]);

  if (loading) return <LoaderIcon />;

  return (
    <div>
      <h2>Project</h2>
      {project ? (
        <div
          className={css.container}
          style={{ '--ColH': '440px' } as CSSProperties}
        >
          <div className={css.left}>
            <div className={css.thumbnailContainer}>
              {!topIntersecting && (
                <div className={css.shadow} data-type="top" />
              )}
              <div ref={topRef} />
              {project.map((item, index) => {
                const { id, title, thumbnail } = item;
                return (
                  <button
                    key={id}
                    type="button"
                    className={css.thumbnail}
                    style={
                      { '--delay': `${(index + 1) * 100}ms` } as CSSProperties
                    }
                    data-active={
                      (activeItem && activeItem.id === id) || undefined
                    }
                    onClick={() => setActiveItem(item)}
                  >
                    <div className={css.imgContainer}>
                      <img src={thumbnail} alt={title} />
                    </div>

                    <div className={css.titleContainer}>
                      <h4>{title}</h4>
                    </div>
                  </button>
                );
              })}
              {!botIntersecting && (
                <div className={css.shadow} data-type="bot" />
              )}
              <div ref={botRef} />
            </div>
          </div>
          {activeItem && <Detail key={activeItem.id} data={activeItem} />}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Project;
