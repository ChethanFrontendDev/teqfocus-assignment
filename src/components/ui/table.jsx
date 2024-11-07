export function Table({ className, ...props }) {
    return (
      <div className="overflow-x-auto">
        <table className={`w-full text-sm text-left text-gray-500 ${className}`} {...props} />
      </div>
    )
  }
  
  export function TableHeader({ className, ...props }) {
    return <thead className={`text-xs text-gray-700 uppercase bg-gray-50 ${className}`} {...props} />
  }
  
  export function TableBody({ className, ...props }) {
    return <tbody className={className} {...props} />
  }
  
  export function TableRow({ className, ...props }) {
    return <tr className={`bg-white border-b ${className}`} {...props} />
  }
  
  export function TableHead({ className, ...props }) {
    return <th scope="col" className={`px-6 py-3 ${className}`} {...props} />
  }
  
  export function TableCell({ className, ...props }) {
    return <td className={`px-6 py-4 ${className}`} {...props} />
  }