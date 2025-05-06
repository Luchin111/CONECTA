'use client';

import React from 'react';
import Image from 'next/image';
import { Question, MapPin } from '@phosphor-icons/react';

const InfoPage = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Sección: Todo lo que necesitas saber */}
      <section className="px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-[32px] font-bold text-[#2D2D5F] mb-4">
            Todo lo que necesitas saber sobre{' '}
            <span className="text-[#FF5C00]">CONECTA</span>
          </h1>
          
          <p className="text-[#4A4A68] mb-8">
            Al registrarte, accedes automáticamente a 30 días de prueba sin costo. Durante 
            este tiempo, podrás dejar productos en nuestros puntos de entrega, ofrecer 
            recojo a tus clientes y ver por ti mismo cómo Conecta optimiza tu logística.
          </p>

          <div className="mb-8">
            <Image
              src="/images/info/delivery-illustration.png"
              alt="Delivery Illustration"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Sección: Acceso completo al sistema */}
      <section className="px-4 py-8 bg-[#2D2D5F] text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Acceso completo al sistema
          </h2>
          
          <p className="mb-8">
            En CONECTA, cada vendedor cuenta con acceso completo a nuestra aplicación. Esta 
            herramienta te permite gestionar de forma sencilla y eficiente todos los aspectos 
            clave de tu operación. Desde la app, puedes consultar el inventario de tus productos 
            en tiempo real, verificar el estado de tus entregas (pendientes, programadas o canceladas), 
            revisar el saldo acumulado disponible para cobro, así como acceder a los comprobantes 
            de pago e ingreso de productos. Todo está diseñado para que lleves un registro claro 
            y ordenado de tus actividades diarias, sin depender de herramientas externas o 
            procesos complicados.
          </p>

          <div className="flex justify-center mb-4">
            <Image
              src="/images/info/app-screens.png"
              alt="App Screens"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            <Image
              src="/images/platforms/windows.png"
              alt="Windows"
              width={24}
              height={24}
            />
            <Image
              src="/images/platforms/ios.png"
              alt="iOS"
              width={24}
              height={24}
            />
            <Image
              src="/images/platforms/android.png"
              alt="Android"
              width={24}
              height={24}
            />
          </div>
        </div>
      </section>

      {/* Sección: Uso del punto de entrega */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Uso del punto de{' '}
            <span className="text-[#FF5C00]">entrega</span>
          </h2>
          
          <p className="text-[#4A4A68] text-lg mb-8">
            Para facilitar la logística, CONECTA cuenta con dos puntos de entrega en La Paz y El Alto, 
            ubicados en zonas estratégicas. No es necesario coordinar horarios específicos: 
            puedes dejar tus productos en el momento que desees. Cada producto se registra 
            mediante un código único, lo que permite evitar confusiones y garantizar un control 
            ordenado de los productos. Este sistema no solo ahorra tiempo, sino que también brinda 
            seguridad y trazabilidad a cada operación realizada.
          </p>

          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/info/delivery-point.jpg"
              alt="Punto de entrega CONECTA"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sección: Soporte personalizado */}
      <section className="px-4 py-12 bg-[#2D2D5F] text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Soporte personalizado{' '}
            <span className="text-[#FF5C00]">para resolver dudas</span>
          </h2>
          
          <p className="text-lg mb-8">
            Sabemos que cada vendedor puede tener preguntas o necesitar asistencia en diferentes 
            momentos. Por eso, hemos implementado un sistema de soporte eficiente y cercano. Dentro 
            de nuestra misma app, está disponible un chatbot automatizado que resuelve consultas 
            frecuentes de forma inmediata. Además, para brindar un acompañamiento más humano y 
            directo, también ofrecemos atención personalizada por WhatsApp. Nuestro equipo 
            está siempre disponible para ayudarte a resolver cualquier duda, guiarte en el uso del 
            sistema o atender cualquier inconveniente que se presente.
          </p>

          <div className="relative w-full h-[400px] md:h-[500px] flex justify-center items-center">
            <Image
              src="/images/info/support-chat.png"
              alt="Soporte personalizado"
              width={300}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Sección: Nuestros puntos de entrega */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#F5F5F5] rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Nuestros puntos de{' '}
                <span className="text-[#FF5C00]">entrega</span>
              </h2>
              <button className="bg-[#2D2D5F] text-white px-6 py-2 rounded-full text-sm">
                ¡Probar CONECTA ahora!
              </button>
            </div>

            <p className="text-[#4A4A68] mb-6">
              Fácil acceso, atención segura
            </p>

            <p className="text-[#4A4A68] mb-8">
              Estamos ubicados en La Paz, en una zona estratégica que facilita la logística de todos 
              nuestros vendedores. Nuestro espacio está diseñado para entregas rápidas, confiables y 
              sin complicaciones.
            </p>

            <div className="relative w-full h-[200px] md:h-[300px] rounded-lg overflow-hidden mb-8">
              <Image
                src="/images/info/delivery-point.jpg"
                alt="Punto de entrega"
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#FF5C00] mb-4">
                Horarios de atención en La Paz
              </h3>
              <ul className="space-y-2">
                <li>• Lunes a viernes: 9:00 a.m. - 8:00 p.m.</li>
                <li>• Sábados: 9:00 a.m. - 1:00 p.m.</li>
                <li>• Domingos: Cerrado</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                CONECTA también{' '}
                <span className="text-[#FF5C00]">en El Alto</span>
              </h3>
              
              <p className="text-[#4A4A68] mb-8">
                Nuestra operación también llega a El Alto, permitiendo que más vendedores como tú 
                accedan al sistema y realicen entregas sin salir de su zona. El punto de atención 
                funciona con horarios definidos y estructura organizada para garantizar seguridad 
                en las entregas.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#FF5C00] mb-4">
                  Horarios de atención en El Alto
                </h3>
                <ul className="space-y-2">
                  <li>• Lunes a viernes: 10:00 a.m. - 5:00 p.m.</li>
                  <li>• Sábados y Domingos: Cerrado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: ¿Estás fuera de La Paz? */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D5F] text-center mb-4">
            ¿Estás fuera<br />
            de <span className="text-[#FF5C00]">La Paz</span>?
          </h2>
          
          <p className="text-gray-500 text-center mb-8">
            También puedes vender
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M8 3H4C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H8C8.55228 9 9 8.55228 9 8V4C9 3.44772 8.55228 3 8 3Z" stroke="#FF5C00" strokeWidth="2"/>
                  <path d="M19 3H15C14.4477 3 14 3.44772 14 4V8C14 8.55228 14.4477 9 15 9H19C19.5523 9 20 8.55228 20 8V4C20 3.44772 19.5523 3 19 3Z" stroke="#FF5C00" strokeWidth="2"/>
                  <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="#FF5C00" strokeWidth="2"/>
                  <path d="M8 14H4C3.44772 14 3 14.4477 3 15V19C3 19.5523 3.44772 20 4 20H8C8.55228 20 9 19.5523 9 19V15C9 14.4477 8.55228 14 8 14Z" stroke="#FF5C00" strokeWidth="2"/>
                </svg>
              </div>
              <p className="text-sm text-[#2D2D5F]">
                Envía tus productos por flota u otro transporte que gustes y pasamos a recoger.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FF5C00" strokeWidth="2"/>
                  <path d="M12 16V12M12 8H12.01" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-sm text-[#2D2D5F]">
                Recibes ayuda para definir cómo haremos llegar los pedidos a tus clientes.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FF5C00" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-sm text-[#2D2D5F]">
                Vende desde cualquier parte del país con la seguridad de tener un aliado para tus ventas.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FF5C00" strokeWidth="2"/>
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#FF5C00" strokeWidth="2"/>
                </svg>
              </div>
              <p className="text-sm text-[#2D2D5F]">
                Hacemos todos tus deliverys y entregas con nuestro propio servicio de delivery y soporte al cliente.
              </p>
            </div>
          </div>

          <p className="text-gray-500 text-center text-sm mb-6">
            Escríbenos y armamos un flujo personalizado según tu ciudad, tu volumen y tus necesidades.
          </p>

          <button className="w-full bg-[#2D2D5F] text-white py-3 rounded-lg">
            SOY DE <span className="text-[#FF5C00]">OTRO</span> DEPARTAMENTO
          </button>
        </div>
      </section>

      {/* Sección: Hacemos deliveries por ti */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D5F] mb-4">
            Hacemos{' '}
            <span className="text-[#FF5C00]">deliveries</span> por ti
          </h2>

          <p className="text-[#4A4A68] mb-12">
            Ofrecemos varias opciones de delivery para que tus clientes reciban sus pedidos sin que tú te encargues de nada.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-[#FF5C00]">
                  <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[#2D2D5F]">
                Deliveries realizados ese mismo día.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-[#FF5C00]">
                  <path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[#2D2D5F]">
                Puedes usar nuestros paquetes de delivery o adquirirlos por separado.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-[#FF5C00]">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[#2D2D5F]">
                Elige en que rango de horarios tu cliente puede recibir su pedido
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Zonas habilitadas para deliveries */}
      <section className="px-4 py-12 bg-[#2D2D5F] text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Zonas habilitadas{' '}
            <span className="text-[#FF5C00]">para deliveries</span>
          </h2>

          <p className="mb-6">
            En CONECTA contamos con un sistema de deliveries optimizado para asegurar que tus 
            productos lleguen de manera <span className="text-[#FF5C00]">eficiente</span> y{' '}
            <span className="text-[#FF5C00]">segura</span> al cliente final.
          </p>

          <p className="mb-6">
            Todos los deliveries que se encuentren dentro de las zonas definidas de cobertura 
            están incluidos dentro del costo de los deliveries, lo que significa que{' '}
            <span className="text-[#FF5C00]">no pagarás ningún costo adicional</span> por llegar a tus 
            clientes dentro del rango establecido.
          </p>

          <p className="mb-8">
            Esto te permite operar con mayor claridad en tus márgenes, sin sorpresas ni cargos ocultos. 
            Y así llegar a <span className="text-[#FF5C00]">más clientes</span>.
          </p>

          <p className="mb-4">
            Consulta aquí las zonas actualmente habilitadas →{' '}
            <a href="#" className="text-[#FF5C00] underline">Ver zonas de alcance</a>
          </p>

          <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/info/coverage-map.png"
              alt="Mapa de zonas de cobertura"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Sección: Planes */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D5F] mb-6">
            Planes{' '}
            <span className="text-[#FF5C00]">diseñados</span> para 
            emprendedores como <span className="text-[#FF5C00]">tú</span>
          </h2>

          <div className="space-y-4 mb-8">
            <div className="text-[#FF5C00] font-bold">SIN LÍMITE DE INVENTARIO</div>
            <div className="text-[#FF5C00] font-bold">SIN LÍMITE DE ENTREGAS</div>
            <div className="text-[#FF5C00] font-bold">SIN LÍMITE DE VENTAS</div>
          </div>

          <div className="space-y-6">
            {/* Plan Basic LP */}
            <div className="bg-[#2D2D5F] rounded-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/conecta-logo-white.png"
                  alt="Conecta"
                  width={100}
                  height={24}
                />
                <span className="font-bold">BASIC LP</span>
              </div>
              <p className="text-sm mb-4">
                Perfecto para vendedores que buscan presencia y visibilidad en nuestra tienda virtual.
              </p>
              <div className="text-2xl font-bold mb-4">
                Bs 100<span className="text-sm font-normal">/mes</span>
              </div>
              <button className="w-full bg-[#FF5C00] text-white py-2 rounded-lg mb-4">
                ¡Prueba un mes gratis!
              </button>
              <div className="space-y-2 text-sm">
                <div>✓ Espacio para media caja de producto</div>
                <div>✓ Exhibición visible para clientes</div>
                <div>✓ Acceso total a la app personalizada</div>
              </div>
            </div>

            {/* Plan Premium LP */}
            <div className="bg-[#2D2D5F] rounded-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/conecta-logo-white.png"
                  alt="Conecta"
                  width={100}
                  height={24}
                />
                <span className="font-bold">PREMIUM LP</span>
              </div>
              <p className="text-sm mb-4">
                Perfecto para vendedores que buscan destacar en nuestra tienda virtual.
              </p>
              <div className="text-2xl font-bold mb-4">
                Bs 150<span className="text-sm font-normal">/mes</span>
              </div>
              <button className="w-full bg-[#FF5C00] text-white py-2 rounded-lg mb-4">
                ¡Prueba un mes gratis!
              </button>
              <div className="space-y-2 text-sm">
                <div>✓ Espacio para media caja de producto</div>
                <div>✓ Exhibición visible para clientes</div>
                <div>✓ Acceso total a la app personalizada</div>
              </div>
            </div>

            {/* Plan Basic El Alto */}
            <div className="bg-[#2D2D5F] rounded-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/conecta-logo-white.png"
                  alt="Conecta"
                  width={100}
                  height={24}
                />
                <span className="font-bold">BASIC EL ALTO</span>
              </div>
              <p className="text-sm mb-4">
                Ideal para quienes quieren empezar a vender con agilidad y bajo costo en esta zona.
              </p>
              <div className="text-2xl font-bold mb-4">
                Bs 75<span className="text-sm font-normal">/mes</span>
              </div>
              <button className="w-full bg-[#FF5C00] text-white py-2 rounded-lg mb-4">
                ¡Prueba un mes gratis!
              </button>
              <div className="space-y-2 text-sm">
                <div>✓ Espacio para media caja de producto</div>
                <div>✓ Exhibición visible para clientes</div>
                <div>✓ Acceso total a la app personalizada</div>
              </div>
            </div>

            {/* Plan Premium El Alto */}
            <div className="bg-[#2D2D5F] rounded-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/conecta-logo-white.png"
                  alt="Conecta"
                  width={100}
                  height={24}
                />
                <span className="font-bold">PREMIUM EL ALTO</span>
              </div>
              <p className="text-sm mb-4">
                Si no tienes tiempo de realizar tus entregas, este plan es ideal para ti.
              </p>
              <div className="text-2xl font-bold mb-4">
                Bs 115<span className="text-sm font-normal">/mes</span>
              </div>
              <button className="w-full bg-[#FF5C00] text-white py-2 rounded-lg mb-4">
                ¡Prueba un mes gratis!
              </button>
              <div className="space-y-2 text-sm">
                <div>✓ Espacio para media caja de producto</div>
                <div>✓ Exhibición visible para clientes</div>
                <div>✓ Acceso total a la app personalizada</div>
              </div>
            </div>

            {/* Plan Mix */}
            <div className="bg-[#2D2D5F] rounded-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/conecta-logo-white.png"
                  alt="Conecta"
                  width={100}
                  height={24}
                />
                <span className="font-bold">MIX</span>
              </div>
              <p className="text-sm mb-4">
                Para quienes quieren expandirse en ambas sucursales y aumentar su alcance.
              </p>
              <div className="text-2xl font-bold mb-4">
                Bs 250<span className="text-sm font-normal">/mes</span>
              </div>
              <button className="w-full bg-[#FF5C00] text-white py-2 rounded-lg mb-4">
                ¡Prueba un mes gratis!
              </button>
              <div className="space-y-2 text-sm">
                <div>✓ Espacio para media caja de producto</div>
                <div>✓ Exhibición visible para clientes</div>
                <div>✓ Acceso total a la app personalizada</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Cambio de sucursal */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D5F] mb-6">
            ¿Quieres{' '}
            <span className="text-[#FF5C00]">cambiar</span> tus 
            productos de{' '}
            <span className="text-[#FF5C00]">sucursal</span>?
          </h2>

          <p className="text-[#4A4A68] mb-6">
            En Conecta entendemos que tu logística puede cambiar, y por eso te damos la libertad 
            de mover tus productos entre nuestras sucursales de La Paz y El Alto, según donde 
            tengas más ventas, mejores oportunidades o simplemente más comodidad.
          </p>

          <p className="text-[#4A4A68]">
            Ya sea que quieras operar más cerca de tus clientes o que estés probando nuevos 
            mercados, nosotros nos encargamos del traslado.
          </p>
        </div>
      </section>

    </main>
  );
};

export default InfoPage; 