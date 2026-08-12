package nology.io.todo.common.exceptions;

public class NotFoundException extends RuntimeException{

    //500 error needs to be handled
    public NotFoundException(String message) {
        super(message);
    }

    
    
}


