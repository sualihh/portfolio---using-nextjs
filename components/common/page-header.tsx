interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <div className="flex flex-col items-start gap-3 py-8 md:py-12">
        <div className="max-w-3xl space-y-3">
          <h1 className="font-heading text-3xl tracking-tight sm:text-4xl lg:text-5xl capitalize">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </div>
      <hr className="mb-8 border-border/70" />
    </>
  );
}
