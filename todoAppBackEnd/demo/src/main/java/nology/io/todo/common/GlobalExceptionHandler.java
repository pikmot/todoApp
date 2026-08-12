package nology.io.todo.common;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import nology.io.todo.common.exceptions.NotFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {

    //globally handles NOT FOUND EXCEPTION  -> instead of HORRBIEL error -> nice msg ONLY
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<String> handleNotFoundException(NotFoundException e){
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
    }
    
}
