import Image from "next/image"
import { PageBanner } from "@/components/page-banner"

export default function NosotrosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      {/* Banner with Image Background */}
      <PageBanner
        title="Nosotros"
        subtitle="Conoce nuestra historia, misión y visión"
        backgroundImage="/placeholder.svg?height=400&width=1200&text=Historia+del+Colegio"
      />

      {/* Historia Section */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold text-[#0a192f] border-l-4 border-[#0a192f] pl-4">Nuestra Historia</h2>
              <p className="text-gray-700">
               La historia del Colegio Berea comienza con la llegada de la misionera Mery Scheflen a Bolivia en 1952, donde primero fundó una escuela evangélica en Ascensión de Guarayos. Posteriormente, se trasladó a Santa Cruz y fundó el Instituto Bíblico Berea, destinado a la formación religiosa. Con el tiempo, y ante la necesidad de ampliar el alcance educativo, se adquirió un terreno en el kilómetro 7 ½ de la carretera a Cochabamba, donde se estableció el Colegio Secundario Berea junto a la escuela primaria Río Nuevo.
              </p>
              
              <p className="text-gray-700">
               El Colegio Berea fue oficialmente fundado en 1961 con el apoyo de la Misión Evangélica Mundial y la Cooperativa de Educación &quot;Río Nuevo&quot; Ltda., tras adquirir una propiedad de ocho hectáreas. La legalización del colegio se concretó en 1962 mediante la Resolución Ministerial N.º 24. Para apoyar a los estudiantes con menos recursos, se creó un internado que combinaba estudio con actividades laborales como la agricultura. Este internado funcionó hasta 1985 y reabrió en 1995, brindando aún hoy alojamiento y tutoría a los alumnos.
              </p>
              <p className="text-gray-700">
               Actualmente, la Unidad Educativa Berea ofrece educación inicial, primaria y secundaria bajo una formación integral con principios y valores cristianos. Su nombre proviene de una referencia bíblica en Hechos 17:10-11, destacando el estudio diligente de las Escrituras. El colegio se sostiene con fondos propios y cuenta con infraestructura adecuada y servicio de transporte, atrayendo alumnos de diversas zonas de la ciudad de Santa Cruz.
              </p>
            </div>
              <div className="rounded-lg bg-white p-4 shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Historia del Colegio Berea"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Misión y Visión</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6 shadow-lg border-t-4 border-[#0a192f]">
              <h3 className="mb-4 text-2xl font-bold text-[#0a192f]">Nuestra Misión</h3>
              <p className="text-gray-700">
                Proporcionar una educación integral de calidad basada en principios cristianos, que forme estudiantes
                con excelencia académica, valores éticos y morales, comprometidos con Dios, su familia y la sociedad.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-lg border-t-4 border-yellow-500">
              <h3 className="mb-4 text-2xl font-bold text-[#0a192f]">Nuestra Visión</h3>
              <p className="text-gray-700">
                Ser una institución educativa cristiana de referencia, reconocida por su excelencia académica, formación
                en valores y compromiso con el desarrollo integral de sus estudiantes, preparándolos para ser agentes de
                cambio positivo en la sociedad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Nuestros Valores</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#0a192f]">
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Fe</h3>
              <p className="text-gray-700">
                Creemos en Dios como el centro de nuestra vida y educación, fomentando una relación personal con Él.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500">
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Excelencia</h3>
              <p className="text-gray-700">
                Buscamos la calidad en todo lo que hacemos, esforzándonos por alcanzar los más altos estándares
                académicos y personales.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Integridad</h3>
              <p className="text-gray-700">
                Promovemos la honestidad, la transparencia y la coherencia entre lo que pensamos, decimos y hacemos.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Respeto</h3>
              <p className="text-gray-700">
                Valoramos la dignidad de cada persona, reconociendo y apreciando las diferencias individuales y tratando
                a todos con consideración.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Responsabilidad</h3>
              <p className="text-gray-700">
                Fomentamos el cumplimiento de nuestros deberes y compromisos, asumiendo las consecuencias de nuestras
                acciones.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Servicio</h3>
              <p className="text-gray-700">
                Promovemos una actitud de ayuda y entrega hacia los demás, siguiendo el ejemplo de Jesús.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Directivo */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Nuestro Equipo Directivo</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-gray-50 p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-[#0a192f]">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Director"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-semibold text-[#0a192f]">Prof. Juan Martínez</h3>
              <p className="mb-3 text-[#0a192f] font-medium">Director General</p>
              <p className="text-gray-700">
                Licenciado en Educación con más de 20 años de experiencia en gestión educativa.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-gray-50 p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-[#0a192f]">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Subdirectora Académica"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-semibold text-[#0a192f]">Dra. María Gómez</h3>
              <p className="mb-3 text-[#0a192f] font-medium">Subdirectora Académica</p>
              <p className="text-gray-700">
                Doctora en Ciencias de la Educación, especialista en innovación educativa.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-gray-50 p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-[#0a192f]">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Coordinador de Pastoral"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-semibold text-[#0a192f]">Pastor Roberto Sánchez</h3>
              <p className="mb-3 text-[#0a192f] font-medium">Coordinador de Pastoral</p>
              <p className="text-gray-700">
                Licenciado en Teología, con amplia experiencia en educación cristiana y consejería.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
