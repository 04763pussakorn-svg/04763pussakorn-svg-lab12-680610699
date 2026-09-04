interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

interface SidebarProps {
  username: string;
  type: string;
}

interface FooterProps {
  year: number;
  fullName: string;
  studentId: string;
}

export type { TaskCardProps, SidebarProps, FooterProps };
