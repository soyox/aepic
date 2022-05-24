import { getPictures, Picture } from '@/api';
import Button from '@/libs/Button';
import Infinite from '@/libs/Infinite';
import Waterfall from '@/libs/Waterfall';
import { randomRGB } from '@/utils/color';
import { isMobileStatic, isMobileTerminal } from '@/utils/flexiable';
import classNames from 'classnames';
import React, { HTMLAttributes, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';

type Props = {};

export default function List({}: Props) {
  const [picList, setPicList] = useState<{
    page: number;
    size: number;
    list: Picture[];
    finish: boolean;
  }>({
    page: 1,
    size: 20,
    list: [],
    finish: false,
  });

  const isMT = isMobileStatic();
  function fetchPicList() {
    if (picList.finish) return;
    getPictures(picList.page, picList.size)
      .then((res) => {
        setPicList({
          ...picList,
          finish: res.total <= res.size * res.page,
          page: picList.page + 1,
          list: res.data,
        });
      })
      .catch((error: Error) => console.log(error));
  }
  useEffect(() => {
    fetchPicList();
  }, []);

  const handleGetMore = () => {
    if (picList.page <= 1) return;
    fetchPicList();
  };
  return (
    <div className={isMT ? '' : 'px-2'}>
      <Infinite onFinish={handleGetMore}>
        <Waterfall
          nodeKey="id"
          column={isMT ? 2 : 5}
          data={picList.list}
          columnSpacing={isMT ? 5 : 20}
          rendeChild={(item, index, columnWidth) => {
            return (
              <Item
                picture={item}
                columnWidth={columnWidth || 0}
                key={item.id}
                className="p-1"
              ></Item>
            );
          }}
        />
      </Infinite>
    </div>

    // <ul
    //   className="bg-white dark:bg-zinc-800 flex flex-wrap text-zinc-900 dark:text-zinc-300 duration-300"
    //   onClick={() => {}}
    // >
    //   {picList.list.map((picture) => (
    //     <Item picture={picture} key={picture.id} className="p-1"></Item>
    //   ))}
    // </ul>
  );
}

type ItemProps = {
  picture: Picture;
  className?: string;
  columnWidth: number;
};
const Item = ({ picture, className, columnWidth, ...restProps }: ItemProps) => {
  return (
    <div
      {...restProps}
      className={classNames(
        'bg-white dark:bg-zinc-900 xl:dark:bg-zinc-800 rounded duration-300 overflow-hidden',
        className,
      )}
    >
      <div
        className="relative bg-white w-full rounded cursor-zoom-in group"
        style={{
          height: columnWidth * (picture.photoHeight / picture.photoWidth),
          backgroundColor: randomRGB(),
        }}
      >
        <img
          src={picture.photo}
          className="w-full rounded h-full bg-transparent"
          alt={picture.title}
        />
        {/* 遮罩层 */}
        <div className="opacity-0 group-hover:opacity-100 w-full h-full bg-zinc-900/50 absolute top-0 left-0 rounded duration-300 hidden xl:block">
          <Button type="main" className="absolute top-1.5 left-1.5 ">
            分享
          </Button>
          {/* 喜欢 */}
          <Button
            icon="love"
            type="info"
            className="absolute top-1.5 right-1.5 fill-zinc-900 dark:fill-zinc-200 bg-zinc-100/70 dark:bg-zinc-900/70"
            iconClass="w-2 h-2"
          ></Button>
          {/* 下载 */}
          <Button
            icon="download"
            type="info"
            className="absolute bottom-1.5 left-1.5 fill-zinc-900 dark:fill-zinc-200 bg-zinc-100/70 dark:bg-zinc-900/70"
            iconClass="w-2 h-2"
          ></Button>
          {/* 全屏 */}
          <Button
            icon="fullscreen"
            type="info"
            className="absolute bottom-1.5 right-1.5 fill-zinc-900 dark:fill-zinc-200 bg-zinc-100/70 dark:bg-zinc-900/70"
            iconClass="w-2.5 h-2.5"
          ></Button>
        </div>
      </div>
      {/* 内容区域 */}
      <div className=" px-1">
        {/* 标题 */}
        <p className="text-sm mt-1 font-bold text-zinc-900 dark:text-zinc-300 duration-300 overflow-hidden text-ellipsis">
          {picture.title}
        </p>
        {/* 作者 */}
        <div className="flex mt-1 items-center">
          <img
            src={picture.avatar}
            alt="头像"
            className="h-3 w-3 rounded-full"
          />
          <span className="text-zinc-500 font-bold text-xs ml-1">
            {picture.author}
          </span>
        </div>
      </div>
    </div>
  );
};
