#import "template.typ": *

#show: project.with(
  title: "Proyecto de Lenguajes de Programación II",
  authors: (
    (name: "Juan Antonio González", email: "juangonz@espol.edu.ec", affiliation: "ESPOL (FIEC)"),
    (name: "Paul Gudiño", email: "pgudino@espol.edu.ec", affiliation: "ESPOL (FIEC)"),
    (name: "Cristopher Villa", email: "cgvilla@espol.edu.ec", affiliation: "ESPOL (FIEC)"),
  ),
  date: "August 27, 2023",
)

#outline(
  title: [Índice],
  indent: true,
)

#pagebreak()

#outline(
  title: [Lista de Figuras],
  indent: true,
  target: figure.where(kind: image),
)

#pagebreak()

= Características del Proyecto

== Categoría

El proyecto se enmarca en la categoría de desarrollo de aplicaciones web, con un
enfoque específico en el sector turístico.

== Temática y Descripción

El tema central del proyecto es *"Turismo Ec"*. La aplicación estará diseñada
para proporcionar información detallada sobre las rutas turísticas en las
ciudades, bosques y áreas protegidas de Ecuador. Además, presentará guías o
rutas, los sitios más votados y los sitios no recomendados, proporcionando así
una plataforma integral para los turistas que desean explorar Ecuador.

== Alcance

El alcance del proyecto incluye el desarrollo de una aplicación web funcional
que permita a los usuarios explorar diversas rutas turísticas en Ecuador.
Ésta tendrá una interfaz amigable y estará diseñada pensando en el turista. La
aplicación permitirá a los usuarios explorar diferentes rutas turísticas
categorizadas como Ciudad, Bosque y Área Protegida.

Una de las características principales de nuestra aplicación será una
funcionalidad de búsqueda bajo ciertos parámetros. Esto permitirá a los usuarios
encontrar lugares específicos según sus preferencias, como el tipo de entorno
(ciudad, bosque, área protegida), entre otras.

=== Historias de Usuario

1. "Como usuario, quiero poder buscar rutas turísticas en Ecuador filtradas por ciudades, bosques y áreas protegidas."
2. "Como usuario, quiero poder ver las rutas turísticas más votadas en Ecuador."
3. "Como usuario, quiero poder ver las rutas turísticas recomendadas y no recomendas"

== Lenguages de Programación y Paradigmas

Para el desarrollo de este proyecto, se utilizarán dos lenguajes de
programación: *Ruby* para el backend y *JavaScript* (*Typescript*) para el
frontend.

=== Backend

*Ruby* #cite("ruby") es un lenguaje de programación de alto nivel que se centra en la
simplicidad y la productividad. Para el backend de nuestra aplicación,
utilizaremos *Sinatra* #cite("sinatra"), una biblioteca de *Ruby* para la creación de
aplicaciones.

*Sinatra* no sigue el patrón de diseño modelo-vista-controlador (MVC) que sigue
*Ruby on Rails* #cite("rubyonrails"). En lugar de esto, *Sinatra* se centra en
"crear rápidamente aplicaciones web en Ruby con un esfuerzo mínimo". 

*Sinatra* ofrece una arquitectura _orientada a componentes_ que proporciona más
flexibilidad a los desarrolladores. Esto tambíen indica que podemos tener una
aplicación web moderna y completamente funcional con un código fuente mínimo y
un solo archivo.

=== Frontend

Para el frontend de nuestra aplicación, utilizaremos *JavaScript* #cite("javascript"), un lenguaje
de programación de alto nivel que es especialmente eficaz para el desarrollo de
aplicaciones web. *JavaScript* es conocido por su flexibilidad y es compatible
con varios paradigmas de programación, incluyendo la _programación orientada a
objetos_ y la _programación funcional_.

Para mejorar la eficiencia y la seguridad de nuestro desarrollo frontend,
utilizaremos *Deno* #cite("deno"), un entorno de ejecución (_runtime_) para *JavaScript* con
soporte nativo a *TypeScript* #cite("typescript") que se centra en la seguridad y la productividad.
Junto a *Deno*, utilizaremos *Fresh* #cite("fresh"), un framework para *Deno* que nos permite
crear aplicaciones web modernas con un esfuerzo mínimo.

#pagebreak()

= Protototipo de Baja Fidelidad

El prototipo de baja fidelidad para este proyecto se centrará en la definición
de las características y funcionalidades clave de la aplicación, así como en la
estructura general de la interfaz de usuario. Este prototipo se utilizará como
una guía visual durante la fase de desarrollo de la aplicación.

Éste será diseñado en la plataforma Figma, y se puede acceder a él a través del
siguiente enlace: <URL>

#pagebreak()

= Gestión del Proyecto

Hemos decidido utilizar la funcionalidad *"DevContainers"* #cite("devcontainers") de *GitHub* para
gestionar el versionamiento de las tecnologías utilizadas en el desarrollo de
nuestra aplicación.

Un *DevContainer* es una configuración de entorno de desarrollo que se almacena
en la nube. Permite personalizar un proyecto de *GitHub Codespaces* al incluir
archivos de configuración en el repositorio, lo que crea una configuración de
codespace reporducible para todos los usuarios del proyecto. Los *DevContainers*
permiten automatizar una parte de tu entorno de desarrollo y facilitan el inicio
del proceso de codificar

En resumen, la utilización de *DevContainers* nos permitirá gestionar de manera
eficiente el versionamiento de las tecnologías utilizadas en nuestro proyecto,
proporcionando un entorno de desarrollo coherente y estandarizado para todos los
desarrolladores del equipo.

#pagebreak()

#bibliography("bib.bib", style: "ieee")