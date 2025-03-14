function Textarea({ className = "", ...props }) {
    return (
      <textarea
        className={`flex min-h-[80px] w-full rounded-md border
             border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none 
             focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
      />
    )
  }
  
  export { Textarea }
  
  