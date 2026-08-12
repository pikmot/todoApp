package nology.io.todo.task;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import nology.io.todo.common.exceptions.NotFoundException;
import nology.io.todo.task.dtos.CreateTaskRequest;
import nology.io.todo.task.dtos.UpdateTaskRequest;
import nology.io.todo.task.entities.Task;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;




@RestController
@RequestMapping("/tasks")
@Tag(name = "Tasks Controller")
public class TasksController {

    private final TaskService taskService;

    public TasksController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping()
    public ResponseEntity<List<Task>> findAllTasks() {
        List<Task> allTasks = this.taskService.findAll();
        // return new ResponseEntity<List<Task>>(allTasks, HttpStatus.OK);
        return ResponseEntity.ok(allTasks);
    }
    
    @PostMapping()
    public ResponseEntity<Task> createTask(@RequestBody @Valid CreateTaskRequest data) {

        // System.out.println(data);
        
        Task createdTask = this.taskService.create(data);
        //convention return object created + CODE
        return new ResponseEntity<Task>(createdTask, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {

        //can be null but convention -> throws error IF NULL
        // Task foundTask = this.taskService.findById(id).orElse(null);
        // return ResponseEntity.ok(foundTask);

        // Optional<Task> result = this.taskService.findById(id);
        // if(result.isPresent()){
        //     return ResponseEntity.ok(result.get());
        // }

        //needs a messaage
        // return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        //return entity != String must be a Book -> <?> instead of <Task> for return -> CODE SMELLS -> BAD FOR DOCUMENT
        // return new ResponseEntity<String>("Could not find Book with id " + id, HttpStatus.NOT_FOUND);
        
        //correct way is to throw an exception if there is null
        Task foundTask = this.taskService.findById(id).orElseThrow(() -> new NotFoundException("CAN'T FIND TASK WITH ID " + id));
    
        return ResponseEntity.ok(foundTask);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Task> updateTaskById(@PathVariable Long id, @Valid @RequestBody UpdateTaskRequest data){

        Task foundTask = this.taskService.updateById(id,data).orElseThrow(() -> new NotFoundException("CAN'T FIND TASK WITH ID " + id));

        return ResponseEntity.ok(foundTask);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTaskById(@PathVariable Long id){

        boolean isDeleted = this.taskService.deleteById(id);

        //check if deleted
        if(isDeleted){
            //empty since object sucessfully delted
            return ResponseEntity.noContent().build();
        }

        //else throw NOT found just like Get Exception
        throw new NotFoundException("CAN'T FIND AND DELETE TASK THAT DOESN'T EXIST with ID " + id);

    }
    
    
}
