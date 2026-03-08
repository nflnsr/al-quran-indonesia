export default function Loading() {
  return (
    <div className="flex min-h-[calc(100vh-var(--header-height)-var(--footer-height))] items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-2">
          <span className="h-3 w-3 animate-bounce rounded-full bg-black [animation-delay:-0.3s] dark:bg-white" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-black [animation-delay:-0.15s] dark:bg-white" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-black dark:bg-white" />
        </div>
        <p className="text-sm font-medium uppercase tracking-widest text-black dark:text-white">
          Loading...
        </p>
      </div>
    </div>
  );
}
