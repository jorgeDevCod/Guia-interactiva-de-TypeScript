# 🧠 TypeScript Mastery — Plataforma de Aprendizaje

Una plataforma educativa interactiva para aprender TypeScript desde fundamentos hasta React profesional.Incluye teoría, cheatsheet y 20 ejercicios prácticos con validación instantánea.

---

## 📋 Descripción

    ** TypeScript Mastery ** es un archivo HTML standalone(sin dependencias, sin servidor) que funciona directamente en el navegador.Está diseñada para developers que quieren dominar TypeScript con un enfoque práctico: leer la teoría y resolver ejercicios reales, pegando código desde su editor o escribiéndolo directamente en la plataforma.

---

## ✨ Características

    - ** 10 módulos de teoría ** con ejemplos de código con syntax highlighting
        - ** Cheatsheet de referencia rápida ** con los patrones más usados
            - ** 20 ejercicios prácticos ** con validación instantánea
                - ** Sistema de hints y soluciones ** progresivo
                    - ** Feedback detallado ** que indica exactamente qué falta corregir
                        - ** Barra de progreso ** que rastrea ejercicios completados
                            - ** 100 % offline ** — un solo archivo`.html`, sin servidor ni instalación

---

## 🗂️ Estructura de contenidos

### Nivel 1 — Fundamentos TypeScript

    | Módulo | Temas |
| --------| -------|
| 🔵 Tipos básicos | `string`, `number`, `boolean`, `null`, `undefined`, `unknown`, `void`, `never`.Diferencia crítica entre `any` y`unknown` |
| ⚙️ Funciones tipadas | Tipos en parámetros, tipo de retorno, funciones como tipos, overloads, `ReturnType` |
| 📦 Objetos e Interfaces | Propiedades opcionales`?`, `readonly`, `extends`, intersection`&`, index signatures |
| ⚖️ Type vs Interface | Cuándo usar cada uno, declaration merging, mapped types, tabla comparativa |
| 🔀 Union Types | Union types, narrowing con`typeof`, discriminated unions, type guards personalizados |
| 🧬 Generics | `<T>`, constraints`extends`, múltiples type params, `keyof`, interfaces genéricas |
| 🛠️ Utility Types | `Partial`, `Required`, `Pick`, `Omit`, `Record`, `Readonly`, `NonNullable`, `ReturnType` |

### Nivel 2 — TypeScript + React

    | Módulo | Temas |
| --------| -------|
| ⚛️ Props y componentes | Tipar props con interface, `React.FC`, default props, `React.ReactNode` |
| 🪝 Hooks tipados | `useState<T>`, `useRef<T>`, `useReducer`, `useContext`, custom hooks genéricos |
| 🎯 Eventos y patrones | `ChangeEvent`, `MouseEvent`, `FormEvent`, `forwardRef`, `ComponentProps` |

    ---

## 💡 Ejercicios

20 ejercicios ordenados por dificultad, cubriendo múltiples tecnologías:

| # | Título | Tecnología | Dificultad |
| ---| --------| -----------| -----------|
| 01 | Tipar variables básicas | TypeScript | Fácil |
| 02 | Función con tipos y retorno | TypeScript | Fácil |
| 03 | Interface de Producto | TypeScript | Fácil |
| 04 | Union Types y Narrowing | TypeScript | Fácil |
| 05 | Discriminated Union | TypeScript | Medio |
| 06 | Función genérica | TypeScript | Medio |
| 07 | Utility Types en práctica | TypeScript | Medio |
| 08 | Interface genérica para API | TypeScript | Medio |
| 09 | Transformar array con map y filter | JavaScript | Fácil |
| 10 | Promise y async / await | JavaScript | Medio |
| 11 | Destructuring y Spread | JavaScript | Fácil |
| 12 | Closures y Factory Functions | JavaScript | Medio |
| 13 | Componente funcional tipado | JSX | Fácil |
| 14 | useState con formulario tipado | JSX | Medio |
| 15 | Custom Hook genérico useFetch | JSX | Medio |
| 16 | Mapped Types avanzados | TypeScript | Difícil |
| 17 | groupBy y compose funcional | JavaScript | Difícil |
| 18 | Observable básico y operadores | RxJS | Medio |
| 19 | Subject y BehaviorSubject | RxJS | Difícil |
| 20 | Búsqueda reactiva con switchMap | RxJS + TypeScript | Difícil |

    ---

## 🚀 Cómo usar

### Abrir la plataforma

    ```bash
# Opción 1: Abrir directamente en el navegador
open typescript-platform.html

# Opción 2: Servir con cualquier servidor estático (opcional)
npx serve .
python -m http.server 8080
```

No requiere instalación de dependencias.El archivo funciona como HTML standalone.

### Flujo de estudio recomendado

1. ** Leé el módulo de teoría ** desde el sidebar(Nivel 1 → Nivel 2)
2. ** Consultá el Cheatsheet ** para tener la referencia rápida a mano
3. ** Resolvé los ejercicios ** en tu editor de código favorito(VS Code, WebStorm, etc.)
4. ** Pegá tu solución ** en el área de texto del ejercicio
5. ** Hacé clic en Validar ** — recibirás feedback inmediato con el error exacto
6. Si te trabás, usá **💡 Hint ** para una pista o ** Ver solución ** para la respuesta completa

---

## 🛠️ Cómo funciona la validación

El sistema de validación analiza tu código con expresiones regulares que detectan los patrones clave de cada ejercicio. ** No ejecuta el código ** — verifica que uses las construcciones correctas de TypeScript / JavaScript.

```
Tu código → Regex checks → ✅ Correcto / ❌ Error con mensaje específico
```

Cada ejercicio tiene entre 4 y 6 validaciones encadenadas.Si falla alguna, el mensaje te dice exactamente qué corregir.

---

## 📁 Archivos

    ```
typescript-platform.html   # Toda la plataforma en un solo archivo
README.md                  # Este archivo
```

---

## 🧰 Tecnologías cubiertas

    - ** TypeScript ** — tipos, interfaces, generics, utility types, mapped types
        - ** JavaScript moderno ** — ES6 +, promises, async / await, closures, programación funcional
            - ** React + TypeScript ** — props, hooks, eventos, refs, custom hooks, context
                - ** RxJS ** — observables, subjects, operadores, streams reactivos

---

## 📌 Requisitos

    - Navegador moderno(Chrome, Firefox, Safari, Edge)
        - Sin instalación requerida
            - Para los ejercicios: cualquier editor con soporte TypeScript(recomendado: ** VS Code ** con la extensión TypeScript)

---

## 💡 Tips para aprovechar al máximo

    - Resolvé los ejercicios ** en tu editor real ** para que el compilador de TypeScript te dé feedback en tiempo real, luego pegá la solución para validar
        - No te saltes los módulos de teoría — cada uno tiene patrones que aparecen en los ejercicios
            - Los ejercicios de nivel ** Difícil ** (16, 17, 19, 20) son los más comunes en entrevistas técnicas senior
                - El ** Cheatsheet ** es ideal para tener abierto mientras trabajás con React + TypeScript en proyectos reales

---

## 📄 Licencia

Uso libre para fines educativos.
