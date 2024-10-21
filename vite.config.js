export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [],  // Or just remove this line entirely if not needed
    },
  },
});
