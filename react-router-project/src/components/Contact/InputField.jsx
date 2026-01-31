export default function InputField({ label, id, type = "text", placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold leading-6 text-gray-900">
        {label}
      </label>
      
      {/* The repetition lives ONCE inside here */}
      <div className="mt-2.5">
        <input
          type={type}
          name={id}
          id={id}
          autoComplete={id}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}