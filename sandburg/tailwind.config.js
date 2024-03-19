/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
    fontFamily: {
      PretendBlack: ['Pretendard-Black'],
      PretendBold: ['Pretendard-Bold'],
      PretendExtraBold: ['Pretendard-ExtraBold'],
      PretendExtraLight: ['Pretendard-ExtraLight'],
      PretendLight: ['Pretendard-Light'],
      PretendMedium: ['Pretendard-Medium'],
      PretendRegular: ['Pretendard-Regular'],
      PretendSemiBold: ['Pretendard-SemiBold'],
      PretendThin: ['Pretendard-Thin'],
    }
  },
  plugins: [],
}

