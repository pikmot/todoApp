package nology.io.todo.task;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import jakarta.validation.Valid;
import nology.io.todo.task.dtos.CreateTaskRequest;
import nology.io.todo.task.dtos.UpdateTaskRequest;
import nology.io.todo.task.entities.Task;

@Service
public class TaskService {
    
    private final TaskRepository repo;
    private final ModelMapper mapper;

    public TaskService(TaskRepository repo, ModelMapper mapper) {
        this.repo = repo;
        this.mapper = mapper;
    }

    public List<Task> findAll() {
        return this.repo.findAll();
    }

    public Task create(CreateTaskRequest data) {
        
        // //sanetize here like remove white space
        // Task createdTask = new Task();
        // createdTask.setTitle(data.getTitle().trim());
        // createdTask.setDescription(data.getDescription().trim());
        // createdTask.setStatus(data.getStatus().trim());

        // //writing sql to save to database from repo
        // 

        Task createdTask =  this.mapper.map(data ,  Task.class);
        this.repo.saveAndFlush(createdTask);
        
        return createdTask;
    }

	public Optional<Task> findById(Long id) {
		return this.repo.findById(id);
         
	}

    public boolean deleteById(Long id) {
        
        //grab the option to validate if null first
        Optional<Task> result = this.findById(id);
        
        //check if optional is empty FIRST
        if (result.isEmpty()){
            return false;
        }

        //delete from database
        this.repo.delete(result.get());
        return true;

    }

    public Optional<Task> updateById(Long id, UpdateTaskRequest data) {
        Optional<Task> result = this.findById(id);
        if (result.isEmpty()){
            //check if empty -> return this empty
            return result;
        }

        //else get the book and return
        Task foundTask = result.get();

        // //check null else set
        // if(data.getTitle() != null){
        //     foundTask.setTitle(data.getTitle().trim());
        // }

        // if(data.getDescription() != null){
        //     foundTask.setDescription(data.getDescription().trim());
        // }

        // if(data.getStatus() !=null ){
        //     foundTask.setStatus(data.getStatus());
        // }

        this.mapper.map(data,foundTask);

        //save the change in database
        this.repo.saveAndFlush(foundTask);

        //return copy for updated task
        return Optional.of(foundTask);

    }

    

}
