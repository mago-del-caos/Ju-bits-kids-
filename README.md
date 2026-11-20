# Ju-bits Kids 🧒

Tutores con inteligencia artificial para niños de **primaria**, basados en la teoría de las **inteligencias múltiples** de Howard Gardner. Es la versión infantil de [Ju-bits](https://mago-del-caos.github.io/Ju-bits/) (para preparatoria).

**Pensada para usarse en familia:** la configuración la hace mamá, papá o el tutor; el niño solo elige tutor y platica.

## Los tutores

| Tutor | Inteligencia | Su estilo |
|---|---|---|
| **Vera** | Lingüística | Cuentos, rimas, trabalenguas y lectura |
| **Numi** | Lógico-matemática | Números, patrones y acertijos |
| **Cromi** | Visual-espacial | Dibujo, imaginación y construcción |
| **Lira** | Musical | Canciones y ritmo para aprender |
| **Brini** | Corporal | Movimiento, mímica y retos seguros |
| **Ami** | Interpersonal | Amistad, empatía y convivencia |
| **Inti** | Intrapersonal | Emociones, calma y respiración |
| **Nati** | Naturalista | Plantas, animales y cuidado del planeta |
| **Coni** | Pensamiento en red (holístico) | Conecta todas las ideas y a todos los tutores |

## Cómo funciona

1. Un adulto pulsa «Soy mamá, papá o tutor» y resuelve una operación sencilla (candado anti-niños).
2. Pega una **clave gratuita** de [Groq](https://console.groq.com/keys) o de [Gemini](https://aistudio.google.com/apikey). La app la prueba al momento y descubre sola los modelos de texto disponibles. La clave se guarda **solo en el dispositivo** (`localStorage`), nunca en un servidor.
3. El adulto crea el perfil del niño: nombre o apodo, edad, grado e intereses.
4. El niño elige tutor y platica por texto, con **micrófono** o escuchando las respuestas con **voces divertidas**: cada tutor tiene su propio tono y ritmo de voz (síntesis de voz del navegador, en español).

## Seguridad para menores

- **Reglas estrictas en el prompt** de cada tutor: contenido apto para primaria, nunca pedir datos personales y, si el niño cuenta algo que le hace daño, indicarle que lo platique con un adulto de confianza.
- **Filtro de entrada:** detecta temas de adultos, datos personales (p. ej. números de teléfono) y frases de alerta (daño, acoso, autolesión) y responde sin llamar a la IA: con amabilidad, con protección o con acompañamiento según el caso.
- **Filtro de salida:** revisa cada respuesta de la IA antes de mostrarla.
- **Zona de padres** protegida con la operación matemática: cambiar la clave, editar el perfil o borrar todo.
- Ningún filtro es perfecto: se recomienda acompañar al niño en sus primeras sesiones.

## Tecnología

Una sola página (`index.html`), sin servidor: llama directamente a las APIs de Groq y Gemini desde el navegador, con descubrimiento dinámico de modelos y cascada de respaldo (hasta 4 modelos). Voz con Web Speech API (`speechSynthesis` + `SpeechRecognition` en español de México).

Hecho con la Filosofía Josefina: «Hacer siempre y en todo lo mejor».
