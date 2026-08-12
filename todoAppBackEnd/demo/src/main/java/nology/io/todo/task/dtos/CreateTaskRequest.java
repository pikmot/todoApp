package nology.io.todo.task.dtos;

import jakarta.validation.constraints.NotBlank;

public class CreateTaskRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String description;

    @NotBlank
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

    public void setdescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
}
