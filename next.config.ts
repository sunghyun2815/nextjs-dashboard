/** @type {import('next').NextConfig} */
const nextConfig = {
  // 다른 설정들...
  
  // 환경 변수에 따라 /seed 경로를 처리
  async rewrites() {
    // 개발 환경이 아닌 경우(프로덕션)에 /seed 경로를 차단
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/seed',
          destination: '/api/disabled-in-production',
        },
      ];
    }
    
    return [];
  },
};

module.exports = nextConfig;