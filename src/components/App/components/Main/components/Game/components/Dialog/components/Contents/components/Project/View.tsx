import { useState } from 'react';
import { useIntersect } from 'fajarma-react-lib';

import LoaderIcon from '@/components/LoaderIcon';
import NoData from '@/components/NoData';
import useGetData from '@/hooks/useGetData';
import useProjectStore from '@/stores/useProjectStore';
import type { ProjectData } from '@/types';

import Card from './components/Card';
import { HIDE } from './View.constants';
import css from './View.module.scss';

const Project = () => {
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
    orderBy: ['order', 'asc'],
    onCompleted: (data) => {
      updateProject(data.filter((item) => !HIDE.includes(item.id)));
    },
    skip: !!project,
  });

  if (loading) return <LoaderIcon />;

  return (
    <div className={css.container}>
      <h2>Project</h2>
      <div className={css.wrapper}>
        {project ? (
          <>
            <div
              className={css.shadow}
              data-type="top"
              data-visible={!topIntersecting || undefined}
            />
            <div className={css.scroll}>
              <div ref={topRef} className={css.indicator} />
              <div className={css.list}>
                {project.map((item) => (
                  <Card key={item.title} data={item} isMobile={false} />
                ))}
              </div>
              {!!project.length && (
                <p className={css.end}>--- There will be more later ---</p>
              )}
              <div ref={botRef} className={css.indicator} />
            </div>

            <div
              className={css.shadow}
              data-type="bot"
              data-visible={!botIntersecting || undefined}
            />
          </>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default Project;
