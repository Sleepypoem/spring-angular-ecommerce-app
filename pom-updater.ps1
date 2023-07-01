# Script de PowerShell para compilar y ejecutar la clase Java PomXmlUpdater

# Ruta de la carpeta que contiene la clase PomXmlUpdater (mismo directorio del script)
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$sourcePath = Join-Path $scriptPath "PomXmlUpdater.java"

# Ruta de la carpeta donde se compilarán los archivos .class (mismo directorio del script)
$buildPath = $scriptPath

# Ruta de la carpeta donde se encuentra el archivo .env (mismo directorio del script)
$envPath = Join-Path $scriptPath ".env"

# Ruta de la carpeta donde se realizará la búsqueda y actualización del archivo pom.xml (pasada como argumento)
$folderPath = $args[0]

# Compilación de la clase Java
echo "Compilando la clase Java..."
javac -d "$buildPath" "$sourcePath"

# Verificación de si la compilación fue exitosa
if ($LASTEXITCODE -ne 0) {
    echo "Error en la compilación de la clase Java."
    exit
}

# Ejecución de la clase Java
echo "Ejecutando la clase Java..."
java -cp "$buildPath" PomXmlUpdater "$folderPath"

# Verificación de si la ejecución fue exitosa
if ($LASTEXITCODE -ne 0) {
    echo "Error en la ejecución de la clase Java."
    exit
}

echo "La ejecución de la clase Java ha finalizado correctamente."

# Eliminación del archivo PomXmlUpdater.class
Remove-Item -Path (Join-Path $buildPath "PomXmlUpdater.class") -Force
