#import "template.typ": *

#show: project.with(
  title: "Proyecto de Lenguajes de Programación II",
  subtitle: "Escuela Superior Politécnica del Literal (ESPOL) - PAO I 2023",
  authors: (
    (name: "Juan Antonio González", email: "juangonz@espol.edu.ec", affiliation: "ESPOL (FIEC)"),
    (name: "Paul Gudiño", email: "pgudino@espol.edu.ec", affiliation: "ESPOL (FIEC)"),
    (name: "Cristopher Villa", email: "cgvilla@espol.edu.ec", affiliation: "ESPOL (FIEC)"),
  ),
  date: "Agosto 27, 2023",
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

= Problemática

Como respuesta a la pandemia de *COVID-19*, se ha observado un incremento en la
demanda de plataformas digitales tanto en el ámbito web como móvil. No obstante,
es importante destacar que no todos los procesos y servicios se encuentran
adecuadamente automatizados, y aún menos, existen plataformas gratuitas o de
fácil acceso para el público en general.

En este contexto, la asignatura de Lenguajes de Programación propone desarrollar
soluciones innovadoras que contribuyan a una sociedad mejor equipada tanto en
herramientas como en conocimientos.

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
2. "Como usuario, quiero poder dar mi opinión sobre la ruta seleccionada por comentarios y votación."
3. "Como usuario, quiero poder añadir rutas como sitios turisticos, áreas protegidas y bosques."
4. "Como usuario, quiero poder eliminar rutas y comentarios seleccionados."

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

Además, para manejar la persistencia de datos en nuestra aplicación,
utilizaremos *Firebase* #cite("firebase"), una base de datos no relacional
proporcionada por *Google*. *Firebase* ofrece una variedad de servicios,
incluyendo autenticación, almacenamiento y una base de datos en tiempo real.

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

El frontend de nuestra aplicación se comunicará con el backend mencionado
anteriormente, esto a través de una _API REST_.

#pagebreak()

= Protototipo

El prototipo de baja fidelidad para este proyecto se centrará en la definición
de las características y funcionalidades clave de la aplicación, así como en la
estructura general de la interfaz de usuario. Este prototipo se utilizará como
una guía visual durante la fase de desarrollo de la aplicación.

Éste será diseñado en la plataforma *Figma* #cite("figma"), a continuación la
sección pertinente.

== Prototipo de Baja Fidelidad en Figma

Se puede acceder a este prototipo a través del siguiente enlace:

#figure(
  image("../assets/proto_01.png", width: 70%),
  caption: "Prototipo de Baja Fidelidad - Pantalla 1"
)

#figure(
  image("../assets/proto_02.png", width: 70%),
  caption: "Prototipo de Baja Fidelidad - Pantalla 2"
)

#figure(
  image("../assets/proto_03.png", width: 70%),
  caption: "Prototipo de Baja Fidelidad - Pantalla 3"
)

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

= Desarrollo

== Backend

#figure(
  image("../assets/endpoints/back_get_rutas.png", width: 100%),
  caption: "Backend: Endpoint GET Ruta"
)

#figure(
  image("../assets/endpoints/back_get_resenia_id.png", width: 100%),
  caption: "Backend: Endpoint GET Reseña por ID"
)

#pagebreak()

#figure(
  image("../assets/endpoints/back_post_ruta.png", width: 100%),
  caption: "Backend: Endpoint POST Ruta #1"
)

#figure(
  image("../assets/endpoints/back_post_rutaDB.png", width: 50%),
  caption: "Backend: Endpoint POST Ruta #2"
)

#pagebreak()

#figure(
  image("../assets/endpoints/back_post_resenia.png", width: 100%),
  caption: "Backend: Endpoint POST Reseña #2"
)

#figure(
  image("../assets/endpoints/back_post_reseniaDB.png", width: 50%),
  caption: "Backend: Endpoint POST Reseña #3"
)

#pagebreak()

#figure(
  image("../assets/endpoints/back_delete_ruta_id01.png", width: 50%),
  caption: "Backend: Endpoint DELETE Ruta #1"
)

#figure(
  image("../assets/endpoints/back_delete_ruta_id02.png", width: 50%),
  caption: "Backend: Endpoint DELETE Ruta #2"
)

