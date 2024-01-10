import cn from '../lib/cn'

const Button = ({ children, className, ...rest }) => {
  return (
    <>
      <button
        className={cn(
          'px-5 py-2 bg-[#172227] rounded-[44px] cursor-pointer',
          className
        )}
        {...rest}>
        {children}
      </button>
    </>
  )
}

export default Button
