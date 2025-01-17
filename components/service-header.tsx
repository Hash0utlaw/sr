interface ServiceHeaderProps {
  title: string
  description: string
  backgroundImage: string
}

export function ServiceHeader({ title, description, backgroundImage }: ServiceHeaderProps) {
  return (
    <div className="relative min-h-[50vh] flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 bg-black/60 z-10"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          {title}
        </h1>
        <p className="text-lg md:text-xl animate-fade-in">
          {description}
        </p>
      </div>
    </div>
  )
}