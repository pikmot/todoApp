package nology.io.todo.task;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.jdbc.Sql;

import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Sql(scripts = "/sql/cleanup.sql", executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD)
public class TaskEndToEndTest {

    //random port assigned
    @LocalServerPort
    private int port;
    
    private TaskRepository taskRepository;

    @Autowired
    public TaskEndToEndTest(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @BeforeEach
    public void setup(){
        RestAssured.port = this.port;
    }

    @Test
    public void getAllTasks_NoTaskInDB_ReturnOKAndEmptyArray(){
        //arrange
        //act
        given().when().get("/tasks")
                .then().statusCode(HttpStatus.OK.value());
        //asert

    }

    
}
