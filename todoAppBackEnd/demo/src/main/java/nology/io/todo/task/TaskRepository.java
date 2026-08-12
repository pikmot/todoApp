package nology.io.todo.task;

import org.springframework.data.jpa.repository.JpaRepository;

import nology.io.todo.task.entities.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

    

    
}
