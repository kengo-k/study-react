import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export type TabId =
  | 'use_state'
  | 'use_query'
  | 'redux_toolKit'
  | 'recoli'
  | 'jotai'
  | 'zustand'

export const TabItem = (props: {
  tabId: TabId
  selected?: boolean
  onTabClicked: (tabId: TabId) => void
}) => {
  const selectedClass =
    'inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
  const noSelectedClass =
    'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
  let className = noSelectedClass
  if (props.selected) {
    className = selectedClass
  }
  return (
    <li className="mr-2" onClick={() => props.onTabClicked(props.tabId)}>
      <Link to={`/${props.tabId}`} className={className}>
        {props.tabId}
      </Link>
    </li>
  )
}

export const Tabs = (props: {
  children: React.ReactElement<any>
  initialTab: TabId
  onTabClicked: (tabId: TabId) => void
}) => {
  const [selectedTabId, setSelectedTabId] = useState<TabId>(props.initialTab)
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <TabItem
          tabId="use_state"
          selected={selectedTabId === 'use_state'}
          onTabClicked={props.onTabClicked}
        />
        <TabItem
          tabId="use_query"
          selected={selectedTabId === 'use_query'}
          onTabClicked={props.onTabClicked}
        />
        <TabItem
          tabId="redux_toolKit"
          selected={selectedTabId === 'redux_toolKit'}
          onTabClicked={props.onTabClicked}
        />
        <TabItem
          tabId="recoli"
          selected={selectedTabId === 'recoli'}
          onTabClicked={props.onTabClicked}
        />
        <TabItem
          tabId="jotai"
          selected={selectedTabId === 'jotai'}
          onTabClicked={props.onTabClicked}
        />
        <TabItem
          tabId="zustand"
          selected={selectedTabId === 'zustand'}
          onTabClicked={props.onTabClicked}
        />
      </ul>
      {props.children}
    </div>
  )
}
