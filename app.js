

( function () {
    // ============================================
    // EXERCISES DATA
    // ============================================
    var exercises = [
        {
            id: 1, num: "01", lang: "TypeScript", diff: "easy",
            title: "Tipar variables básicas",
            desc: "Declará las siguientes variables con los tipos correctos:\n• nombre: string = \"Ana\"\n• edad: number = 25\n• activo: boolean = true\n• dato: unknown = 42  (NO usar any)",
            hint: "Sintaxis: let nombre: string = \"Ana\";\nPara dato usá unknown, nunca any.",
            solution: "let nombre: string = \"Ana\";\nlet edad: number = 25;\nlet activo: boolean = true;\nlet dato: unknown = 42;",
            checks: [
                { r: /nombre\s*:\s*string/, m: "Falta tipar 'nombre' como string" },
                { r: /edad\s*:\s*number/, m: "Falta tipar 'edad' como number" },
                { r: /activo\s*:\s*boolean/, m: "Falta tipar 'activo' como boolean" },
                { r: /dato\s*:\s*unknown/, m: "Usá 'unknown' para dato, no 'any'" },
                { r: /\bany\b/, m: "Evitá 'any'. Usá 'unknown' para datos desconocidos", neg: true }
            ]
        },
        {
            id: 2, num: "02", lang: "TypeScript", diff: "easy",
            title: "Función con tipos y retorno",
            desc: "Escribí una función calcularIVA que:\n• Reciba precio: number\n• Reciba porcentaje: number con default 21\n• Retorne un number con precio + IVA",
            hint: "function calcularIVA(precio: number, porcentaje: number = 21): number {\n  return precio + (precio * porcentaje / 100);\n}",
            solution: "function calcularIVA(precio: number, porcentaje: number = 21): number {\n  return precio + (precio * porcentaje / 100);\n}",
            checks: [
                { r: /calcularIVA/, m: "La función debe llamarse 'calcularIVA'" },
                { r: /precio\s*:\s*number/, m: "El parámetro 'precio' debe ser de tipo number" },
                { r: /\)\s*:\s*number/, m: "La función debe declarar que retorna number" },
                { r: /porcentaje/, m: "Falta el parámetro 'porcentaje'" }
            ]
        },
        {
            id: 3, num: "03", lang: "TypeScript", diff: "easy",
            title: "Interface de Producto",
            desc: "Creá una interface Producto con:\n• id: number (requerido)\n• nombre: string (requerido)\n• precio: number (requerido)\n• descripcion?: string (opcional)\n• readonly stock: number",
            hint: "interface Producto {\n  id: number;\n  nombre: string;\n  precio: number;\n  descripcion?: string;\n  readonly stock: number;\n}",
            solution: "interface Producto {\n  id: number;\n  nombre: string;\n  precio: number;\n  descripcion?: string;\n  readonly stock: number;\n}",
            checks: [
                { r: /interface\s+Producto/, m: "Debe ser una interface llamada 'Producto'" },
                { r: /id\s*:\s*number/, m: "Falta propiedad 'id: number'" },
                { r: /nombre\s*:\s*string/, m: "Falta propiedad 'nombre: string'" },
                { r: /precio\s*:\s*number/, m: "Falta propiedad 'precio: number'" },
                { r: /descripcion\s*\?/, m: "'descripcion' debe ser opcional (usar ?)" },
                { r: /readonly\s+stock/, m: "'stock' debe ser readonly" }
            ]
        },
        {
            id: 4, num: "04", lang: "TypeScript", diff: "easy",
            title: "Union Types y Narrowing",
            desc: "Escribí una función formatearId que:\n• Acepte id: string | number\n• Si es string → retorne en mayúsculas\n• Si es number → retorne 'ID-' + el número\n• Tipo de retorno: string",
            hint: "function formatearId(id: string | number): string {\n  if (typeof id === \"string\") return id.toUpperCase();\n  return \"ID-\" + id;\n}",
            solution: "function formatearId(id: string | number): string {\n  if (typeof id === \"string\") {\n    return id.toUpperCase();\n  }\n  return \"ID-\" + id.toString();\n}",
            checks: [
                { r: /string\s*\|\s*number|number\s*\|\s*string/, m: "El parámetro debe ser de tipo 'string | number'" },
                { r: /typeof\s+\w+\s*===?\s*["']string["']/, m: "Usá typeof para hacer narrowing del tipo" },
                { r: /\)\s*:\s*string/, m: "La función debe declarar retorno string" }
            ]
        },
        {
            id: 5, num: "05", lang: "TypeScript", diff: "medium",
            title: "Discriminated Union",
            desc: "Creá un tipo Figura con union discriminada:\n• { tipo: \"circulo\"; radio: number }\n• { tipo: \"rectangulo\"; ancho: number; alto: number }\n\nLuego creá calcularArea(figura: Figura): number",
            hint: "type Figura =\n  | { tipo: \"circulo\"; radio: number }\n  | { tipo: \"rectangulo\"; ancho: number; alto: number };\n\nfunction calcularArea(figura: Figura): number {\n  if (figura.tipo === \"circulo\") return Math.PI * figura.radio ** 2;\n  return figura.ancho * figura.alto;\n}",
            solution: "type Figura =\n  | { tipo: \"circulo\"; radio: number }\n  | { tipo: \"rectangulo\"; ancho: number; alto: number };\n\nfunction calcularArea(figura: Figura): number {\n  if (figura.tipo === \"circulo\") {\n    return Math.PI * figura.radio ** 2;\n  }\n  return figura.ancho * figura.alto;\n}",
            checks: [
                { r: /type\s+Figura/, m: "Definí el tipo 'Figura' con la keyword 'type'" },
                { r: /circulo/, m: "Falta el caso 'circulo' en Figura" },
                { r: /rectangulo/, m: "Falta el caso 'rectangulo' en Figura" },
                { r: /calcularArea/, m: "Falta la función 'calcularArea'" },
                { r: /Math\.PI|ancho\s*\*\s*alto/, m: "Falta calcular el área correctamente" }
            ]
        },
        {
            id: 6, num: "06", lang: "TypeScript", diff: "medium",
            title: "Función genérica",
            desc: "Creá dos funciones genéricas:\n• primero<T>(arr: T[]): T | undefined → retorna el primer elemento\n• filtrar<T>(arr: T[], predicado: (item: T) => boolean): T[] → filtra el array",
            hint: "function primero<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\nfunction filtrar<T>(arr: T[], predicado: (item: T) => boolean): T[] {\n  return arr.filter(predicado);\n}",
            solution: "function primero<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\n\nfunction filtrar<T>(arr: T[], predicado: (item: T) => boolean): T[] {\n  return arr.filter(predicado);\n}",
            checks: [
                { r: /primero\s*<\s*T\s*>/, m: "La función 'primero' debe ser genérica con <T>" },
                { r: /T\s*\|\s*undefined|undefined\s*\|\s*T/, m: "El retorno de 'primero' debe ser T | undefined" },
                { r: /filtrar\s*<\s*T\s*>/, m: "La función 'filtrar' debe ser genérica con <T>" },
                { r: /\(item\s*:\s*T\)\s*=>\s*boolean/, m: "El predicado debe ser (item: T) => boolean" }
            ]
        },
        {
            id: 7, num: "07", lang: "TypeScript", diff: "medium",
            title: "Utility Types en práctica",
            desc: "Dada: interface Usuario { id: number; nombre: string; email: string; password: string; }\n\nCreá:\n• CreateUsuario → sin id (Omit)\n• UpdateUsuario → todos opcionales sin id (Partial + Omit)\n• PublicUsuario → sin password (Omit)\n• UsuarioPreview → solo id y nombre (Pick)",
            hint: "type CreateUsuario = Omit<Usuario, \"id\">;\ntype UpdateUsuario = Partial<Omit<Usuario, \"id\">>;\ntype PublicUsuario = Omit<Usuario, \"password\">;\ntype UsuarioPreview = Pick<Usuario, \"id\" | \"nombre\">;",
            solution: "interface Usuario { id: number; nombre: string; email: string; password: string; }\n\ntype CreateUsuario = Omit<Usuario, \"id\">;\ntype UpdateUsuario = Partial<Omit<Usuario, \"id\">>;\ntype PublicUsuario = Omit<Usuario, \"password\">;\ntype UsuarioPreview = Pick<Usuario, \"id\" | \"nombre\">;",
            checks: [
                { r: /Omit<\s*Usuario\s*,\s*["']id["']>/, m: "CreateUsuario debe usar Omit para excluir 'id'" },
                { r: /Partial</, m: "UpdateUsuario debe usar Partial<>" },
                { r: /Pick<\s*Usuario/, m: "UsuarioPreview debe usar Pick<Usuario, ...>" },
                { r: /Omit<\s*Usuario\s*,\s*["']password["']>/, m: "PublicUsuario debe excluir 'password' con Omit" }
            ]
        },
        {
            id: 8, num: "08", lang: "TypeScript", diff: "medium",
            title: "Interface genérica para API",
            desc: "Creá una interface genérica ApiResponse<T> con:\n• data: T\n• status: number\n• error?: string\n\nLuego creá un tipo UserListResponse = ApiResponse<User[]>\nY una función fetchUsers(): Promise<ApiResponse<User[]>>",
            hint: "interface ApiResponse<T> { data: T; status: number; error?: string; }\ntype UserListResponse = ApiResponse<User[]>;",
            solution: "interface User { id: number; name: string; }\n\ninterface ApiResponse<T> {\n  data: T;\n  status: number;\n  error?: string;\n}\n\ntype UserListResponse = ApiResponse<User[]>;\n\nasync function fetchUsers(): Promise<ApiResponse<User[]>> {\n  return { data: [], status: 200 };\n}",
            checks: [
                { r: /ApiResponse\s*<\s*T\s*>/, m: "Interface 'ApiResponse' debe ser genérica con <T>" },
                { r: /data\s*:\s*T/, m: "ApiResponse debe tener 'data: T'" },
                { r: /status\s*:\s*number/, m: "ApiResponse debe tener 'status: number'" },
                { r: /ApiResponse<\s*User\s*\[\]/, m: "Falta usar ApiResponse<User[]>" }
            ]
        },
        {
            id: 9, num: "09", lang: "JavaScript", diff: "easy",
            title: "Transformar array con map y filter",
            desc: "Dado el array:\nconst productos = [{id:1,nombre:\"Manzana\",precio:1.5,activo:true},{id:2,nombre:\"Pera\",precio:2,activo:false},{id:3,nombre:\"Uva\",precio:3.5,activo:true}]\n\nUsando filter + map:\n1. Filtrá solo los activos\n2. Retorná objetos {nombre, precioConIVA} donde precioConIVA = precio * 1.21",
            hint: "productos.filter(p => p.activo).map(p => ({ nombre: p.nombre, precioConIVA: p.precio * 1.21 }))",
            solution: "const productos = [{id:1,nombre:\"Manzana\",precio:1.5,activo:true},{id:2,nombre:\"Pera\",precio:2,activo:false},{id:3,nombre:\"Uva\",precio:3.5,activo:true}];\n\nconst resultado = productos\n  .filter(p => p.activo)\n  .map(p => ({ nombre: p.nombre, precioConIVA: p.precio * 1.21 }));",
            checks: [
                { r: /\.filter\(/, m: "Usá .filter() para filtrar los productos activos" },
                { r: /\.map\(/, m: "Usá .map() para transformar cada producto" },
                { r: /activo/, m: "Filtrá por la propiedad 'activo'" },
                { r: /1\.21|precioConIVA/, m: "Calculá precioConIVA multiplicando por 1.21" }
            ]
        },
        {
            id: 10, num: "10", lang: "JavaScript", diff: "medium",
            title: "Promise y async/await",
            desc: "Creá obtenerUsuario(id) que:\n1. Retorne una Promise\n2. Si id > 0 → resuelva con {id, nombre: \"Usuario \" + id} después de 1 segundo\n3. Si id <= 0 → rechace con Error(\"ID inválido\")\n\nLuego creá main() async con try/catch.",
            hint: "function obtenerUsuario(id) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => { if(id > 0) resolve({id}); else reject(new Error('ID inválido')); }, 1000);\n  });\n}",
            solution: "function obtenerUsuario(id) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (id > 0) resolve({ id, nombre: \"Usuario \" + id });\n      else reject(new Error(\"ID inválido\"));\n    }, 1000);\n  });\n}\n\nasync function main() {\n  try {\n    const user = await obtenerUsuario(1);\n    console.log(user);\n  } catch (error) {\n    console.error(error.message);\n  }\n}",
            checks: [
                { r: /new\s+Promise/, m: "Usá 'new Promise' para crear la promesa" },
                { r: /resolve\s*\(|reject\s*\(/, m: "Falta llamar a resolve() o reject()" },
                { r: /setTimeout/, m: "Usá setTimeout para el delay" },
                { r: /async\s+function|=\s*async/, m: "Creá una función async" },
                { r: /await\s+obtenerUsuario/, m: "Usá await para esperar la promesa" },
                { r: /try\s*\{|catch\s*\(/, m: "Manejá el error con try/catch" }
            ]
        },
        {
            id: 11, num: "11", lang: "JavaScript", diff: "easy",
            title: "Destructuring y Spread",
            desc: "Resolvé:\n1. Extraé nombre y email del objeto user = {id:1,nombre:\"Ana\",email:\"ana@mail.com\",rol:\"admin\"}, renombrando nombre a userName\n2. Mergeá base={a:1,b:2} y extra={b:3,c:4} donde extra sobreescribe\n3. Cloná nums=[1,2,3] y agregá 4 al final",
            hint: "const { nombre: userName, email } = user;\nconst merged = { ...base, ...extra };\nconst nuevoArray = [...nums, 4];",
            solution: "const user = {id:1,nombre:\"Ana\",email:\"ana@mail.com\",rol:\"admin\"};\nconst { nombre: userName, email } = user;\n\nconst base = {a:1,b:2};\nconst extra = {b:3,c:4};\nconst merged = { ...base, ...extra };\n\nconst nums = [1,2,3];\nconst nuevoArray = [...nums, 4];",
            checks: [
                { r: /\{\s*nombre\s*:\s*userName/, m: "Usá destructuring con rename: { nombre: userName }" },
                { r: /\.\.\.\s*base/, m: "Usá spread ...base para mergear" },
                { r: /\.\.\.\s*extra/, m: "Usá spread ...extra para mergear" },
                { r: /\.\.\.\s*nums/, m: "Usá spread ...nums para clonar el array" }
            ]
        },
        {
            id: 12, num: "12", lang: "JavaScript", diff: "medium",
            title: "Closures y Factory Functions",
            desc: "Creá crearContador(inicio = 0) que retorne un objeto con:\n• incrementar() → suma 1\n• decrementar() → resta 1\n• obtenerValor() → retorna el valor actual\n• resetear() → vuelve al valor inicial\n\nEl estado NO debe ser accesible desde afuera (closure).",
            hint: "function crearContador(inicio = 0) {\n  let contador = inicio;\n  return {\n    incrementar: () => { contador++; },\n    obtenerValor: () => contador,\n    resetear: () => { contador = inicio; }\n  };\n}",
            solution: "function crearContador(inicio = 0) {\n  let contador = inicio;\n  return {\n    incrementar: () => { contador++; },\n    decrementar: () => { contador--; },\n    obtenerValor: () => contador,\n    resetear: () => { contador = inicio; }\n  };\n}",
            checks: [
                { r: /crearContador/, m: "Creá la función 'crearContador'" },
                { r: /return\s*\{/, m: "La función debe retornar un objeto" },
                { r: /incrementar/, m: "Falta el método 'incrementar'" },
                { r: /decrementar/, m: "Falta el método 'decrementar'" },
                { r: /obtenerValor/, m: "Falta el método 'obtenerValor'" },
                { r: /resetear/, m: "Falta el método 'resetear'" }
            ]
        },
        {
            id: 13, num: "13", lang: "JSX", diff: "easy",
            title: "Componente funcional tipado",
            desc: "Creá TarjetaProducto con props:\n• nombre: string\n• precio: number\n• imagen?: string (opcional)\n• enOferta?: boolean (default false)\n\nMostrá: nombre, precio con $, OFERTA si corresponde, img si hay imagen.",
            hint: "interface TarjetaProductoProps { nombre: string; precio: number; imagen?: string; enOferta?: boolean; }\nconst TarjetaProducto = ({ nombre, precio, enOferta = false }: TarjetaProductoProps) => ...;\n{enOferta && <span>OFERTA</span>}",
            solution: "interface TarjetaProductoProps {\n  nombre: string;\n  precio: number;\n  imagen?: string;\n  enOferta?: boolean;\n}\n\nconst TarjetaProducto = ({ nombre, precio, imagen, enOferta = false }: TarjetaProductoProps) => (\n  <div>\n    {imagen && <img src={imagen} alt={nombre} />}\n    <h3>{nombre}</h3>\n    <p>${precio.toFixed(2)}</p>\n    {enOferta && <span style={{color:'red'}}>OFERTA</span>}\n  </div>\n);",
            checks: [
                { r: /TarjetaProducto/, m: "Creá el componente 'TarjetaProducto'" },
                { r: /nombre\s*:\s*string/, m: "Falta tipar 'nombre' como string" },
                { r: /precio\s*:\s*number/, m: "Falta tipar 'precio' como number" },
                { r: /imagen\s*\?/, m: "'imagen' debe ser prop opcional" },
                { r: /enOferta/, m: "Falta la prop 'enOferta'" },
                { r: /enOferta\s*&&|enOferta\s*\?/, m: "Mostrá OFERTA condicionalmente" }
            ]
        },
        {
            id: 14, num: "14", lang: "JSX", diff: "medium",
            title: "useState con formulario tipado",
            desc: "Creá FormularioLogin con TypeScript + React:\n1. Interface FormState con email y password (string)\n2. useState<FormState> para el estado\n3. handleChange con React.ChangeEvent<HTMLInputElement>\n4. handleSubmit con React.FormEvent<HTMLFormElement>\n5. Mostrar error si email no contiene '@'",
            hint: "interface FormState { email: string; password: string; }\nconst [form, setForm] = useState<FormState>({email:\"\", password:\"\"});\nconst handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};",
            solution: "interface FormState { email: string; password: string; }\n\nconst FormularioLogin = () => {\n  const [form, setForm] = useState<FormState>({ email: \"\", password: \"\" });\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));\n  };\n  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    console.log(form);\n  };\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name=\"email\" value={form.email} onChange={handleChange} />\n      <input name=\"password\" type=\"password\" value={form.password} onChange={handleChange} />\n      {form.email && !form.email.includes(\"@\") && <span>Email inválido</span>}\n      <button type=\"submit\">Iniciar sesión</button>\n    </form>\n  );\n};",
            checks: [
                { r: /interface\s+FormState/, m: "Creá la interface 'FormState'" },
                { r: /useState\s*<\s*FormState\s*>/, m: "Tipá el useState con <FormState>" },
                { r: /React\.ChangeEvent\s*<\s*HTMLInputElement\s*>/, m: "Usá React.ChangeEvent<HTMLInputElement> para onChange" },
                { r: /e\.preventDefault\(\)/, m: "Prevenī el submit con e.preventDefault()" },
                { r: /React\.FormEvent\s*<\s*HTMLFormElement\s*>/, m: "Tipá el form event como React.FormEvent<HTMLFormElement>" },
                { r: /@|includes\(["']@["']\)/, m: "Validá que el email contenga '@'" }
            ]
        },
        {
            id: 15, num: "15", lang: "JSX", diff: "medium",
            title: "Custom Hook genérico useFetch",
            desc: "Creá useFetch<T>(url: string) que retorne:\n{ data: T | null; loading: boolean; error: string | null }\n\nUsá useState y useEffect correctamente tipados.",
            hint: "function useFetch<T>(url: string) {\n  const [data, setData] = useState<T | null>(null);\n  const [loading, setLoading] = useState<boolean>(true);\n  useEffect(() => { fetch(url).then(r => r.json()).then(setData); }, [url]);\n  return { data, loading, error };\n}",
            solution: "function useFetch<T>(url: string): { data: T | null; loading: boolean; error: string | null } {\n  const [data, setData] = useState<T | null>(null);\n  const [loading, setLoading] = useState<boolean>(true);\n  const [error, setError] = useState<string | null>(null);\n  useEffect(() => {\n    fetch(url)\n      .then(r => r.json())\n      .then((d: T) => { setData(d); setLoading(false); })\n      .catch((e: Error) => { setError(e.message); setLoading(false); });\n  }, [url]);\n  return { data, loading, error };\n}",
            checks: [
                { r: /useFetch\s*<\s*T\s*>/, m: "El hook debe ser genérico: useFetch<T>" },
                { r: /useState\s*<\s*T\s*\|\s*null\s*>/, m: "Usá useState<T | null> para data" },
                { r: /useState\s*<\s*boolean\s*>/, m: "Usá useState<boolean> para loading" },
                { r: /useState\s*<\s*string\s*\|\s*null\s*>/, m: "Usá useState<string | null> para error" },
                { r: /useEffect/, m: "Usá useEffect para el fetch" },
                { r: /return\s*\{[^}]*data/, m: "Retorná { data, loading, error }" }
            ]
        },
        {
            id: 16, num: "16", lang: "TypeScript", diff: "hard",
            title: "Mapped Types avanzados",
            desc: "Creá los siguientes tipos avanzados:\n1. Nullable<T> → todos los campos pueden ser null\n2. DeepPartial<T> → Partial recursivo (si el valor es objeto, también lo hace Partial)\n3. FunctionKeys<T> → extrae solo las keys cuyos valores son funciones",
            hint: "type Nullable<T> = { [K in keyof T]: T[K] | null };\ntype DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };\ntype FunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];",
            solution: "type Nullable<T> = { [K in keyof T]: T[K] | null };\n\ntype DeepPartial<T> = {\n  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];\n};\n\ntype FunctionKeys<T> = {\n  [K in keyof T]: T[K] extends Function ? K : never;\n}[keyof T];",
            checks: [
                { r: /Nullable\s*<\s*T\s*>/, m: "Creá el tipo Nullable<T>" },
                { r: /T\[K\]\s*\|\s*null/, m: "En Nullable, cada valor debe ser T[K] | null" },
                { r: /DeepPartial\s*<\s*T\s*>/, m: "Creá el tipo DeepPartial<T>" },
                { r: /extends\s+object/, m: "En DeepPartial usá 'extends object'" },
                { r: /FunctionKeys\s*<\s*T\s*>/, m: "Creá el tipo FunctionKeys<T>" },
                { r: /extends\s+Function/, m: "En FunctionKeys usá 'extends Function'" }
            ]
        },
        {
            id: 17, num: "17", lang: "JavaScript", diff: "hard",
            title: "Programación funcional — groupBy y compose",
            desc: "Implementá:\n1. groupBy(arr, fn) → agrupa por el resultado de fn\n   Ej: groupBy([1,2,3,4], n => n%2===0?'par':'impar') => {par:[2,4], impar:[1,3]}\n2. compose(...fns) → compone funciones de derecha a izquierda\n3. pipe(...fns) → compone de izquierda a derecha",
            hint: "groupBy: usar reduce para construir el objeto\ncompose: fns.reduceRight((acc, fn) => fn(acc), x)\npipe: fns.reduce((acc, fn) => fn(acc), x)",
            solution: "function groupBy(arr, fn) {\n  return arr.reduce((acc, item) => {\n    const key = fn(item);\n    if (!acc[key]) acc[key] = [];\n    acc[key].push(item);\n    return acc;\n  }, {});\n}\n\nconst compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);\nconst pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);",
            checks: [
                { r: /groupBy/, m: "Implementá la función 'groupBy'" },
                { r: /\.reduce\(/, m: "Usá reduce para implementar groupBy" },
                { r: /compose/, m: "Implementá la función 'compose'" },
                { r: /reduceRight/, m: "En compose usá reduceRight (derecha a izquierda)" },
                { r: /pipe/, m: "Implementá la función 'pipe'" }
            ]
        },
        {
            id: 18, num: "18", lang: "RxJS", diff: "medium",
            title: "Observable básico y operadores",
            desc: "Con RxJS:\n1. Creá un Observable<number> que emita 1, 2, 3\n2. Aplicá map (multiplica por 2) y filter (solo pares)\n3. Suscribite y console.log los valores\n\nImportá desde 'rxjs' y 'rxjs/operators'.",
            hint: "import { of } from 'rxjs';\nimport { map, filter } from 'rxjs/operators';\nof(1,2,3).pipe(map(n => n*2), filter(n => n%2===0)).subscribe(console.log);",
            solution: "import { of, Observable } from 'rxjs';\nimport { map, filter } from 'rxjs/operators';\n\nconst numeros$: Observable<number> = of(1, 2, 3);\n\nnumeros$.pipe(\n  map(n => n * 2),\n  filter(n => n % 2 === 0)\n).subscribe(val => console.log(val));",
            checks: [
                { r: /rxjs/, m: "Importá desde 'rxjs'" },
                { r: /of\s*\(|from\s*\(|new\s+Observable/, m: "Creá un Observable con of(), from() o new Observable()" },
                { r: /map\s*\(/, m: "Usá el operador map()" },
                { r: /filter\s*\(/, m: "Usá el operador filter()" },
                { r: /\.pipe\s*\(/, m: "Usá .pipe() para encadenar operadores" },
                { r: /\.subscribe\s*\(/, m: "Suscribite con .subscribe()" }
            ]
        },
        {
            id: 19, num: "19", lang: "RxJS", diff: "hard",
            title: "Subject y BehaviorSubject",
            desc: "Implementá un store reactivo:\n1. BehaviorSubject<number> para contador con valor inicial 0\n2. Observable con .asObservable()\n3. Funciones incrementar() y decrementar() tipadas como void\n4. Suscribite e imprimí cada cambio",
            hint: "const contador$ = new BehaviorSubject<number>(0);\nconst valor$ = contador$.asObservable();\nfunction incrementar(): void { contador$.next(contador$.getValue() + 1); }",
            solution: "import { BehaviorSubject } from 'rxjs';\n\nconst contador$ = new BehaviorSubject<number>(0);\nconst valor$ = contador$.asObservable();\n\nfunction incrementar(): void { contador$.next(contador$.getValue() + 1); }\nfunction decrementar(): void { contador$.next(contador$.getValue() - 1); }\n\nvalor$.subscribe(val => console.log('Contador:', val));\nincrementar();\nincrementar();\ndecrementar();",
            checks: [
                { r: /BehaviorSubject\s*<\s*number\s*>/, m: "Creá un BehaviorSubject<number>" },
                { r: /asObservable\s*\(\s*\)/, m: "Usá .asObservable() para exponer el Observable" },
                { r: /incrementar/, m: "Implementá la función 'incrementar'" },
                { r: /decrementar/, m: "Implementá la función 'decrementar'" },
                { r: /\.next\s*\(/, m: "Usá .next() para emitir valores" },
                { r: /getValue\s*\(\s*\)/, m: "Usá .getValue() para leer el valor actual" }
            ]
        },
        {
            id: 20, num: "20", lang: "RxJS + TypeScript", diff: "hard",
            title: "Búsqueda reactiva con switchMap",
            desc: "Implementá búsqueda reactiva tipada:\n1. Subject<string> para el input de búsqueda\n2. debounceTime(300) para esperar que el usuario deje de escribir\n3. distinctUntilChanged() para no repetir búsquedas\n4. switchMap para cancelar búsquedas anteriores\n5. Función buscar(query: string): Observable<string[]>",
            hint: "const busqueda$ = new Subject<string>();\nbusqueda$.pipe(debounceTime(300), distinctUntilChanged(), switchMap(q => buscar(q))).subscribe(...)",
            solution: "import { Subject, Observable, from } from 'rxjs';\nimport { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';\n\nfunction buscar(query: string): Observable<string[]> {\n  return from(fetch('/api/search?q=' + query).then(r => r.json()));\n}\n\nconst busqueda$ = new Subject<string>();\n\nbusqueda$.pipe(\n  debounceTime(300),\n  distinctUntilChanged(),\n  switchMap((query: string) => buscar(query))\n).subscribe((resultados: string[]) => console.log(resultados));",
            checks: [
                { r: /Subject\s*<\s*string\s*>/, m: "Creá un Subject<string> para la búsqueda" },
                { r: /debounceTime/, m: "Usá debounceTime para el delay" },
                { r: /distinctUntilChanged/, m: "Usá distinctUntilChanged para evitar duplicados" },
                { r: /switchMap/, m: "Usá switchMap para cancelar búsquedas anteriores" },
                { r: /Observable\s*<\s*string\s*\[\]/, m: "Tipá la función con Observable<string[]>" }
            ]
        }
    ];

    // ============================================
    // VALIDATION ENGINE
    // ============================================
    function runChecks( code, checks ) {
        for ( var i = 0; i < checks.length; i++ ) {
            var c = checks[ i ];
            if ( c.neg ) {
                if ( c.r.test( code ) ) return { ok: false, msg: c.m };
            } else {
                if ( !c.r.test( code ) ) return { ok: false, msg: c.m };
            }
        }
        return { ok: true };
    }

    // ============================================
    // STATE
    // ============================================
    var solved = {};

    function updateProgress() {
        var count = Object.keys( solved ).length;
        var pct = Math.round( count / exercises.length * 100 );
        var fill = document.getElementById( 'progress-fill' );
        var pctEl = document.getElementById( 'progress-pct' );
        var badge = document.getElementById( 'ex-badge' );
        if ( fill ) fill.style.width = pct + '%';
        if ( pctEl ) pctEl.textContent = pct + '%';
        if ( badge ) badge.textContent = count + '/' + exercises.length;
    }

    // ============================================
    // RENDER EXERCISES — usando DOM API puro
    // ============================================
    function renderExercises() {
        var container = document.getElementById( 'exercises-container' );
        if ( !container ) return;
        container.innerHTML = '';

        var diffMap = { easy: 'easy', medium: 'med', hard: 'hard' };
        var diffLabel = { easy: 'Fácil', medium: 'Medio', hard: 'Difícil' };

        for ( var i = 0; i < exercises.length; i++ ) {
            var ex = exercises[ i ];
            var card = document.createElement( 'div' );
            card.className = 'exercise-card';
            card.id = 'ex-card-' + ex.id;

            // HEADER
            var header = document.createElement( 'div' );
            header.className = 'exercise-header';
            header.setAttribute( 'onclick', 'toggleEx(' + ex.id + ')' );

            var numEl = document.createElement( 'div' );
            numEl.className = 'exercise-num';
            numEl.id = 'ex-num-' + ex.id;
            numEl.textContent = ex.num;

            var info = document.createElement( 'div' );
            info.className = 'exercise-info';

            var titleEl = document.createElement( 'div' );
            titleEl.className = 'exercise-title';
            titleEl.textContent = ex.title;

            var meta = document.createElement( 'div' );
            meta.className = 'exercise-meta';

            var diffBadge = document.createElement( 'span' );
            diffBadge.className = 'diff ' + ( diffMap[ ex.diff ] || ex.diff );
            diffBadge.textContent = diffLabel[ ex.diff ] || ex.diff;

            var langBadge = document.createElement( 'span' );
            langBadge.className = 'exercise-type';
            langBadge.textContent = ex.lang;

            meta.appendChild( diffBadge );
            meta.appendChild( langBadge );
            info.appendChild( titleEl );
            info.appendChild( meta );

            var toggleArrow = document.createElement( 'span' );
            toggleArrow.className = 'exercise-toggle';
            toggleArrow.id = 'toggle-' + ex.id;
            toggleArrow.textContent = '▼';

            header.appendChild( numEl );
            header.appendChild( info );
            header.appendChild( toggleArrow );

            // BODY
            var body = document.createElement( 'div' );
            body.className = 'exercise-body';
            body.id = 'body-' + ex.id;

            var descEl = document.createElement( 'div' );
            descEl.className = 'exercise-desc';
            descEl.style.whiteSpace = 'pre-wrap';
            descEl.textContent = ex.desc;

            // Solution area
            var solArea = document.createElement( 'div' );
            solArea.className = 'solution-area';

            var solLabel = document.createElement( 'div' );
            solLabel.className = 'solution-label';
            solLabel.textContent = 'Tu solución';

            var textarea = document.createElement( 'textarea' );
            textarea.className = 'solution-input';
            textarea.id = 'input-' + ex.id;
            textarea.placeholder = '// Escribí o pegá tu código aquí...\n// Podés resolverlo en tu editor local y pegar el resultado';

            var actions = document.createElement( 'div' );
            actions.className = 'solution-actions';

            var btnValidar = document.createElement( 'button' );
            btnValidar.className = 'btn btn-primary';
            btnValidar.textContent = '▶ Validar';
            btnValidar.setAttribute( 'onclick', 'validateEx(' + ex.id + ')' );

            var btnSol = document.createElement( 'button' );
            btnSol.className = 'btn btn-secondary';
            btnSol.textContent = 'Ver solución';
            btnSol.setAttribute( 'onclick', 'toggleSol(' + ex.id + ')' );

            var btnHint = document.createElement( 'button' );
            btnHint.className = 'hint-toggle';
            btnHint.textContent = '💡 Hint';
            btnHint.setAttribute( 'onclick', 'toggleHint(' + ex.id + ')' );

            actions.appendChild( btnValidar );
            actions.appendChild( btnSol );
            actions.appendChild( btnHint );

            var hintBox = document.createElement( 'div' );
            hintBox.className = 'hint-box';
            hintBox.id = 'hint-' + ex.id;
            hintBox.style.whiteSpace = 'pre-wrap';
            hintBox.textContent = ex.hint;

            var fbBox = document.createElement( 'div' );
            fbBox.className = 'feedback';
            fbBox.id = 'fb-' + ex.id;

            var solBox = document.createElement( 'div' );
            solBox.className = 'expected-solution';
            solBox.id = 'sol-' + ex.id;
            var solBoxLabel = document.createElement( 'div' );
            solBoxLabel.className = 'expected-label';
            solBoxLabel.textContent = 'SOLUCIÓN CORRECTA';
            var solPre = document.createElement( 'pre' );
            solPre.textContent = ex.solution;
            solBox.appendChild( solBoxLabel );
            solBox.appendChild( solPre );

            solArea.appendChild( solLabel );
            solArea.appendChild( textarea );
            solArea.appendChild( actions );
            solArea.appendChild( hintBox );
            solArea.appendChild( fbBox );
            solArea.appendChild( solBox );

            body.appendChild( descEl );
            body.appendChild( solArea );

            card.appendChild( header );
            card.appendChild( body );
            container.appendChild( card );
        }

        updateProgress();
    }

    // ============================================
    // INTERACTIONS
    // ============================================
    window.toggleEx = function ( id ) {
        var body = document.getElementById( 'body-' + id );
        var arr = document.getElementById( 'toggle-' + id );
        if ( !body ) return;
        var open = body.classList.contains( 'open' );
        body.classList.toggle( 'open', !open );
        if ( arr ) arr.classList.toggle( 'open', !open );
    };

    window.toggleHint = function ( id ) {
        var el = document.getElementById( 'hint-' + id );
        if ( el ) el.classList.toggle( 'show' );
    };

    window.toggleSol = function ( id ) {
        var el = document.getElementById( 'sol-' + id );
        if ( el ) el.classList.toggle( 'show' );
    };

    window.validateEx = function ( id ) {
        var ex = null;
        for ( var i = 0; i < exercises.length; i++ ) {
            if ( exercises[ i ].id === id ) { ex = exercises[ i ]; break; }
        }
        if ( !ex ) return;

        var textarea = document.getElementById( 'input-' + id );
        var fb = document.getElementById( 'fb-' + id );
        var code = textarea ? textarea.value.trim() : '';

        if ( !code ) {
            fb.className = 'feedback show error';
            fb.innerHTML = '<div class="fb-title">⚠️ Sin código</div>Escribí tu solución antes de validar.';
            return;
        }

        var result = runChecks( code, ex.checks );

        if ( result.ok ) {
            fb.className = 'feedback show success';
            fb.innerHTML = '<div class="fb-title">✅ ¡Correcto! Ejercicio completado.</div>Tu código cumple todos los requisitos. ¡Excelente trabajo!';
            solved[ id ] = true;
            var numEl = document.getElementById( 'ex-num-' + id );
            if ( numEl ) { numEl.textContent = '✓'; numEl.classList.add( 'done' ); }
            updateProgress();
        } else {
            fb.className = 'feedback show error';
            fb.innerHTML = '<div class="fb-title">❌ Hay un problema</div><strong>Error:</strong> ' + result.msg + '<br><br><em>Revisá ese punto e intentá de nuevo. Usá Hint si necesitás ayuda.</em>';
        }
    };

    // ============================================
    // NAVIGATION
    // ============================================
    window.showPage = function ( pageId ) {
        var pages = document.querySelectorAll( '.page' );
        for ( var i = 0; i < pages.length; i++ ) pages[ i ].classList.remove( 'active' );
        var navItems = document.querySelectorAll( '.nav-item' );
        for ( var i = 0; i < navItems.length; i++ ) navItems[ i ].classList.remove( 'active' );

        var page = document.getElementById( 'page-' + pageId );
        if ( page ) page.classList.add( 'active' );

        var main = document.getElementById( 'main' );
        if ( main ) main.scrollTop = 0;

        for ( var i = 0; i < navItems.length; i++ ) {
            var oc = navItems[ i ].getAttribute( 'onclick' ) || '';
            if ( oc.indexOf( "'" + pageId + "'" ) !== -1 ) navItems[ i ].classList.add( 'active' );
        }

        closeSidebar();
    };

    window.toggleSidebar = function () {
        document.getElementById( 'sidebar' ).classList.toggle( 'open' );
        document.getElementById( 'overlay' ).classList.toggle( 'open' );
    };

    window.closeSidebar = function () {
        document.getElementById( 'sidebar' ).classList.remove( 'open' );
        document.getElementById( 'overlay' ).classList.remove( 'open' );
    };

    // INIT — ejecutar inmediatamente, sin esperar DOMContentLoaded
    renderExercises();

} )();
