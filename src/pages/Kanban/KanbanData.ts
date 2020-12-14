import { v4 as uuidv4 } from 'uuid';
export const DATA = [
  {
  id: uuidv4(),
  columnName: 'high',
  entries: [
    {
      id: uuidv4(),
      text: 'Write unit tests.',
      done: false,
    },
    {
      id: uuidv4(),
      text: 'Debug list feature.',
      done: false,
    },
    {
      id: uuidv4(),
      text: 'Study for react test',
      done: false,
    }
  ]
},
{
  id: uuidv4(),
  columnName: 'low',
  entries: [
    {
      id: uuidv4(),
      text: 'Improve styling on kanban board.',
      done: false,
    },
    {
      id: uuidv4(),
      text: 'Allow drag and drop behavior.',
      done: false,
    }
  ]}
]