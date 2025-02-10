import AppConstant from '@/constant/app'

function breakpoint() {
  return useBreakpoints<BreakpointType>(AppConstant.SCREEN_BREAKPOINTS)
}

export default breakpoint
