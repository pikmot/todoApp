package nology.io.todo.task.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class UpdateTaskRequest {

    //@Not Empty === @Not Blank BUT we want nul
    // missing field is FINE NOT EMPTY STRING("")
    @Pattern(regexp = ".*\\S.*", message = "Title Cannot be Empty")
    private String title;

    @Pattern(regexp = ".*\\S.*", message = "Description Cannot be Empty")
    private String description;

    @Pattern(regexp = ".*\\S.*", message = "Status Cannot be Empty")
    private String status;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public UpdateTaskRequest() {
    }

    @Override
    public String toString() {
        return "UpdateTaskRequest [title=" + title + ", description=" + description + ", status=" + status + "]";
    }

    
    
}
