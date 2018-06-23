package edu.wallcloud.backend.storage;

public class StorageException extends RuntimeException {

    private static final long serialVersionUID = -5867450942485186143L;

	public StorageException(String message) {
        super(message);
    }

    public StorageException(String message, Throwable cause){
        super(message, cause);
    }
}