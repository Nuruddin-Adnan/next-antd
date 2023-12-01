import cn from "@/lib/cn";

export default function Button(props: any) {
  const { children, size, type = 'button', className, variant, icon, loading, onClick } = props

  return (
    <button
      className={cn(
        "bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] text-gray-900  inline-flex items-center border border-gray-400 focus:ring-2 shadow-sm py-1.5 px-3 rounded transition-all",
        {
          "text-sm py-1 px-2 ": size === 'sm',
          "text-lg py-2 px-4": size === 'lg',
          "bg-white border-gray-300 text-gray-900 from-transparent to-transparent": variant === 'light',
          "bg-gradient-to-b from-[#42A1EC] to-[#0070C9] hover:from-[#51A9EE] hover:to-[#147BCD] text-white border border-[#0077CC] ": variant === 'primary',
          "bg-gradient-to-b from-[#68D60F] to-[#4DA208] hover:from-[#6fe70e] hover:to-[#54b108] text-white border border-[#66D00F] ": variant === 'success',
          "bg-gradient-to-b from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white border border-cyan-500 ": variant === 'info',
          "bg-gradient-to-b from-[#fda82c] to-[#db5d00] hover:from-[#fdb92b] hover:to-[#db7d00] text-white border border-[#e89c2b] ": variant === 'warning',
          "bg-gradient-to-b from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white border border-red-500 ": variant === 'error',
          "bg-gradient-to-b from-gray-600 to-gray-950 hover:from-gray-500 hover:to-gray-800 text-white border border-gray-800 ": variant === 'dark',


          "bg-white from-transparent to-transparent border-[#0070C9] text-[#0070C9] hover:from-[#51A9EE] hover:to-[#147BCD] hover:text-white border": variant === 'outline-primary',
          "bg-white border-[#4DA208] text-[#4DA208] hover:from-[#6fe70e] hover:to-[#54b108] hover:text-white from-transparent to-transparent": variant === 'outline-success',
          "bg-white border-cyan-500 text-cyan-600  hover:from-cyan-300 hover:to-cyan-500 hover:text-white from-transparent to-transparent": variant === 'outline-info',
          "bg-white border-[#db5d00] text-[#db5d00] hover:from-[#fdb92b] hover:to-[#db7d00] hover:text-white  from-transparent to-transparent": variant === 'outline-warning',
          "bg-white border-red-700 text-red-700 hover:from-red-500 hover:to-red-700 hover:text-white from-transparent to-transparent": variant === 'outline-error',
          "bg-white border-gray-900 text-gray-900 hover:from-gray-600 hover:to-gray-950 hover:text-white from-transparent to-transparent": variant === 'outline-dark',
          "hover:opacity-50  disabled:cursor-not-allowed": loading,
        },
        className,
      )}
      type={type}
      onClick={onClick}
      disabled={loading}
    >
      {
        loading &&
        <svg
          aria-hidden="true"
          className={cn(
            "w-5 h-5 me-2  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
            {
              "w-4 h-4": size === 'sm',
              "w-6 h-6": size === 'lg',
            }
          )
          }
          viewBox="0 0 100 101"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
      }
      {!loading && icon && <span className={cn(
        "w-5 h-5 me-2",
        {
          "me-1 w-4 h-4": size === 'sm',
          "w-6 h-6": size === 'lg',
        }
      )}>
        {icon}
      </span>}
      {loading ? 'Loading...' : children}
    </button>
  );
}

