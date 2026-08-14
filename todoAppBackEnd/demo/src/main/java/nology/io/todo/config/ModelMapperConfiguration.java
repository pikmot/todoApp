package nology.io.todo.config;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfiguration {
    
    //runs first
    @Bean
    public ModelMapper modelMapper(){

        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration()
                .setSkipNullEnabled(true) //skip null instances
                .setPreferNestedProperties(false)
                .setMatchingStrategy(MatchingStrategies.STRICT); //wierd errors

        mapper.addConverter(ctx -> {
            String source = ctx.getSource();

            //repalce all whites spaces with a single white space
            return source == null ? null : source.trim().replace("\\s+", " ");
    }, String.class, String.class);

    
        return mapper;

    }

}
