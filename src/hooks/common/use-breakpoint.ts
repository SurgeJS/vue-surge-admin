import AppConstant from '@/constant/app'

function useBreakpoint() {
  return useBreakpoints<BreakpointType>(AppConstant.SCREEN_BREAKPOINTS)
}

export default useBreakpoint
