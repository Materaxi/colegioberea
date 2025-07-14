import Image from "next/image"

interface PageBannerProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export function PageBanner({ title, subtitle, backgroundImage }: PageBannerProps) {
  return (
    <section className="relative h-64 w-full overflow-hidden md:h-80">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || "/placeholder.svg?height=400&width=1200&text=Banner+Background"}
          alt={`Banner ${title}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/80 via-[#0a192f]/60 to-[#0a192f]/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white">
          <div className="mb-4 flex justify-center">
            <Image
              src="/images/logo-colegio-berea.png"
              alt="Logo Colegio Evangelico Berea"
              width={100}
              height={100}
              className="drop-shadow-lg"
            />
          </div>
          <h1 className="mb-2 text-3xl font-bold drop-shadow-lg md:text-4xl lg:text-5xl">{title}</h1>
          <p className="text-lg drop-shadow-md md:text-xl">{subtitle}</p>
        </div>
      </div>

      {/* Decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />
    </section>
  )
}
