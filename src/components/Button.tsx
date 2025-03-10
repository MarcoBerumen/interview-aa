interface ButtonProps {
  children: string;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='rounded-sm bg-indigo-600 px-2 py-4 text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      {children}
    </button>
  );
}
