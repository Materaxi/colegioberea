import Image from "next/image"
import { PageBanner } from "@/components/page-banner"

export default function GaleriaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      {/* Banner with Image Background */}
      <PageBanner
        title="Galería"
        subtitle="Momentos especiales de nuestra comunidad educativa"
        backgroundImage="/images/galeria.png"
      />

      {/* Categorías de Galería */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-[#0a192f] px-6 py-2 text-white transition-all duration-300 hover:bg-[#0a192f]/90 hover:scale-105">
              Todos
            </button>
            <button className="rounded-full bg-white border-2 border-gray-300 px-6 py-2 text-gray-800 transition-all duration-300 hover:border-[#0a192f] hover:text-[#0a192f] hover:scale-105">
              Eventos Académicos
            </button>
            <button className="rounded-full bg-white border-2 border-gray-300 px-6 py-2 text-gray-800 transition-all duration-300 hover:border-[#0a192f] hover:text-[#0a192f] hover:scale-105">
              Deportes
            </button>
            <button className="rounded-full bg-white border-2 border-gray-300 px-6 py-2 text-gray-800 transition-all duration-300 hover:border-[#0a192f] hover:text-[#0a192f] hover:scale-105">
              Actividades Culturales
            </button>
            <button className="rounded-full bg-white border-2 border-gray-300 px-6 py-2 text-gray-800 transition-all duration-300 hover:border-[#0a192f] hover:text-[#0a192f] hover:scale-105">
              Graduaciones
            </button>
          </div>

          {/* Galería de Imágenes */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=Imagen ${index + 1}`}
                  alt={`Imagen de galería ${index + 1}`}
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-white">
                    <h3 className="text-lg font-semibold">Actividad Escolar</h3>
                    <p className="text-sm">Descripción breve de la imagen</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="rounded-md border-2 border-[#0a192f] bg-white px-6 py-3 text-[#0a192f] font-medium transition-all duration-300 hover:bg-[#0a192f] hover:text-white hover:scale-105">
              Cargar más imágenes
            </button>
          </div>
        </div>
      </section>

      {/* Videos Destacados */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Videos Destacados</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#0a192f]"
              >
                <div className="relative h-48 w-full bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#0a192f] transition-transform hover:scale-110 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-8 w-8"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-[#0a192f]">Video Institucional {index + 1}</h3>
                  <p className="text-gray-700">
                    Descripción breve del contenido del video y su relevancia para nuestra institución.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios con Fotos */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Testimonios</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#0a192f] md:flex-row">
              <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-[#0a192f] md:mb-0 md:mr-6">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Estudiante graduado"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="mb-4 italic text-gray-700">
                  &quot;Mi experiencia en el Colegio Berea ha sido transformadora. Los valores y la educación que recibí me
                  han preparado no solo académicamente sino para la vida.&quot;
                </p>
                <p className="font-semibold text-[#0a192f]">Ana Martínez, Graduada 2022</p>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500 md:flex-row">
              <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-yellow-500 md:mb-0 md:mr-6">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Padre de familia"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="mb-4 italic text-gray-700">
                  &quot;Como padres, estamos muy satisfechos con la formación integral que nuestros hijos reciben en el
                  Colegio Berea. El ambiente seguro y los valores cristianos son invaluables.&quot;
                </p>
                <p className="font-semibold text-[#0a192f]">Familia Hernández, Padres de estudiantes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-lg bg-gray-50 p-8 shadow-lg border-t-4 border-[#0a192f]">
            <h2 className="mb-6 text-center text-3xl font-bold text-[#0a192f]">¿Quieres más información?</h2>
            <p className="mb-6 text-center text-gray-700">
              Completa el formulario y un representante del colegio se pondrá en contacto contigo.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-gray-700">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-[#0a192f] focus:outline-none focus:ring-2 focus:ring-[#0a192f]/20"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-[#0a192f] focus:outline-none focus:ring-2 focus:ring-[#0a192f]/20"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="telefono" className="mb-1 block text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-[#0a192f] focus:outline-none focus:ring-2 focus:ring-[#0a192f]/20"
                    placeholder="Tu número de teléfono"
                  />
                </div>
                <div>
                  <label htmlFor="interes" className="mb-1 block text-sm font-medium text-gray-700">
                    Área de interés
                  </label>
                  <select
                    id="interes"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-[#0a192f] focus:outline-none focus:ring-2 focus:ring-[#0a192f]/20"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="preescolar">Preescolar</option>
                    <option value="primaria">Primaria</option>
                    <option value="secundaria">Secundaria</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="mensaje" className="mb-1 block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-[#0a192f] focus:outline-none focus:ring-2 focus:ring-[#0a192f]/20"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="rounded-md bg-[#0a192f] px-8 py-3 text-white font-medium transition-all duration-300 hover:bg-[#0a192f]/90 hover:scale-105"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
