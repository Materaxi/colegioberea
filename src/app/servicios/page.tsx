import Image from "next/image"
import { PageBanner } from "@/components/page-banner"

export default function ServiciosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      {/* Banner with Image Background */}
      <PageBanner
        title="Nuestros Servicios"
        subtitle="Oferta educativa y servicios complementarios"
        backgroundImage="/placeholder.svg?height=400&width=1200&text=Servicios+Educativos"
      />

      {/* Niveles Educativos */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Niveles Educativos</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#0a192f]">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0a192f]/10 text-[#0a192f]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Preescolar</h3>
              <p className="mb-4 text-gray-700">
                Educación inicial para niños de 3 a 5 años, enfocada en el desarrollo de habilidades sociales,
                emocionales y cognitivas a través del juego y la exploración.
              </p>
              <ul className="ml-5 list-disc space-y-1 text-gray-700">
                <li>Maternal (3 años)</li>
                <li>Pre-Kinder (4 años)</li>
                <li>Kinder (5 años)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-500">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Primaria</h3>
              <p className="mb-4 text-gray-700">
                Educación primaria de 1° a 6° grado, con un currículo integral que combina las materias básicas con
                formación en valores cristianos y desarrollo de habilidades para la vida.
              </p>
              <ul className="ml-5 list-disc space-y-1 text-gray-700">
                <li>Primer ciclo (1° a 3° grado)</li>
                <li>Segundo ciclo (4° a 6° grado)</li>
                <li>Programa de lectura acelerada</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-500">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Secundaria</h3>
              <p className="mb-4 text-gray-700">
                Educación secundaria de 7° a 12° grado, preparando a los estudiantes para la universidad con un enfoque
                en excelencia académica, pensamiento crítico y liderazgo cristiano.
              </p>
              <ul className="ml-5 list-disc space-y-1 text-gray-700">
                <li>Ciclo básico (7° a 9° grado)</li>
                <li>Bachillerato (10° a 12° grado)</li>
                <li>Programa de orientación vocacional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Complementarios */}
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Servicios Complementarios</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#0a192f]">
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Consejería Estudiantil</h3>
              <p className="text-gray-700">
                Apoyo psicopedagógico y orientación para estudiantes y familias, atendiendo necesidades emocionales,
                sociales y académicas.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-500">
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Capellanía</h3>
              <p className="text-gray-700">
                Acompañamiento espiritual, devocionales, consejería bíblica y actividades que fomentan el crecimiento
                espiritual.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Laboratorios</h3>
              <p className="text-gray-700">
                Laboratorios de ciencias, informática e idiomas equipados con tecnología moderna para el aprendizaje
                práctico.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <h3 className="mb-3 text-xl font-semibold text-[#0a192f]">Biblioteca</h3>
              <p className="text-gray-700">
                Amplia colección de libros, recursos digitales y espacios de estudio para fomentar la investigación y la
                lectura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Actividades Extracurriculares */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#0a192f]">Actividades Extracurriculares</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Actividades deportivas"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 rounded-lg bg-white p-6 shadow-lg border-l-4 border-[#0a192f]">
                <h3 className="mb-2 text-xl font-semibold text-[#0a192f]">Deportes</h3>
                <p className="text-gray-700">
                  Ofrecemos una variedad de disciplinas deportivas como fútbol, baloncesto, voleibol y atletismo, con
                  entrenamientos regulares y participación en competencias intercolegiales.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Actividades artísticas"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 rounded-lg bg-white p-6 shadow-lg border-l-4 border-yellow-500">
                <h3 className="mb-2 text-xl font-semibold text-[#0a192f]">Arte y Música</h3>
                <p className="text-gray-700">
                  Talleres de música, coro, teatro, danza y artes visuales que permiten a los estudiantes desarrollar
                  sus talentos artísticos y expresar su creatividad.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Club de ciencias"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 rounded-lg bg-white p-6 shadow-lg border-l-4 border-green-500">
                <h3 className="mb-2 text-xl font-semibold text-[#0a192f]">Clubes Académicos</h3>
                <p className="text-gray-700">
                  Clubes de ciencias, matemáticas, debate, robótica y programación que fomentan el aprendizaje práctico
                  y el desarrollo de habilidades específicas.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Servicio comunitario"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 rounded-lg bg-white p-6 shadow-lg border-l-4 border-purple-500">
                <h3 className="mb-2 text-xl font-semibold text-[#0a192f]">Servicio Comunitario</h3>
                <p className="text-gray-700">
                  Proyectos de servicio social que permiten a los estudiantes poner en práctica los valores cristianos,
                  desarrollar empatía y contribuir positivamente a la comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
