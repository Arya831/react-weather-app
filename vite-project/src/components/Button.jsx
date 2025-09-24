
const Button = ({Children,className='',disabled=false}) => {
  return (
    <button className={'bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed ${className} '}
     disabled={disabled} {...props}>{Children}</button>
  )
}

export default Button