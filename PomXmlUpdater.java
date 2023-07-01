import java.io.*;

public class PomXmlUpdater {

    private static final String PACKAGE_NAME = "PACKAGE_NAME";
    private static final String PACKAGE_VERSION = "PACKAGE_VERSION";
    private static final String USAGE = "Usage: java PomXmlUpdater <folder-route>";
    private static final String ENV_FILE_NAME = ".env";
    private static final String POM_FILE_NAME = "pom.xml";
    private static final String ARTIFACT_ID_OPENING_TAG = "<artifactId>";
    private static final String ARTIFACT_ID_CLOSING_TAG = "</artifactId>";
    private static final String VERSION_OPENING_TAG = "<version>";
    private static final String VERSION_CLOSING_TAG = "</version>";
    private static final String PARENT_OPENING_TAG = "<parent>";
    private static final String PARENT_CLOSING_TAG = "</parent>";
    private static final String FOLDER_NOT_FOUND = "Folder doesn't exist or is not valid.";
    private static final String ENV_FILE_NOT_FOUND = ".env file not found, make sure the .env file is in the same folder as this class.";

    public static void main(String[] args) {
        if (args.length != 1) {
            System.out.println(USAGE);
            return;
        }

        String folderPath = args[0];

        File folder = new File(folderPath);

        if (folder.exists() && folder.isDirectory()) {
            updatePomXml(folder);
        } else {
            System.out.println(FOLDER_NOT_FOUND);
        }
    }

    private static void updatePomXml(File folder) {
        File[] files = folder.listFiles();

        if (files != null) {
            for (File file : files) {
                if (file.isDirectory()) {
                    updatePomXml(file);
                } else if (file.getName().equals(POM_FILE_NAME)) {
                    updatePomFile(file);
                }
            }
        }
    }

    private static void updatePomFile(File pomFile) {
        try (BufferedReader reader = new BufferedReader(new FileReader(pomFile))) {
            StringBuilder content = new StringBuilder();
            String line;
            boolean artifactIdUpdated = false;
            boolean versionUpdated = false;
            boolean insideParentTag = false;

            while ((line = reader.readLine()) != null) {
                if (line.contains(PARENT_OPENING_TAG)) {
                    insideParentTag = true;
                }

                if (line.contains(PARENT_CLOSING_TAG)) {
                    insideParentTag = false;
                }

                if (line.contains(ARTIFACT_ID_OPENING_TAG) && line.contains(ARTIFACT_ID_CLOSING_TAG) && !artifactIdUpdated && !insideParentTag) {
                    String packageName = getPackageVariable(PACKAGE_NAME);
                    line = line.replaceFirst("<artifactId>.*</artifactId>", ARTIFACT_ID_OPENING_TAG + packageName + ARTIFACT_ID_CLOSING_TAG);
                    artifactIdUpdated = true;
                }

                if (line.contains(VERSION_OPENING_TAG) && line.contains(VERSION_CLOSING_TAG) && !versionUpdated && !insideParentTag) {
                    String packageVersion = getPackageVariable(PACKAGE_VERSION);
                    line = line.replaceFirst("<version>.*</version>", VERSION_OPENING_TAG + packageVersion + VERSION_CLOSING_TAG);
                    versionUpdated = true;
                }

                content.append(line).append("\n");
            }

            FileWriter writer = new FileWriter(pomFile);
            writer.write(content.toString());
            writer.close();

            System.out.println("pom.xml file successfully updated: " + pomFile.getAbsolutePath());
        } catch (IOException e) {
            System.out.println("Error updating pom.xml: " + e.getMessage());
        }
    }

    private static String getPackageVariable(String variableName) {
        try {
            String envFilePath = PomXmlUpdater.class.getProtectionDomain().getCodeSource().getLocation().getPath() + ENV_FILE_NAME;
            File envFile = new File(envFilePath);

            if (envFile.exists()) {
                BufferedReader reader = new BufferedReader(new FileReader(envFile));
                String line;

                while ((line = reader.readLine()) != null) {
                    String[] parts = line.split("=");

                    if (parts.length == 2 && parts[0].trim().equals(variableName)) {
                        return parts[1].trim();
                    }
                }

                reader.close();
            } else {
                System.out.println(ENV_FILE_NOT_FOUND);
            }
        } catch (IOException e) {
            System.out.println("Error reading .env: " + e.getMessage());
        }

        return "";
    }
}
