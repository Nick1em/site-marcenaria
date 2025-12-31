import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true // necessário para exportação estática se você usa <Image />
  }
}
export default nextConfig;
