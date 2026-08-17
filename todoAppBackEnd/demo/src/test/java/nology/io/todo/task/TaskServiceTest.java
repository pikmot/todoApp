package nology.io.todo.task;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;
import org.springframework.web.client.HttpClientErrorException.UnprocessableContent;

import static org.mockito.Mockito.when;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.booleanThat;
import static org.mockito.Mockito.never;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import static org.mockito.ArgumentMatchers.any;


import java.lang.StackWalker.Option;
import java.util.Optional;

import nology.io.todo.common.exceptions.BadRequestException;
import nology.io.todo.task.dtos.CreateTaskRequest;
import nology.io.todo.task.dtos.UpdateTaskRequest;
import nology.io.todo.task.entities.Task;

@ExtendWith(MockitoExtension.class)
public class TaskServiceTest {

    @Mock
    private TaskRepository repo;
    @Mock
    private ModelMapper mapper;

    @Spy
    @InjectMocks
    private TaskService taskService;

    @Test
    public void findAll_CallsFindAllWithTasks(){

        this.taskService.findAll();
        verify(this.repo).findAll();
    }

    @Test
    public void findById_CallFindByIdWithCorrectArg(){
        this.taskService.findById(1L);
        verify(this.repo).findById(1L);
    }

    @Test
    public void create_WhenTaskEist_SavesTaskInDB(){

        //arrange
        CreateTaskRequest dto = new CreateTaskRequest();
        dto.setTitle("Title 1");
        dto.setDescription("Description 1");
        dto.setStatus("START");

        Task fakeTask = new Task();
        fakeTask.setTitle("Title 1");
        fakeTask.setDescription("Description 1");
        fakeTask.setStatus("START");

        when(this.mapper.map(dto,Task.class)).thenReturn(fakeTask);

        //act
        this.taskService.create(dto);

        verify(this.repo).saveAndFlush(fakeTask);
    }

    @Test
    public void create_WhenTaskBodyInvalid_ThrowsException(){

        CreateTaskRequest dto = new CreateTaskRequest();
        dto.setTitle("");
        dto.setDescription("Description 1");
        dto.setStatus("START");

        Task fakeTask = new Task();
        fakeTask.setTitle("");
        fakeTask.setDescription("Description 1");
        fakeTask.setStatus("START");

        // when(this.taskService.findById(1L)).thenReturn(Optional.empty());

        //assert
        assertThrows(BadRequestException.class, () -> this.taskService.create(dto));
        verify(this.repo, never()).saveAndFlush(fakeTask);

    }
    
    @Test
    public void delete_WhenTaskExists_DeletesFromDBReturnsTrue(){

        Task fakeTask = new Task();
        fakeTask.setTitle("Title 1");
        fakeTask.setDescription("Description 1");
        fakeTask.setStatus("START");

        when(this.repo.findById(anyLong())).thenReturn(Optional.of(fakeTask));

        //act
        boolean result = this.taskService.deleteById(1L);

        //assert
        verify(this.taskService).findById(1L);
        verify(this.repo).delete(fakeTask);
        assertTrue(result);

    }

    @Test
    public void delete_WhenTaskDoesNotExist_DoesNotCallDeleteReturnsFalse(){

        //act
        boolean result = this.taskService.deleteById(1L);

        //assert
        verify(this.taskService).findById(1L);
        verify(this.repo, never()).delete(any(Task.class));
        assertFalse(result);
    }

    @Test
    public void updateTaskById_whenTaskDoesNotExist_DoesNotSaveBook(){
        //arrange
        when(this.repo.findById(anyLong())).thenReturn(Optional.empty());
        UpdateTaskRequest dto = new UpdateTaskRequest();

        //act
        this.taskService.updateById(1L,dto);

        //assert
        // verify(this.taskService.findById(1L));
        verify(this.mapper, never()).map(dto,new Task());
        verify(this.repo, never()).saveAndFlush(any(Task.class));
    }

    @Test
    public void updateTaskById_whenTaskDoesExist_SavesBook(){

        //arrange
        UpdateTaskRequest dto = new UpdateTaskRequest();
        dto.setTitle("Title 1");


        Task fakeTask = new Task();
        fakeTask.setTitle("Title 1");

        when(this.repo.findById(1L)).thenReturn(Optional.of(fakeTask));

        //act
        Optional<Task> result = this.taskService.updateById(1L, dto);

        assertTrue(result.isPresent());
        verify(this.mapper).map(dto,fakeTask);
        verify(this.repo).saveAndFlush(fakeTask);

    }
}
