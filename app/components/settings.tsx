'use client';

import Icon from '@/components/Icon';

import useConfig from '@/hooks/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from 'react';

export default function ThemeSettings() {
  const op = useRef<OverlayPanel>(null);
  const { mode, theme, language, updateMode, updateTheme, updateLanguage } =
    useConfig();
  return (
    <div>
      <Button
        icon={<Icon icon="mdi:theme-light-dark" className="mr-2 size-4" />}
        onClick={(e) => op.current?.toggle(e)}
      >
        Config
      </Button>
      <OverlayPanel className="w-96 " ref={op} showCloseIcon>
        <div className="space-y-1.5">
          <div className="space-y-1.5">
            <div className="text-xs">Mode</div>
            <div className="grid grid-cols-3 gap-2">
              <Button
                onClick={() => updateMode('light')}
                className={cn(mode === 'light' && 'border-2 border-primary')}
                icon={
                  <Icon icon="mdi:white-balance-sunny" className="size-4" />
                }
              >
                Light
              </Button>
              <Button
                onClick={() => updateMode('dark')}
                className={cn(mode === 'dark' && 'border-2 border-primary')}
                icon={<Icon icon="mdi:moon-and-stars" className="size-4" />}
              >
                Dark
              </Button>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="text-xs">Language</div>
            <div className="grid grid-cols-3 gap-2">
              <Button
                onClick={() => updateLanguage('zh-CN')}
                className={cn(
                  language === 'zh-CN' && 'border-2 border-primary',
                )}
              >
                <Link href="/zh-CN">中文</Link>
              </Button>
              <Button
                onClick={() => updateLanguage('en-US')}
                className={cn(
                  language === 'en-US' && 'border-2 border-primary',
                )}
              >
                <Link href="/en-US">English</Link>
              </Button>
            </div>
          </div>
        </div>
      </OverlayPanel>
    </div>
  );
}
