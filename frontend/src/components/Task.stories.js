import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

export const task = {
  id: '1',
  title: '테스트 Task',
  state: 'Task Inbox',
  updatedAt: new Date(2019, 0, 2, 0, 6)
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

storiesOf('Task', module)
  .add('디폴트', () => <Task task={task} {...actions} />)
  .add('핀드', () => (
    <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />
  ))
  .add('archived', () => (
    <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />
  ));
