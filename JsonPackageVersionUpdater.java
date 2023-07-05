import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class JsonPackageVersionUpdater {

    private static final String IGNORE_FOLDER = "node_modules";
    private static final String USAGE_HINT = "Usage: java JsonPackageVersionUpdater.jar <folder>";
    private static final String VERSION_PROPERTY = "version";
    private static final String FILE_NAME = "package.json";
    private static final String SUCCESS_MESSAGE = "package.json updated successfully";
    private static final String ERROR_MESSAGE = "Error updating the file";
    private static final String ERROR_MESSAGE_NO_ENV_FILE = "The .env file was not found, make sure it exists and it is located on the same folder as this class";
    private static final String ERROR_MESSAGE_NO_VERSION_PROPERTY = "The .env file does not have a VERSION property";
    private static final String ERROR_MESSAGE_INVALID_ROUTE = "The folder path is not valid";
    private static final String ERROR_MESSAGE_READING_ENV_ERROR = "Error reading .env file";

    public static void main(String[] args) {
        if (args.length < 1) {
            System.out.println(USAGE_HINT);
            return;
        }

        String folderPath = args[0];
        String envPath = folderPath + File.separator + ".env";

        String version = getEnvVariable(envPath, "VERSION");

        searchAndUpdatePackageFile(folderPath, FILE_NAME, VERSION_PROPERTY, version);

        System.out.println(SUCCESS_MESSAGE);
    }

    private static void searchAndUpdatePackageFile(String folderPath, String fileName, String property, String value) {
        File folder = new File(folderPath);

        if (!folder.exists() || !folder.isDirectory()) {
            System.out.println(ERROR_MESSAGE_INVALID_ROUTE);
            return;
        }

        searchAndUpdatePackageFileRecursive(folder, fileName, property, value);
    }

    private static void searchAndUpdatePackageFileRecursive(File folder, String fileName, String property,
            String value) {
        File[] files = folder.listFiles();

        if (files == null) {
            return;
        }

        for (File file : files) {
            if (file.isDirectory() && file.getName().equals(IGNORE_FOLDER)) {
                continue;
            }

            if (file.isDirectory()) {
                searchAndUpdatePackageFileRecursive(file, fileName, property, value);
            } else if (file.isFile() && file.getName().equalsIgnoreCase(fileName)) {
                updatePackageFile(file, property, value);
            }
        }
    }

    private static void updatePackageFile(File file, String property, String value) {
        try {
            boolean updated = false;
            StringBuilder content = new StringBuilder();
            BufferedReader reader = new BufferedReader(new FileReader(file));
            String line;

            while ((line = reader.readLine()) != null) {
                if (line.contains("\"" + property + "\"") && !updated) {
                    line = line.replaceAll(":\\s*\".*\",", ": \"" + value + "\",");
                    updated = true;
                }
                content.append(line).append("\n");
            }
            reader.close();

            if (updated) {
                FileWriter writer = new FileWriter(file);
                writer.write(content.toString());
                writer.close();
                System.out.println(
                        "The property '" + property + "' was successfully updated on file '" + file.getName() + "'.");
            } else {
                System.out.println(
                        "The property '" + property + "' was not found on file '" + file.getName() + "'.");
            }
        } catch (IOException e) {
            System.out.println(ERROR_MESSAGE);
            e.printStackTrace();
        }
    }

    private static String getEnvVariable(String envPath, String variableName) {
        File file = new File(envPath);
        String result = "";

        if (file.exists()) {
            try {
                BufferedReader reader = new BufferedReader(new FileReader(file));
                String line;

                while ((line = reader.readLine()) != null) {
                    String[] parts = line.split("=");
                    if (parts.length == 2 && parts[0].equals(variableName)) {
                        result = parts[1];
                    }
                }
                reader.close();
            } catch (IOException e) {
                System.out.println(ERROR_MESSAGE_READING_ENV_ERROR);
                e.printStackTrace();
            }
        } else {
            System.out.println(ERROR_MESSAGE_NO_ENV_FILE);
        }

        if (result.equals("")) {
            throw new RuntimeException(ERROR_MESSAGE_NO_VERSION_PROPERTY);
        }

        return result;

    }
}
