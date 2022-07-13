/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        const ContentSecurityPolicy = `
            style-src 'unsafe-inline';
        `;
        return [
            {
                source: "/",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        // value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
                        value: "",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
