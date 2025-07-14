import Image from "next/image"
import Link from "next/link"
import { PhotoCarousel } from "@/components/photo-carousel"
import { VideoCarousel } from "@/components/video-carousel"
import { VideoHero } from "@/components/video-hero"

export default function Home() {
  return (
   <main className="flex min-h-screen flex-col items-center bg-gray-50">
      {/* Video Hero Section */}
      <VideoHero />

      {/* Hero Section */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold text-[#0a192f] border-l-4 border-[#0a192f] pl-4">
                Bienvenidos a nuestra institución educativa
              </h2>
              <p className="text-gray-700">
                El Colegio Evangelico Berea es una institución comprometida con la excelencia académica y la formación
                integral basada en valores cristianos. Nuestro objetivo es formar estudiantes preparados para los
                desafíos del futuro, con un fuerte fundamento moral y espiritual.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/nosotros"
                  className="rounded-md bg-[#0a192f] px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-[#0a192f]/90 hover:scale-105"
                >
                  Conócenos
                </Link>
                <Link
                  href="/servicios"
                  className="rounded-md border-2 border-[#0a192f] px-6 py-3 text-[#0a192f] font-medium transition-all duration-300 hover:bg-[#0a192f] hover:text-white hover:scale-105"
                >
                  Nuestros Servicios
                </Link>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-lg border-t-4 border-yellow-500">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Colegio Evangelico Berea"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Carousel Section */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Nuestras Instalaciones</h2>
          <div className="rounded-lg bg-gray-50 p-6 shadow-lg border-t-4 border-[#0a192f]">
            <PhotoCarousel />
          </div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Videos Institucionales</h2>
          <div className="rounded-lg bg-white p-6 shadow-lg border-t-4 border-red-500">
            <VideoCarousel />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#0a192f]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]/10 text-[#0a192f]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Excelencia Académica</h3>
              <p className="text-gray-700">
                Nuestro programa educativo está diseñado para fomentar el pensamiento crítico y el aprendizaje
                significativo en todas las áreas del conocimiento.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Valores Cristianos</h3>
              <p className="text-gray-700">
                Integramos los principios bíblicos en todas nuestras actividades, formando el carácter y la
                espiritualidad de nuestros estudiantes.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Desarrollo Integral</h3>
              <p className="text-gray-700">
                Promovemos el desarrollo de habilidades sociales, emocionales y físicas a través de actividades
                extracurriculares y deportivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Testimonios</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#0a192f]">
              <div className="mb-4 flex items-center">
                <div className="h-12 w-12 rounded-full bg-[#0a192f]/10 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-[#0a192f]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#0a192f]">Familia Rodríguez</p>
                  <p className="text-sm text-gray-500">Padres de estudiantes</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                &quot;El Colegio Evangelico Berea ha sido una bendición para nuestra familia. La formación académica y
                espiritual que reciben nuestros hijos es excepcional.&quot;
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500">
              <div className="mb-4 flex items-center">
                <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-yellow-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#0a192f]">Carlos Mendoza</p>
                  <p className="text-sm text-gray-500">Promoción 2015</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                &quot;Como ex-alumno, puedo decir que los valores y la educación que recibí en el Colegio Berea han sido
                fundamentales para mi desarrollo profesional y personal.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
