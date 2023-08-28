/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Authorization",
            value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjExMzk2NGY3MDZiNGM0ZTJhYTFiM2M4NGQ1Y2YwYWRhMjA4OWIwNDc2ZjM3NjlhN2I1ZTBmZDNkN2YyM2IxYmUxNWE0N2Y0YTU4YmYzMzE1In0",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
