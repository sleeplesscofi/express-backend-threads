## Clon de Threads

MiClonThreads es una plataforma de redes sociales diseñada para facilitar la comunicación y la interacción entre usuarios a través de publicaciones breves y mensajes. Inspirada en la funcionalidad de Threads, esta aplicación permite a los usuarios compartir pensamientos, noticias, y actualizaciones en tiempo real, seguir a otros usuarios, y participar en conversaciones.

## Características Principales

1. **Registro y Autenticación**:

   - Los usuarios pueden crear una cuenta mediante un formulario de registro.
   - Autenticación segura con correo electrónico y contraseña.
   - Opción de iniciar sesión con cuentas sociales (como Google o Facebook).

2. **Perfil de Usuario**:

   - Cada usuario tiene un perfil personal que muestra su información básica, publicaciones, y seguidores.
   - Opción de editar la información del perfil y la imagen de perfil.

3. **Publicaciones**:

   - Los usuarios pueden crear, editar y eliminar publicaciones.
   - Las publicaciones pueden contener texto y enlaces.
   - Se implementa un sistema de reacciones (me gusta, comentarios).

4. **Feed de Publicaciones**:

   - Un feed que muestra las publicaciones de los usuarios a los que el usuario sigue, con la opción de ver publicaciones populares.
   - Infinite scrolling para cargar más publicaciones a medida que el usuario se desplaza hacia abajo.

5. **Seguimiento de Usuarios**:

   - Los usuarios pueden buscar y seguir a otros usuarios.
   - Notificaciones sobre nuevas publicaciones de usuarios seguidos.

6. **Interacciones**:

   - Los usuarios pueden comentar en publicaciones y ver los comentarios de otros.
   - Posibilidad de responder a comentarios específicos.

7. **Notificaciones**:

   - Sistema de notificaciones en tiempo real sobre interacciones (nuevos seguidores, comentarios, etc.).

8. **Configuración de Privacidad**:

   - Los usuarios pueden gestionar la configuración de privacidad de su perfil y publicaciones.

9. **Interfaz de Usuario**:
   - Diseño atractivo y responsivo utilizando Shadcn UI y Tailwind CSS.
   - Navegación intuitiva con un menú de acceso rápido.

## Configuracion de husky

> [!NOTE]
> Agregar husky, en la version 8 no me dio errores

```bash
pnpm add -D husky@8 lint-staged
```

> [!NOTE]
> Agregar el archivo .lintstagedrc con el siguiente script
```bash
{ "*.ts": ["eslint --fix", "prettier --write"] }
```

> [!NOTE]
> Agregar el script a package.json de husky
```bash
"prepare": "husky install"
```

> [!NOTE]
> Agregar eslint a el repositorio para la solucion de problemas y errores de codigo

```bash
npx eslint --init
```

>[!NOTE]
> Agregar prettier por la extension de lint-staged

```bash
pnpm add prettier --save-dev
```

>[!NOTE]
> Agregar la configuracion en los script de shell de husky para el **pre-commit**

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

## Escafolding de archivos

```bash
📁 proyecto-backend/
│
├── 📁 src/
│   ├── 📁 config/               # Configuración general del proyecto
│   │   ├── db.ts                # Configuración de Prisma y base de datos
│   │   ├── env.ts               # Manejo de variables de entorno
│   │   ├── websocket.ts         # Configuración de WebSockets
│   │   └── redis.ts             # Configuración de Redis
│   │
│   ├── 📁 controllers/          # Controladores para manejar la lógica de cada módulo
│   │   ├── auth.controller.ts
│   │   ├── notifications.controller.ts
│   │   └── users.controller.ts
│   │
│   ├── 📁 helpers/              # Helpers y funciones de utilidad para compartir lógica entre módulos
│   │   ├── dateHelpers.ts       # Ejemplo: Manejo de fechas
│   │   └── validationHelpers.ts # Ejemplo: Validación común entre módulos
│   │
│   ├── 📁 middlewares/          # Middlewares globales y específicos
│   │   ├── auth.middleware.ts   # Middleware para validación de JWT
│   │   ├── error.middleware.ts  # Manejo de errores
│   │   └── validation.middleware.ts # Middleware para Zod
│   │
│   ├── 📁 modules/              # Contiene los módulos principales del proyecto
│   │   ├── 📁 auth/             # Módulo de autenticación
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.dto.ts      # DTOs de validación con Zod
│   │   │   └── auth.test.ts     # Pruebas unitarias con Jest/Supertest
│   │   │
│   │   ├── 📁 notifications/    # Módulo de notificaciones
│   │   │   ├── notifications.service.ts
│   │   │   └── notifications.test.ts
│   │   │
│   │   └── 📁 users/            # Módulo de usuarios
│   │       ├── users.service.ts
│   │       └── users.test.ts
│   │
│   ├── 📁 routes/               # Define todas las rutas de la aplicación
│   │   ├── auth.routes.ts       # Rutas para autenticación
│   │   ├── notifications.routes.ts # Rutas para notificaciones
│   │   └── users.routes.ts      # Rutas para usuarios
│   │
│   ├── 📁 utils/                # Utilidades generales
│   │   ├── logger.ts            # Configuración y manejo de logs
│   │   ├── cache.ts             # Funciones relacionadas con Redis para caché
│   │   └── eventEmitter.ts      # Configuración del EventEmitter
│   │
│   ├── 📁 tests/                # Pruebas de integración y configuración de Jest
│   │   ├── jest.config.ts       # Configuración de Jest
│   │   └── setup.ts             # Configuración global para Jest y Supertest
│   │
│   ├── app.ts                   # Configuración de la aplicación Express
│   ├── server.ts                # Punto de entrada principal del servidor
│   └── prisma/                  # Carpeta de Prisma
│       ├── schema.prisma        # Esquema principal de Prisma
│       └── migrations/          # Carpeta de migraciones de Prisma
│
├── 📁 .husky/                   # Hooks de Husky para pre-commit
│   ├── pre-commit               # Hook para correr ESLint y Prettier
│   └── pre-push                 # Hook para correr pruebas antes de pushear
│
├── 📁 scripts/                  # Scripts para la automatización del proyecto
│   ├── seed.ts                  # Script de seed para la base de datos
│   └── clear-cache.ts           # Script para limpiar el caché de Redis
│
├── .env                         # Variables de entorno (nunca en producción)
├── .env.example                 # Ejemplo de configuración de variables de entorno
├── .eslintrc.js                 # Configuración de ESLint
├── .prettierrc                  # Configuración de Prettier
├── jest.config.js               # Configuración global de Jest
├── tsconfig.json                # Configuración de TypeScript
├── package.json                 # Dependencias y scripts de npm
└── README.md                    # Documentación del proyecto
```