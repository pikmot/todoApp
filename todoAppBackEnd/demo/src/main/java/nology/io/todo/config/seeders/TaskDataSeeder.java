package nology.io.todo.config.seeders;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import nology.io.todo.task.TaskRepository;
import nology.io.todo.task.entities.Task;

@Component
@Profile({"dev"})
public class TaskDataSeeder implements CommandLineRunner{

    private final TaskRepository repo;

    public TaskDataSeeder(TaskRepository repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) throws Exception {
        //what are we running
        //default if there are no task should be 1 task
        if(repo.count() == 0) {
            System.out.println("CREATING TASK");
            Task task = new Task();

            //seting fields
            task.setTitle("Task 1");
            task.setDescription("ADD DESCRIPTION");
            task.setStatus("START");

            //adding to database
            repo.saveAndFlush(task);


          
        }
    }
    


}
