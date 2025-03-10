'use client';

import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { IList } from '@/app/page';

const TASK_LIST_KEY = 'taskList';

export function CreateList() {
  const [listName, setListName] = useState<string>('');
  const [currentTasks, setCurrentTasks] = useState<IList[]>(
    window.localStorage.getItem(TASK_LIST_KEY)
      ? JSON.parse(window.localStorage.getItem(TASK_LIST_KEY)!)
      : []
  );

  const retrieveLists = (): IList[] => {
    const taskListFromLocalStorage = window.localStorage.getItem(TASK_LIST_KEY);
    return taskListFromLocalStorage ? JSON.parse(taskListFromLocalStorage) : [];
  };

  const writeTasks = (task: IList[]) => {
    window.localStorage.setItem(TASK_LIST_KEY, JSON.stringify(task));
  };

  const createTodoList = () => {
    const currentTasks = retrieveLists();
    const newTasks: IList[] = [...currentTasks, { name: listName }];
    writeTasks(newTasks);
    setCurrentTasks(newTasks);
    setListName('');
  };

  return (
    <div className='flex flex-col h-full gap-2'>
      <div className=' flex justify-center items-center gap-2'>
        <Input
          label='List Name'
          name='listName'
          value={listName}
          onChange={(e) => setListName(e)}
        />
        <Button aria-label='Add todo list' onClick={createTodoList}>
          Add Todo List
        </Button>
      </div>

      <ul role='list' className='divide-y divide-gray-200'>
        {currentTasks.map((item) => (
          <li key={item.name} className='py-4'>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
