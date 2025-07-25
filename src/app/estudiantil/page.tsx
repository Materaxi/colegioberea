import Image from "next/image"
import Link from "next/link"
import { PageBanner } from "@/components/page-banner"

export default function EstudiantilPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      {/* Banner with Image Background */}
      <PageBanner
        title="Vida Estudiantil"
        subtitle="Experiencias que forman para toda la vida"
        backgroundImage="/images/estudiantil.png"
      />

      {/* Vida Académica */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Vida Académica</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold text-[#0a192f] border-l-4 border-[#0a192f] pl-4">
                Excelencia en el Aprendizaje
              </h3>
              <p className="text-gray-700">
                En el Colegio Evangelico Berea, creemos que cada estudiante tiene un potencial único. Nuestro enfoque
                educativo combina métodos tradicionales probados con innovaciones pedagógicas para crear experiencias de
                aprendizaje significativas.
              </p>
              <p className="text-gray-700">
                Los estudiantes participan activamente en su proceso de aprendizaje a través de proyectos
                interdisciplinarios, investigaciones, debates y presentaciones que desarrollan habilidades de
                pensamiento crítico, comunicación y colaboración.
              </p>
              <p className="text-gray-700">
                Nuestros docentes altamente calificados actúan como facilitadores del aprendizaje, guiando a los
                estudiantes en su descubrimiento del conocimiento y ayudándoles a establecer conexiones con situaciones
                de la vida real.
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <Image
                src="/images/estudiantil_1.jpeg"
                alt="Estudiantes en clase"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vida Espiritual */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Vida Espiritual</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="order-2 flex flex-col justify-center space-y-4 md:order-1">
              <h3 className="text-2xl font-bold text-[#0a192f] border-l-4 border-yellow-500 pl-4">
                Formación Cristiana Integral
              </h3>
              <p className="text-gray-700">
                La formación espiritual es un componente esencial de nuestra educación. A través de devocionales
                diarios, clases de Biblia y capellanía, los estudiantes desarrollan una comprensión profunda de la fe
                cristiana y aprenden a aplicar los principios bíblicos en su vida diaria.
              </p>
              <p className="text-gray-700">
                Celebramos servicios especiales, retiros espirituales y actividades que fomentan el crecimiento
                espiritual y la comunión entre estudiantes, docentes y familias.
              </p>
              <p className="text-gray-700">
                Nuestro objetivo es que cada estudiante desarrolle una relación personal con Dios y viva los valores
                cristianos con convicción y coherencia.
              </p>
            </div>
            <div className="order-1 rounded-lg bg-gray-50 p-4 shadow-lg md:order-2">
              <Image
                src="/images/estudiantil_2.jpeg"
                alt="Actividades espirituales"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eventos y Actividades */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Eventos y Actividades</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#0a192f]">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Semana Cultural"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-[#0a192f]">Semana Cultural</h3>
                <p className="mb-4 text-gray-700">
                  Celebración anual que incluye exposiciones, presentaciones artísticas, concursos y actividades que
                  promueven la apreciación de diferentes culturas y tradiciones.
                </p>
                <Link href="#" className="inline-flex items-center text-[#0a192f] hover:underline font-medium">
                  Ver galería
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-500">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Olimpiadas Deportivas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-[#0a192f]">Olimpiadas Deportivas</h3>
                <p className="mb-4 text-gray-700">
                  Competencias deportivas que fomentan el trabajo en equipo, la disciplina y el espíritu deportivo entre
                  los estudiantes de diferentes grados.
                </p>
                <Link href="#" className="inline-flex items-center text-[#0a192f] hover:underline font-medium">
                  Ver calendario
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Feria Científica"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-[#0a192f]">Feria Científica</h3>
                <p className="mb-4 text-gray-700">
                  Exhibición de proyectos científicos desarrollados por los estudiantes, donde demuestran su
                  creatividad, conocimiento y habilidades de investigación.
                </p>
                <Link href="#" className="inline-flex items-center text-[#0a192f] hover:underline font-medium">
                  Ver proyectos
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendario Escolar */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Calendario Escolar</h2>
          <div className="mx-auto max-w-3xl rounded-lg bg-gray-50 p-6 shadow-lg border-t-4 border-[#0a192f]">
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Primer Semestre</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 font-semibold text-[#0a192f]">Agosto:</span> Inicio del año escolar
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-semibold text-[#0a192f]">Septiembre:</span> Celebración de Independencia
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-semibold text-[#0a192f]">Octubre:</span> Semana de evaluaciones
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-semibold text-[#0a192f]">Noviembre:</span> Feria científica
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-semibold text-[#0a192f]">Diciembre:</span> Programa navideño y vacaciones
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Segundo Semestre</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 font-semibold text-[#0a192f]">Enero:</span> Reinicio de clases
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-semibold text-[#0a192f]">Febrero:</span> Semana cultural
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-semibold text-[#0a192f]">Marzo:</span> Olimpiadas deportivas
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-semibold text-[#0a192f]">Abril:</span> Semana de evaluaciones
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-semibold text-[#0a192f]">Mayo:</span> Día de la familia
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 font-semibold text-[#0a192f]">Junio:</span> Graduaciones y clausura
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#0a192f] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#0a192f]/90 hover:scale-105"
              >
                Descargar calendario completo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
