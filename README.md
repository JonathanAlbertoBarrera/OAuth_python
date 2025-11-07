# Aplicación OAuth con Python y React

Esta aplicación permite la autenticación mediante Google OAuth 2.0, utilizando Python (Flask) para el backend y React para el frontend.

## Requisitos Previos

- Python 3.8 o superior
- Node.js 14 o superior
- npm o yarn

## Configuración del Backend

1. Navega a la carpeta del backend:
```bash
cd backend
```

2. Crea un entorno virtual:
```bash
# Windows
py -m venv venv
.\venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. Instala las dependencias:
```bash
# Windows
py -m pip install -r requirements.txt

# Linux/Mac
pip install -r requirements.txt
```

4. Configura las credenciales de Google:
   - Ve a [Google Cloud Console](https://console.cloud.google.com/)
   - Crea un nuevo proyecto o selecciona uno existente
   - Ve a "APIs & Services" > "Credentials"
   - Clic en "Create Credentials" > "OAuth 2.0 Client ID"
   - Selecciona "Web application"
   - En "Authorized redirect URIs" agrega:
     * http://localhost:5000/authorize
   - Guarda y copia el Client ID y Client Secret

5. Crea el archivo `.env` en la carpeta backend:
```env
SECRET_KEY=tu_clave_secreta_aqui
GOOGLE_CLIENT_ID=tu_client_id_de_google_aqui
GOOGLE_CLIENT_SECRET=tu_client_secret_de_google_aqui
FRONTEND_URL=http://localhost:5173
```

6. Inicia el servidor:
```bash
# Windows
py app.py

# Linux/Mac
python app.py
```

El backend estará corriendo en http://localhost:5000

## Configuración del Frontend

1. Navega a la carpeta del frontend:
```bash
cd frontendOauth
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

El frontend estará corriendo en http://localhost:5173

## Uso de la Aplicación

1. Abre tu navegador y ve a http://localhost:5173
2. Haz clic en "Iniciar sesión con Google"
3. Selecciona tu cuenta de Google
4. Serás redirigido a la página de bienvenida

## Notas Importantes

- Asegúrate de que tanto el backend como el frontend estén corriendo simultáneamente
- Las credenciales de Google deben mantenerse seguras y nunca compartirse
- El archivo `.env` está en .gitignore para proteger las credenciales
- Para desarrollo local, asegúrate de que los puertos 5000 (backend) y 5173 (frontend) estén disponibles

## Solución de Problemas

Si encuentras errores:

1. Verifica que todas las dependencias estén instaladas correctamente
2. Asegúrate de que los puertos no estén siendo utilizados por otras aplicaciones
3. Confirma que las credenciales de Google estén configuradas correctamente
4. Verifica que los URIs de redirección coincidan exactamente con la configuración en Google Cloud Console