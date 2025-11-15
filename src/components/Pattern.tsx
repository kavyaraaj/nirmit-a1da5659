const Pattern = () => {
  return (
    <div className="min-h-full w-full relative bg-slate-50 dark:bg-slate-950">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(214 32% 91%) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(214 32% 91%) 1px, transparent 1px)`,
          backgroundSize: '20px 30px',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)'
        }}
      />
    </div>
  );
};

export default Pattern;
