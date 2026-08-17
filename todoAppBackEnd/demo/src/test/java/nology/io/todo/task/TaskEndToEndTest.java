package nology.io.todo.task;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.jdbc.Sql;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import nology.io.todo.task.entities.Task;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

import java.util.HashMap;

import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

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
                .then().statusCode(HttpStatus.OK.value())
                .body("$",hasSize(0));
        //asert

    }

    @Test
    public void getAllTasks_TasksInDB_ReturnsOKAndArrayOfTasksTitleDescriptionStatus() {

        //arrange
        Task task1 = new Task();
        task1.setTitle("Title 1");
        task1.setDescription("Description 1");
        task1.setStatus("Start");
        taskRepository.saveAndFlush(task1);

        Task task2 = new Task();
        task2.setTitle("Title 2");
        task2.setDescription("Description 2");
        task2.setStatus("Start");
        taskRepository.saveAndFlush(task2);

        //testing body type
        given().when().get("/tasks")
                .then().statusCode(HttpStatus.OK.value())
                .body("$", hasSize(2))
                .body("title", hasItems("Title 1", "Title 2"))
                .body("description", hasItems("Description 1", "Description 2"))
                .body("status", hasItems("Start", "Start"))
                .body(matchesJsonSchemaInClasspath("schemas/task-list-schema.json"));
    }

    //id doesn't match 404
    @Test
    public void getById_IdNotFond(){

        //arrange
        long id = 1L;

        //testing body type
        given().when().get("/tasks/" + id)
                .then().statusCode(HttpStatus.NOT_FOUND.value())
                .body("message", matchesPattern("CAN'T FIND TASK WITH ID 1"))
                .body("error", matchesPattern("Not Found"))
                .body(matchesJsonSchemaInClasspath("schemas/api-error-schema.json"));

    }

    //id invialid
    @Test
    public void getById_InvalidId_BadRequest(){
        given().when().get("tasks/test")
                .then().log().body()
                .statusCode(HttpStatus.BAD_REQUEST.value())
                .body("error", matchesPattern("Bad Request"))
                .body(matchesJsonSchemaInClasspath("schemas/api-error-schema.json"));

    }

    //suceed with id
    @Test
    public void getById_ValidForExistingTask_Success() {

        //arrange
        Task task1 = new Task();
        task1.setTitle("Title 1");
        task1.setDescription("Description 1");
        task1.setStatus("START");

        taskRepository.saveAndFlush(task1);

        //act
        given().when().get("tasks/" + task1.getId())
                .then()
                // .log().body()
                .statusCode(HttpStatus.OK.value())
                .body("title", matchesPattern(task1.getTitle()))
                .body("description", matchesPattern(task1.getDescription()))
                .body("status", matchesPattern(task1.getStatus()))
                .body(matchesJsonSchemaInClasspath("schemas/task-schema.json"));

    }

    @Test
    public void createTask_InvalidDto_BadRequest(){

        HashMap<String, String> data = new HashMap<>();
        data.put("title", "");


        given().contentType(ContentType.JSON).body(data)
                .when().post("/tasks")
                .then().log().body()
                .statusCode(HttpStatus.BAD_REQUEST.value()); //caught springs error

    }

    //creating task via DTO/ hash map
    @Test
    public void createBook_ValidDto_Created(){

         HashMap<String, String> data = new HashMap<>();
         data.put("title", "Title 1");
         data.put("description", "Description 1");
         data.put("status", "START");

         given().contentType(ContentType.JSON).body(data)
            .when().post("/tasks")
            .then().log().body()
            .statusCode(HttpStatus.CREATED.value())
            .body("title", matchesPattern("Title 1"))
            .body("description", matchesPattern("Description 1"))
            .body("status", matchesPattern("START"))
            .body(matchesJsonSchemaInClasspath("schemas/task-schema.json"));


    }



    
}

