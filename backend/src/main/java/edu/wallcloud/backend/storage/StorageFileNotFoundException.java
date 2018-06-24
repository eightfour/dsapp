package edu.wallcloud.backend.storage;

public class StorageFileNotFoundException extends StorageException {

    private static final long serialVersionUID = -5531347080722119755L;

	public StorageFileNotFoundException(String message) {
        super(message);
    }

    public StorageFileNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}