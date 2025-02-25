import type { DocSearchProps } from '@docsearch/react';
import { useMemo } from 'react';
import { languages, type LangType } from '@/typings/config';

export const algoliaLocalesConfig: Record<
  LangType,
  Omit<DocSearchProps, 'appId' | 'apiKey' | 'indexName'>
> = {
  'en-US': {
    placeholder: 'Search the docs',
    translations: {
      button: {
        buttonText: 'Search',
        buttonAriaLabel: 'Search',
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Clear the query',
          resetButtonAriaLabel: 'Clear the query',
          cancelButtonText: 'Cancel',
          cancelButtonAriaLabel: 'Cancel',
        },
        startScreen: {
          recentSearchesTitle: 'Recent searches',
          noRecentSearchesText: 'No recent searches',
          saveRecentSearchButtonTitle: 'Save to recent searches',
          removeRecentSearchButtonTitle: 'Remove from recent searches',
          favoriteSearchesTitle: 'Favorites',
          removeFavoriteSearchButtonTitle: 'Remove from favorites',
        },
        errorScreen: {
          titleText: 'Unable to fetch results',
          helpText: 'You might need to check your network connection',
        },
        footer: {
          selectText: 'Select',
          navigateText: 'Navigate',
          closeText: 'Close',
          searchByText: 'Search by',
        },
        noResultsScreen: {
          noResultsText: 'No results found',
          suggestedQueryText: 'You can try searching for',
          reportMissingResultsText: 'Think there should be results?',
          reportMissingResultsLinkText: 'Click to report',
        },
      },
    },
  },
  'zh-CN': {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索',
        buttonAriaLabel: '搜索',
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消',
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接',
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者',
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈',
        },
      },
    },
  },
};

export function useLocales(local: LangType = languages[0]) {
  const config = useMemo(() => {
    return algoliaLocalesConfig[local];
  }, [local]);

  return config;
}
