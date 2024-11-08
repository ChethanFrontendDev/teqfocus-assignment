export function Card({ className, ...props }) {
    return (
      <div
        className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
        {...props}
      />
    )
  }
  
  export function CardHeader({ className, ...props }) {
    return <div className={`px-6 py-4 ${className}`} {...props} />
  }
  
  export function CardTitle({ className, ...props }) {
    return (
      <h3
        className={`text-lg font-semibold text-gray-900 ${className}`}
        {...props}
      />
    )
  }
  
  export function CardContent({ className, ...props }) {
    return <div className={`px-6 py-4 ${className}`} {...props} />
  }