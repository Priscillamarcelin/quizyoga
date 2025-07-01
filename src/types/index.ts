export interface Answer {
  page: number;
  answer: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'answer';
  className?: string;
  disabled?: boolean;
}

export interface ProgressBarProps {
  currentPage: number;
  totalPages: number;
}

export interface PageProps {
  onContinue?: () => void;
  onSelectAnswer?: (answer: string) => void;
}