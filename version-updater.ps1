# Powershell script to execute PomXmlUpdater and JsonPackageVersionUpdater

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path

# Path where the Java files will be compiled (same as script)
$buildPath = $scriptPath

# Path where the java classes will look for package.json and pom.xml (same as script)
$folderPath = $scriptPath

# .java files path
$pomXmlUpdaterSrc = Join-Path $scriptPath "PomXmlUpdater.java"
$jsonUpdaterSrc = Join-Path $scriptPath "JsonPackageVersionUpdater.java"

echo "Compiling Java classes..."
javac -d "$buildPath" "$pomXmlUpdaterSrc"
javac -d "$buildPath" "$jsonUpdaterSrc"

if ($LASTEXITCODE -ne 0) {
    echo "Error compiling Java classes."
    exit
}

echo "Running Java classes..."
java -cp "$buildPath" PomXmlUpdater "$folderPath"
java -cp "$buildPath" JsonPackageVersionUpdater "$folderPath"

if ($LASTEXITCODE -ne 0) {
    echo "Error running Java classes."
    exit
}

echo "Java classes executed successfully, removing .class files..."

# Remove .class files
Remove-Item -Path (Join-Path $buildPath "*.class") -Force

