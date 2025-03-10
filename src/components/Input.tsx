interface InputProps {
  name: string;
  label: string;
  value?: string;
  onChange: (input: string) => void;
}

export default function Input({ name, label, value, onChange }: InputProps) {
  return (
    <div>
      <label
        htmlFor='text'
        className='block text-sm/6 font-medium text-gray-900'
      >
        {label}
      </label>
      <div className='mt-2'>
        <input
          onChange={(e) => onChange(e.target.value)}
          id={name}
          value={value}
          name={name}
          type='email'
          className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
        />
      </div>
    </div>
  );
}
