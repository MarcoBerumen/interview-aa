import styles from './page.module.css';
import { CreateList } from '@/components/CreateList';

export interface IList {
  name: string;
  list?: ListTask;
}

type ListTask = Array<ITask>;

enum TaskStatus {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
  DELETED = 'DELETED',
}

interface ITask {
  title: string;
  status: TaskStatus;
}

export default function Home() {
  return (
    <div className={styles.page}>
      <CreateList />
    </div>
  );
}