#figure(
  image("../assets/endpoints/back_delete_ruta_id03.png", width: 100%),
  caption: "Backend: Endpoint DELETE Ruta #3"
)

#pagebreak()

#figure(
  image("../assets/endpoints/back_delete_ruta_resenia01.png", width: 100%),
  caption: "Backend: Endpoint DELETE Reseña #1"
)

#figure(
  image("../assets/endpoints/back_delete_ruta_resenia02.png", width: 100%),
  caption: "Backend: Endpoint DELETE Reseña #2"
)

#figure(
  image("../assets/endpoints/back_delete_ruta_resenia03.png", width: 100%),
  caption: "Backend: Endpoint DELETE Reseña #3"
)

#pagebreak()

== Frontend

#figure(
  image("../assets/front/front_page_main.png", width: 100%),
  caption: "Frontend: Landing Page"
)

#figure(
  image("../assets/front/front_page_ciudades.png", width: 100%),
  caption: "Frontend: Sección de Ciudades"
)

#figure(
  image("../assets/front/front_page_bosques.png", width: 100%),
  caption: "Frontend: Sección de Bosques"
)

#figure(
  image("../assets/front/front_page_bosques.png", width: 100%),
  caption: "Frontend: Sección de Áreas Protegidas"
)

#figure(
  image("../assets/front/front_page_resenias.png", width: 100%),
  caption: "Frontend: Sección de Reseñas"
)

#figure(
  image("../assets/front/front_page_resenias_agregar.png", width: 100%),
  caption: "Frontend: Sección de Reseñas - Agregar"
)

#pagebreak()

= Conclusiones

== Lenguajes y Herramientas

La elección de Ruby y Sinatra para el desarrollo del backend, así como Deno y
Fresh para el frontend, se basó en una serie de consideraciones pragmáticas y
estratégicas. Ruby, mediante su sintaxis felxible, facilita la escritura de
código limpio y mantenible, mientras que Sinatra, con su enfoque minimalista,
permite una mayor flexibilidad y menos sobrecarga en comparación con otros
frameworks de Ruby. Por otro lado, Deno surge como una alternativa moderna a
Node, ofreciendo características como seguridad por defecto y soporte para
TypeScript de forma nativa. Fresh, por su parte, se destaca por su simplicidad y
eficiencia, permitiendo un desarrollo ágil y eficiente del frontend. Estas
tecnologías, en conjunto, proporcionan una solución robusta y flexible para el
desarrollo de aplicaciones web, justificando plenamente su elección y uso.

Es importante también resaltar que el empleo de estas tecnologías ha sido un
reto para los integrantes de este grupo, ya que no teníamos ningún conocimiento
previo sobre ellas. Sin embargo, esto nos ha permitido aprender nuevas
habilidades y conocimientos que nos serán de gran utilidad en el futuro.

== Experiencia y Aprendizaje
El desarrollo del sitio web de turismo en Ecuador utilizando Deno Fresh y Ruby fue
una experiencia complicada al incio pero despues fue mas facil de entender como 
funciona cada lenguaje. El uso de Deno Fresh permitió un desarrollo de frontend fluido 
y su arquitectura basada en islas facilitó la interactividad del lado del cliente. 
La utilización de Ruby para el backend proporcionó una estructura robusta y eficiente, 
ayudó poder trabajar con JSONs de manera sencilla. El uso de estos dos lenguajes 
permitió la creación de un sitio web interactivo y agradable a la vista del usuario.

== Resultados Alcanzados

#pagebreak()

= Anexos

== Código Fuente

El código fuente de este proyecto se encuentra disponible en el siguiente
#link("https://github.com/anntnzrb/sofg1009-proj02")[enlance a GitHub] \
`<https://github.com/anntnzrb/sofg1009-proj02>`.

#pagebreak()

== Listado de APIS

- `/api/rutas`
- `/api/rutas/:id/resenia`
- `/api/rutas/:id1/resenia/:id2`
- `/api/rutas/:id`
- `/api/rutas/:id`
- `/api/rutas/categoria/:categoria`
- `/api/rutas/categoria/:categoria`
- `/api/rutas/ciudad/:ciudad`
- `/api/rutas/resenia/:id`

#pagebreak()

#bibliography("bib.bib", style: "ieee")