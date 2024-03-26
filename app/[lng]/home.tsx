'use client';

import { useTranslation } from '@/i18n/client';
import request from '@/lib/request';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Skeleton } from 'primereact/skeleton';
import { Toast } from 'primereact/toast';
import { Suspense, useRef } from 'react';

function TranslateComponent() {
  const { lng } = useParams<{ lng: string }>();
  const { t } = useTranslation(lng);
  return (
    <>
      <li>客户端 - 国际化</li>
      <li>{t('title')}</li>
      <li>{t('description')}</li>
      <li>{t('lang')}</li>
    </>
  );
}

function IPComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ['ip'],
    queryFn: async () => {
      const res = await request(`https://www.ip.cn/api/index?ip=&type=0`).then(
        (res) => res,
      );
      return res.data;
    },
  });
  const toast = useRef<Toast>(null);
  return (
    <ul className="flex flex-col gap-4">
      <li
        onClick={() => {
          toast.current?.show({
            severity: 'info',
            summary: 'Info',
            detail: 'Info',
          });
          toast.current?.show({
            severity: 'success',
            summary: 'success',
            detail: 'success',
          });
          toast.current?.show({
            severity: 'error',
            summary: 'error',
            detail: 'error',
          });
          toast.current?.show({
            severity: 'warn',
            summary: 'warn',
            detail: 'warn',
          });
        }}
      >
        IP: {data.ip}
      </li>
      <li>地址: {data.address}</li>
      <TranslateComponent />
      <Toast ref={toast} />
    </ul>
  );
}

export default function Mall() {
  return (
    <Suspense
      fallback={
        <ul className="flex flex-col gap-4 *:h-6 *:w-52 *:rounded-full">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </ul>
      }
    >
      <IPComponent />
    </Suspense>
  );
}
