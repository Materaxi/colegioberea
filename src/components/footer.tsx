import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo-colegio-berea.png"
                alt="Logo Colegio Evangelico Berea"
                width={80}
                height={80}
                className="mr-3"
              />
              <h3 className="text-xl font-bold">Colegio Evangelico Berea</h3>
            </div>
            <p className="mb-2">Formando líderes con valores cristianos</p>
            <p className="mb-2">Santa Cruz - Bolivia (Est. 1961)</p>
            <p className="mb-2">Dirección: Av. Principal #123</p>
            <p className="mb-2">Teléfono: (123) 456-7890</p>
            <p>Email: info@colegioberea.edu</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:underline">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:underline">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/estudiantil" className="hover:underline">
                  Estudiantil
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:underline">
                  Galería
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Horario de Atención</h3>
            <p className="mb-2">Lunes a Viernes: 7:00 AM - 4:00 PM</p>
            <p className="mb-4">Sábados: 8:00 AM - 12:00 PM</p>
            <h3 className="mb-4 text-xl font-bold">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-300">
                Instagram
              </a>
              <a href="#" className="hover:text-gray-300">
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Colegio Evangelico Berea. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
